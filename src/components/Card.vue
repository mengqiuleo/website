<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-21 04:16:29
 * @LastEditTime: 2022-08-21 04:27:49
-->
<template>
  <div class="card">
    <div class="tools">
      <div class="circle">
        <span class="red box"></span>
      </div>
      <div class="circle">
        <span class="yellow box"></span>
      </div>
      <div class="circle">
        <span class="green box"></span>
      </div>
    </div>
    <div class="card__content">
  </div>
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
.card {
 width: 300px;
 height: 200px;
 margin: 0 auto;
 background-color: #E7F6F2;
 border-radius: 8px;
 z-index: 1;
 box-shadow:5px 5px 10px gray;
}

.tools {
 display: -webkit-box;
 display: -ms-flexbox;
 display: flex;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 padding: 9px;
}

.circle {
 padding: 0 4px;
}

.box {
 display: inline-block;
 -webkit-box-align: center;
     -ms-flex-align: center;
         align-items: center;
 width: 10px;
 height: 10px;
 padding: 1px;
 border-radius: 50%;
}

.red {
 background-color: #ff605c;
}

.yellow {
 background-color: #ffbd44;
}

.green {
 background-color: #00ca4e;
}

</style>
