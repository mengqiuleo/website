<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:25:08
 * @LastEditTime: 2022-08-22 01:52:03
-->
<template>
  <div>
    <Nav />
    <Home />
    <aboutMe />
    <Project />

  </div>
</template>

<script>
import { defineComponent } from 'vue';
import aboutMe from './sections/AboutMe/AboutMe.vue';
import Home from './sections/Home/Home.vue';
//import Header from './sections/Header/Header.vue';
import Project from './sections/project/Project.vue';
import Nav from './sections/Nav/Nav.vue'

export default defineComponent({
  name: 'App',
  components: {
    Nav,
    aboutMe,
    Home,
    //Header,
    Project,
  },
  setup() {},
});

</script>
<style lang="scss" >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "PingFang SC", "Microsoft Yahei",
    sans-serif;
}

html{
    font-size: 10px;
    font-family: 'Roboto Mono', monospace;
    background-color: #efebfa;
}

::-webkit-scrollbar {
  width: 10px;
  height: 100%;
  background: hsl(230deg, 7%, 61%);
}

::-webkit-scrollbar-thumb{
  background-color: #FFC090;
  border-radius: 15px;
}
</style>
