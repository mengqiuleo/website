<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-19 16:57:11
 * @LastEditTime: 2022-08-21 16:23:13
-->
<template>
  <div id="aboutMe">
    <div class="container">
      <div class="content">
        <!-- title -->
        <div class="testimonial__title">
            <div class="sectionTitle">
              About me
              <h6>🥳 这里是小y  </h6>
            </div>
        </div>

        <!-- sub-title -->
        <div class="testimonial__subTitle">
            <div class="paragraph">
              一只普通大学生，山西👧🏻，立志成为一名优秀的 <br/> 前端开发程序媛🤓.  因为一个blog入坑前端， 始终坚信，唯有热爱 <br/> 能抵挡岁月漫长.
                  所以, 加油吧💪🏻  <br/> <strong> speak less do more </strong>
            </div>
        </div>

        <!-- motto -->
        <div class="motto">
          <Card />
          <!-- 打字机效果 -->
          <div class="type-str">
            <typeStr />
          </div>
        </div>

        <!-- clock -->
        <clock class="clock" />

        <!-- flag -->
        <div class="flag">
          <ul>
            <li>永远热爱, 永远年轻</li>
            <li>对一切新鲜事物充满好奇</li>
            <li>目标是成为一名出色的前端工程师</li>
            <li>希望每天都进步一点点</li>
          </ul>
        </div>

        <!-- 箭头 -->
        <div class="arrow">
          <div id="lottie"></div>
        </div>

        <!-- 轮播图 -->
        <div class="swiper">
          <div class="swiper-bg"></div>
          <div class="article">
            <Tabs />
          </div>
        </div>

        <!-- bottom -->
        <div class="testimonial__subTitle2">
            <div class="paragraph2">
              希望秋招可以拿到dream offer，希望以后仍然可以像大学这样快乐地敲代码。<br/>
              今天的成功，究竟会让人明天继续成功，还是失败。我们也不知道，今天失败的人，等待他们的会是成功，还是继续失败。<br/>
              <strong>生活嘛，本就不是线性的，起伏曲折，大多是命运。</strong><br/>
              而就算你的曲线是最差那个，失败完了又失败，那又能如何呢？<br/>
              希望自己永远不要忘了拓展知识网和写代码解决问题的快乐。

            </div>
        </div>

        <!-- blogButton -->
        <div class="blogButton">
          <blogButton />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import  Clock  from '../../components/Clock.vue';
import typeStr from '../../components/typeStr.vue';
import Card from '../../components/Card.vue'
import lottie from "lottie-web";
import arrowData from '../../assets/lottie/arrow'
import Tabs from '../../components/Tabs.vue'
import blogButton from '../../components/blogButton'

export default defineComponent({
  components: {
    Clock,
    typeStr,
    Card,
    Tabs,
    blogButton
  },
  mounted() {
    this.svgFun()
  },
  setup() {

    const svgFun = () => {
      let params = {
        container: document.getElementById("lottie"),
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: arrowData,
      };
      let anim;
      anim = lottie.loadAnimation(params);
    }

    return {
      svgFun
    };
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

.container .clock {
  position: absolute;
  top: 280px;
  left: 59px;
}

.testimonial__title {
  position: absolute;
  top:  60px;
  left: 550px;
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

.testimonial__subTitle {
  position: absolute;
  top: 200px;
  left: 100px;
}

.paragraph {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5em;
  text-align: center;
  color: #546682;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.motto {
  position: absolute;
  top: 200px;
  left: 900px;
}

.type-str {
  position: absolute;
  top: 80px;
  left: 30px;
  /* left: 500px; */
  z-index: 2;
  font-family: 'Poppins';
  font-size: 25px;
}

.flag {
  position: absolute;
  top: 370px;
  left: 550px;
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5em;
  text-align: left;
  color: #546682;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.arrow {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 320px;
  left: 350px;
  /* transform:rotate(360deg) */
}

.swiper-bg {
    position: absolute;
    /* full width(check arrow comments) + 10px */
    width: 900px;
    /* full height(check arrow comments) + 10px */
    height: 600px;
    border-radius: 12px;
    background: #C6D2E0;;
    opacity: 0.8;
    /* z-index: 99; */
    left: 50%;
    top: 550px;
    transform: translate(-50%, 0);
    /* z-index: -1; */
  }

.testimonial__subTitle2 {
  position: absolute;
  top: 1200px;
  left: 215px;
}

.paragraph2 {
  font-family: 'Inter';
  font-weight: 400;
  font-size: 1.8rem;
  line-height: 1.5em;
  text-align: center;
  color: #546682;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
}

.blogButton {
  position: absolute;
  top: 1400px;
  left: 600px;
}
</style>
