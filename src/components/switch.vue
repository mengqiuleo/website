<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-22 02:03:35
 * @LastEditTime: 2022-08-22 02:17:54
-->
<template>
  <div class="container">
    <div class="switch-box">
      <input type="checkbox" id="switch">
      <label class="switch" for="switch"
          @mousedown="mouseDown" @mouseup="mouseUp" @click="handleChange($event)"></label>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
      // switch事件
      // 1. switch 长按改变样式, 按下计时， 超过2s则，添加动画类
      let switchLangPressTimer;
      const switchMouseDown = (labelElement) => {
        let time = 0;
        switchLangPressTimer = setInterval(() => {
          time += 200;
          if (time > 200) {
            labelElement.classList.add('circle-screw');
            clearInterval(switchLangPressTimer);
          }
        }, 200);
      }
      const switchEl = document.getElementById('switch');
      const mouseDown = () => {
        const nextLabel = switchEl.nextElementSibling;
        switchMouseDown(nextLabel);
      }
      const mouseUp =  (event) => {
        clearInterval(switchLangPressTimer);
        switchEl.nextElementSibling.classList.remove('circle-screw');
      }

      const handleChange =  function(event) {
        const { checked } = event.target;
        if (checked) {
          document.body.classList.remove('light');
          document.body.classList.add('dark');
        } else {
          document.body.classList.add('light');
          document.body.classList.remove('dark');
        }
      }

    return {
      mouseDown,
      mouseUp,
      handleChange
    }
  }
})
</script>
<style lang='css' scoped>
.container {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  transition: background-color 0.4s linear;
  background-color: #f2f2f2;
}

.container .dark {
  background-color: #141414;
}
.switch-box {
  position: relative;
}
[type=checkbox] {
  width: 180px;
  height: 90px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  margin: 0;
  z-index: 1;
  cursor: pointer;
}
/* switch */
.switch {
  width: 180px;
  height: 90px;
  border-radius: 45px;
  background-color: #ffe09d;
  display: flex;
  padding: 6px;
  align-items: center;
  transition: background-color 0.3s ease;
}
/* siwtch-圆样式及动画设置 */
.switch::before {
  content: '';
  width: 81px;
  height: 81px;
  border-radius: 80px;
  background-color: #fff;
  background-image: url('../assets/sun-moon/sun-icon.svg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: 60px auto;
  transition: all 0.3s ease;
  position: relative;
  margin-left: 0;
  box-shadow: 2px 4px 10px -2px rgba(227, 193, 120, 0.9);
}

/* checked时颜色变化 */
[type=checkbox]:checked + .switch {
  background-color: #1f1f1f;
}
/* checked时圆的位置变化 */
[type=checkbox]:checked +.switch::before {
  margin-left: 88px;
  background-color: #313131;
  background-image: url('../assets/sun-moon/moon-icon.svg');
  box-shadow: -2px 4px 10px -2px #000;
}
/* 圆圈长按时添加形变类:circie-screw, ps: 此时未checked */
.switch.circle-screw::before {
  width: 98px;
}
/* unchecked时长按效果, 达到 */
[type=checkbox]:checked + .switch.circle-screw::before {
  width: 98px;
  margin-left: 72px;
}
</style>
