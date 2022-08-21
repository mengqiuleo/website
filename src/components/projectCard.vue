<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-21 22:05:24
 * @LastEditTime: 2022-08-22 01:45:07
-->
<template>
  <div class="project-card">
    <div class="container">
      <div class="card" data-tilt>
        <img src="../assets/logo.jpg" alt="">
        <h2>LeetCode题解</h2>
        <p>一些题解思路，使用JavaScript实现</p>
        <div class="links">
          <a href=""><img src="../assets/icons/vue.png" alt=""></a>
          <a href=""><img src="../assets/icons/eslint.png" alt=""></a>
          <a href=""><img src="../assets/icons/webpack.png" alt=""></a>
        </div>
        <a href="#" class="btn">124654</a>
      </div>
    </div>
  </div>

</template>

<script>
import tils from '../utils/tilt'
import { defineComponent } from 'vue'
export default defineComponent({
  mounted() {
    tils()
  },
  setup() {
    return {

    }
  }
})
</script>
<style lang='css' scoped>
.project-card {
  position: relative;
}
.container {
  position: absolute;
  left: 190px;
  top: 200px;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
.card {
  height: 460px;
  width: 323px;
  color: #fff;
  text-align: center;
  padding: 50px 35px;
  border: 1px solid rgba(255,255,255,0.3);
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px rgb(0, 0, 0, 0.1);
  border-radius: 16px;
}
.card img {
  width: 140px;
  border-radius: 25%;
}
.card h2 {
  font-size: 30px;
  font-weight: 600;
  margin-top: 20px;
}
.card p {
  font-size: 18px;
  margin: 10px auto;
  max-width: 330px;
}
.links a{
  text-decoration: none;
}
.links img {
  width: 40px;
  /* transform: scale(0.5); */
  border-radius: 50%;
  margin: 10px 5px;
  transition: background 0.5s ease 0s;
}
.links img:hover {
  background: #FEFBF6;
}
.btn {
  text-decoration: none;
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  background: #fff;
  color: #ff01cf;
  padding: 10px 30px;
  border-radius: 30px;
  margin: 18px 0 10px;
}
</style>
