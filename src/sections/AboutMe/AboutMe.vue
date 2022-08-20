<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:57:11
 * @LastEditTime: 2022-08-20 19:52:05
-->
<template>
  <div id="aboutMe">
    <div class="container">
      <div class="content"><clock /></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import  Clock  from '../../components/Clock.vue';

export default defineComponent({
  components: {
    Clock
  },
  setup() {
    return {};
  },
});
</script>
<style lang='css' scoped>
.container {
  position: relative;
  height: 1500px;
  background: url(../../assets/bg.svg) no-repeat center center;
  background-size:cover;
}

</style>
