<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-20 09:49:06
 * @LastEditTime: 2022-08-22 17:57:52
-->
<template>
  <div id="project">
    <!-- title -->
    <div class="container">
        <div class="content">
          <!-- title -->
          <div class="testimonial__title">
              <div class="sectionTitle">
                个人项目
                <h6> 享受coding的乐趣 🤪 </h6>
              </div>
          </div>

          <!-- project -->
          <!-- <projectCard /> -->

          <!-- 瀑布流 -->
          <div class="prcDetail-container">
            <!-- <div v-for="item "></div> -->
            <projectCard :img="img" :title="title" :subTitle="subTitle" />
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import projectCard from '@/components/projectCard.vue';
// import prcDetail from '../../components/picDetail.vue'
export default defineComponent({
  components: {
    projectCard
    // prcDetail
  },
  setup() {
    const img = '../assets/头像.jpg';
    const title = 'LeetCode题解';
    const subTitle = 'LeetCode题解，使用JavaScript实现'
    return {
      img,
      title,
      subTitle
    }
  }
})
</script>
<style lang='scss' scoped>
.container {
  position: relative;
  background: url(../../assets/bg2.png) no-repeat center center;
  background-size:cover;
  height: 1400px;
}

.testimonial__title {
  position: absolute;
  top:  60px;
  left: 510px;
}

.sectionTitle {
  text-align: center;
  font-family: 'Poppins';
  font-weight: 600;
  letter-spacing: 0.05rem;
  font-size: 5rem;
  color: #C6D2E0;;
  @media only screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
}

.prcDetail-container {
  position: absolute;
}
</style>
