<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:57:11
 * @LastEditTime: 2022-08-22 15:24:19
-->
<template>
  <div id="home">
    <div class="container">
      <!-- 黑白切换 -->
      <!-- <div class="switch">
        <Switch />
      </div> -->

      <!-- 浮动 -->
      <div class="shell">
        <div class="content" @mousemove="moveEvent($event)">
          <div class="image">
            <div class="name">
              <h1>
                Hello, I am <strong class="text-primary" aria-label="Okiki Ojo">Pjy.</strong>
              </h1>
              <h2>The front-end development - Student</h2>
            </div>
            <div class="img1"></div>
          </div>
        </div>
      </div>

      <!-- button  -->
      <Button class="btn" @click="getThere($event)" >
        <a href="#aboutMe"></a>
      </Button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import Button from '../../components/Button.vue';
// import Switch from '../../components/switch.vue';

export default defineComponent({
  components:{
    Button,
    // Switch
  },
  setup() {

    const moveEvent = (e) => {
      const img1 = document.querySelector('.img1')
      const name = document.querySelector('.name')
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let namex = img1.offsetLeft;
      let namey = img1.offsetTop;
      let img1x = img1.offsetLeft;
      let img1Y = img1.offsetTop;

      let diffx = (mouseX-img1x)/4;
      let diffy = (mouseY - img1Y)/4;
      let namediffx = (mouseX-namex)/5;
      let namediffy = (mouseY - namey)/5;

      img1.style.transform = `translate(${diffx}px,${diffy}px)`
      name.style.transform = `translate(${namediffx}px,${namediffy}px)`
    }

    const getThere = (e) => {
      //e.currentTarget.scrollIntoView({ behavior: "smooth",block: "start" })
      e.currentTarget.scrollIntoView({
            behavior: 'smooth' //重点在此
      })
      console.log('成功')
    }
    return {
      moveEvent,
      getThere
    }
  },
});
</script>

<style lang="css" scoped>
.container{
  height: 650px;
  background-color: bisque;
  position: relative;
  justify-content: center;
  align-items: center;
}

.switch {
  position: absolute;
  width: 100px;
  height: 50px;
  top: 10px;
  left: 10px;
}

.container .shell {
  display: flex;
  width: 100%;
  height: 100vh;
}
.content {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 0;
}

.content .image {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.image div {
  width: 100%;
  height: 100%;
  background-size: cover;
  position: absolute;
}
.content .name {
  color: #F9F3EE;
  z-index: 5;
  /* width: 200px; */
  height: 180px;
  top:250px;
  left: 200px;
}
.content .name h1 {
  font: 700 100px '优设标题黑';
}

.content .name h1 strong{
  color: #1B1A17;
  font: 700 100px '优设标题黑';
}

.content .name h2 {
  font: 90 20px '优设标题黑';
}

.content .img1 {
  border-radius: 25%;
  width: 300px;
  height: 300px;
  top:180px;
  left: 800px;
  background-image: url(../../assets/头像.jpg);
}

.container .btn {
  position: absolute;
  width: 100px;
  height: 100px;
  top: 600px;
  left: 680px;
}
</style>
