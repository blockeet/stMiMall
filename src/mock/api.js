import Mock from 'mockjs'

Mock.mock('/api/user/login', {
  status: 0,
  data: {
    id: 55,
    username: 'adminmmm',
    email: 'adminmmm@51purse.com',
    phone: null,
    role: 1,
    createTime: 5559048325000,
    updateTime: 5559048325000
  }
})
