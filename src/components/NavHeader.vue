<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">小米商城</a>
          <a href="javascript:;">MIUI</a>
          <a href="javascript:;">云服务</a>
          <a href="javascript:;">协议规则</a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" v-if="!username">登录</a>
          <a href="javascript:;">订单</a>
          <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo"><a href="/index"></a></div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item, index) in phoneList" :key="index">
                  <a v-bind:href="'/product/' + item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span></div>
          <div class="item-menu">
            <span>电视</span></div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javascript:'"></a>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-hrader',
  data () {
    return {
      username: 'admin',
      phoneList: []
    }
  },
  filters: {
    currency (val) {
      if (!val) return '0元'
      return `${val}起`
    }
  },
  mounted () {
    this.getProduceList()
  },
  methods: {
    getProduceList () {
      this.axios.get('/products', {
        params: {
          categeryId: '100012',
          pageSize: 6,
          pageNum: 2
        }
      }).then((res) => {
        console.log(res.list)
        this.phoneList = res.list
      })
    },
    goToCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang='less'>
@import './../assets/less/config';
@import './../assets/less/base';
@import './../assets/less/mixin';
.header{
  .nav-topbar{
    height: 39px;
    line-height: 39px;
    background-color: @colorB;
    color: #b0b0b0;
    .container{
      .flex();
      a{
        display: inline-block;
        color: #b0b0b0;
        margin-right: 17px;
        &:last-child{
        margin-right: 0px;
      }
      }
      .my-cart{
        width: 110px;
        background-color: #424242;
        text-align: center;
        .icon-cart{
          margin-right: 4px;
          .bgImg(16px, 12px, '/imgs/pngs/icon-cart-checked.png');
        }
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      .flex();
      .header-logo{
        display: inline-block;
        width: 55px;
        height: 55px;
        background-color: @colorA;
        a{
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before{
            content: ' ';
            .bgImg(55px, 55px, '/imgs/pngs/mi-logo.png');
            transition: margin .2s
          }
          &:after{
            content: ' ';
            .bgImg(55px, 55px, '/imgs/pngs/mi-home.png');
          }
          &:hover:before{
            margin-left: -55px;
            transition: margin .2s
          }
        }
      }
      .header-menu{
        display: inline-block;
        width: 643px;
        padding-left: 209px;
        .item-menu{
          display: inline-block;
          color: @colorB;
          font-weight: bold;
          font-size: @fontI;
          line-height: 112px;
          margin-right: 20px;
          span{
            cursor: pointer;
          }
          &:hover{
            color: @colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          }
          .children{
            position: absolute;
            top: 112px;
            left: 0;
            width: 1226px;
            height: 0;
            opacity: 0;
            overflow: hidden;
            border-top: 1px solid @colorH;
            box-shadow: 0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            z-index: 10;
            transition:all .5s;
            background-color: #ffffff;
            .product{
              position: relative;
              float: left;
              width: 16.6%;
              height: 220px;
              font-size: 12px;
              line-height: 12px;
              text-align: center;
              a{
                display: inline-block;
              }
              img{
                width: auto;
                height: 111px;
                margin-top: 26px;
              }
              .pro-img{
                height: 137px;
              }
              .pro-name{
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: @colorB;
              }
              .pro-price{
                color: @colorA;
              }
              &:before{
                content: '';
                position: absolute;
                top: 28px;
                right: 0;
                border-left: 1px solid @colorF;
                height: 100px;
                width: 1px;
              }
              &:last-child:before{
                  display: none;
              }
            }
          }
        }
      }
      .header-search{
        width: 319px;
        .wrapper{
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input{
            border: none;
            box-sizing: border-box;
            width: 264px;
            height: 50px;
            padding-left: 14px;
            border-right: 1px solid #e0e0e0;
          }
          a{
            .bgImg(18px, 18px, '/imgs/pngs/icon-search.png');
            margin-left:16px;
          }
        }
      }
    }
  }
}
</style>
