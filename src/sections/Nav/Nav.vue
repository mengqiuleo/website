<template>
  <nav>
      <div class="logo" @click="getThere($event)">
        <a href="#header">
            <v-btn depressed plain text color="white"> 小y </v-btn>
        </a>
      </div>
      <ul class="nav-menu">
        <li @click="getThere($event)">
          <a href="#home">
            <v-btn depressed plain text color="white"> home </v-btn>
          </a>
        </li>
        <li @click="getThere($event)">
          <a href="#header">
            <v-btn depressed plain text color="white"> header </v-btn>
          </a>
        </li>
        <li @click="getThere($event)">
          <a href="#aboutMe">
            <v-btn depressed plain text color="white"> aboutMe </v-btn>
          </a>
        </li>
        <li @click="getThere($event)">
          <a href="#project">
            <v-btn depressed plain text color="white"> 项目 </v-btn>
          </a>
        </li>
        <li>我的博客</li>
      </ul>
      <div class="burger" @click="handleChange">
        <div class="top-line"></div>
        <div class="middle-line"></div>
        <div class="bottom-line"></div>
      </div>
    </nav>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {


    // //注册监听
    const handleChange =  () => {
      // 获取汉堡按钮
      const burger = document.querySelector(".burger");
      // 获取导航菜单
      const navMenu = document.querySelector(
        ".nav-menu"
      );

      //获取菜单项
      const navMenuItems = document.querySelectorAll(
        ".nav-menu li"
      );

      // 汉堡按钮
      burger.classList.toggle("active");
      // 导航菜单开关
      navMenu.classList.toggle("open");

      // 菜单项动画
      navMenuItems.forEach((item, index) => {
        // 如果已添加animation,先取消
        if (item.style.animation) {
          item.style.animation = "";
        } else {
          item.style.animation = `0.3s ease-in slideIn forwards ${index *
        0.1 +
        0.3}s`;
        }
      });
    }

    // 锚点定位
    const getThere = (e) => {
      //e.currentTarget.scrollIntoView({ behavior: "smooth",block: "start" })
      e.currentTarget.scrollIntoView({
            behavior: 'smooth' //重点在此
      })
      console.log('成功')
    }

    return {
      handleChange,
      getThere
    }
  }
})
</script>
<style lang='css' scoped>
nav {
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* 左右padding */
  padding: 0 3vw;
  height: 53px;
  background-color: rgba(65, 81, 101, 0.9);
}

.logo {
  font-size: 24px;
  font-weight: 600;
  color: #dadbdd;
  /* 占一半宽度 */
  flex: 1;
}

.nav-menu {
  /* 占令一半宽度 */
  flex: 1;
  display: flex;
  justify-content: space-between;

  /* 最宽550px */
  max-width: 550px;
}

.nav-menu li {
  font-size: 18px;
  list-style: none;
  color: #dadbdd;
  font-weight: 600;
}

.burger div {
  /* 设置汉堡按钮三层条 */
  width: 25px;
  height: 3px;
  background-color: #dadbdd;
  margin: 4px;
}

.burger {
  display: none;
}

/* 屏幕适配 */
@media screen and (max-width: 768px) {
  .burger {
    display: block;
  }

  /* 小屏幕菜单显示位置为右侧抽屉形式 */
  .nav-menu {
    position: absolute;
    top: 80px;
    right: 0;
    bottom: 0;
    width: 50vw;
    height: calc( 100vh - 80px );

    background-color: rgb(65, 81, 101, 0.9);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    /* 动画 */
    transform: translateX(100%);
  }

  /* 菜单打开时，滑到初始位置 */
  .nav-menu.open {
    transform: translateX(0);
    transition: 0.4s ease-in-out;
  }

  /* 每个菜单项默认看不到，向右移动20象素 */
  .nav-menu li {
    /* 上下间距 */
    margin: 3vh;
    transform: translateX(20px);
    opacity: 0;
  }

  /* 汉堡按钮被点开时，设置按钮过渡 */
  .burger.active div {
    transition: 0.3s ease-in-out 0.3s;
  }

  /* 第一条线旋转45度 */
  .burger.active .top-line {
    transform: rotate(45deg) translate(4px, 6px);
  }

  /* 第三条线旋转-45度 */
  .burger.active .bottom-line {
    transform: rotate(-45deg) translate(4px, -6px);
  }

  /* 中间线向右移动并变为透明 */
  .burger.active .middle-line {
    opacity: 0;
    transform: translateX(10px);
    transition: 0.3s ease-in-out;
  }

  /* 菜单项滑入动画 */
  @keyframes slideIn {
    from {
      transform: translateX(20px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
}

</style>
