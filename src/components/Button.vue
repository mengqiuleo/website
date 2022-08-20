<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-20 17:02:29
 * @LastEditTime: 2022-08-20 17:29:40
-->
<template>
  <div class="love">
    <input id="switch" type="checkbox">
    <label class="love-heart" for="switch">
      <i class="left"></i>
      <i class="right"></i>
      <i class="bottom"></i>
      <div class="round"></div>
    </label>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {
    return {}
  }
})
</script>
<style lang='css' scoped>
.love-heart:before,#switch {
 display: none;
}

.love-heart, .love-heart::after {
 border-color: hsl(231deg 28% 86%);
 border: 1px solid;
 border-top-left-radius: 100px;
 border-top-right-radius: 100px;
 width: 10px;
 height: 8px;
 border-bottom: 0
}

.round {
 position: absolute;
 z-index: 1;
 width: 8px;
 height: 8px;
 background: hsl(0deg 0% 100%);
 -webkit-box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
         box-shadow: rgb(0 0 0 / 24%) 0px 0px 4px 0px;
 border-radius: 100%;
 left: 0px;
 bottom: -1px;
 -webkit-transition: all .5s ease;
 transition: all .5s ease;
 -webkit-animation: check-animation2 .5s forwards;
         animation: check-animation2 .5s forwards;
}

input:checked + label .round {
 -webkit-transform: translate(0px, 0px);
     -ms-transform: translate(0px, 0px);
         transform: translate(0px, 0px);
 -webkit-animation: check-animation .5s forwards;
         animation: check-animation .5s forwards;
 background-color: hsl(0deg 0% 100%);
}

@-webkit-keyframes check-animation {
 0% {
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
 }

 50% {
  -webkit-transform: translate(0px, 7px);
          transform: translate(0px, 7px);
 }

 100% {
  -webkit-transform: translate(7px, 7px);
          transform: translate(7px, 7px);
 }
}

@keyframes check-animation {
 0% {
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
 }

 50% {
  -webkit-transform: translate(0px, 7px);
          transform: translate(0px, 7px);
 }

 100% {
  -webkit-transform: translate(7px, 7px);
          transform: translate(7px, 7px);
 }
}

@-webkit-keyframes check-animation2 {
 0% {
  -webkit-transform: translate(7px, 7px);
          transform: translate(7px, 7px);
 }

 50% {
  -webkit-transform: translate(0px, 7px);
          transform: translate(0px, 7px);
 }

 100% {
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
 }
}

@keyframes check-animation2 {
 0% {
  -webkit-transform: translate(7px, 7px);
          transform: translate(7px, 7px);
 }

 50% {
  -webkit-transform: translate(0px, 7px);
          transform: translate(0px, 7px);
 }

 100% {
  -webkit-transform: translate(0px, 0px);
          transform: translate(0px, 0px);
 }
}

.love-heart {
 -webkit-box-sizing: border-box;
         box-sizing: border-box;
 position: relative;
 -webkit-transform: rotate(-45deg) translate(-50%, -33px) scale(4);
     -ms-transform: rotate(-45deg) translate(-50%, -33px) scale(4);
         transform: rotate(-45deg) translate(-50%, -33px) scale(4);
 display: block;
 border-color: hsl(231deg 28% 86%);
 cursor: pointer;
 top: 0;
}

input:checked + .love-heart, input:checked + .love-heart::after, input:checked + .love-heart .bottom {
 border-color: hsl(347deg 81% 61%);
 -webkit-box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);
         box-shadow: inset 6px -5px 0px 2px hsl(347deg 99% 72%);
}

.love-heart::after, .love-heart .bottom {
 content: "";
 display: block;
 -webkit-box-sizing: border-box;
         box-sizing: border-box;
 position: absolute;
 border-color: hsl(231deg 28% 86%);
}

.love-heart::after {
 right: -9px;
 -webkit-transform: rotate(90deg);
     -ms-transform: rotate(90deg);
         transform: rotate(90deg);
 top: 7px;
}

.love-heart .bottom {
 width: 11px;
 height: 11px;
 border-left: 1px solid;
 border-bottom: 1px solid;
 border-color: hsl(231deg 28% 86%);
 left: -1px;
 top: 5px;
 border-radius: 0px 0px 0px 5px;
}


</style>
