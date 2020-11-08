<template>
  <div class="service">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span>预约维修服务</li>
        <li><span class="icon-7day"></span>7天无理由退货</li>
        <li><span class="icon-15day"></span>15天免费换货</li>
        <li><span class="icon-post"></span>满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'service-bar'
}
</script>

<style lang="less">
@import './../assets/less/mixin';
.service{
  padding: 33px 0;
  color: #666666;
  font-size: 16px;
  li{
    display: inline-block;
    width: 24.9%;
    text-align: center;
    border-right: 1px solid #e5e5e5;
    &:last-child{
      border: none;
    }
    span{
      display: inline-block;
      width: 20px;
      height: 20px;
      vertical-align: middle;
      margin-right: 8px;
    }
    .icon-setting{
      .bgImg(20px, 20px, '/imgs/pngs/icon-setting.png');
    }
    .icon-7day{
      .bgImg(20px, 20px, '/imgs/pngs/icon-7day.png');
    }
    .icon-15day{
      .bgImg(20px, 20px, '/imgs/pngs/icon-15day.png');
    }
    .icon-post{
      .bgImg(20px, 20px, '/imgs/pngs/icon-post.png');
    }
  }
}
</style>
