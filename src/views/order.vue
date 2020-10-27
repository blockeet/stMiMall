<template>
  <div>
    <div></div>
    <test-com></test-com>
    <router-view></router-view>
  </div>
</template>

<script>
import TestCom from '../components/testCom'
export default {
  name: 'order',
  components: {
    TestCom
  }
}
</script>
