<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-21 12:43:17
 * @LastEditTime: 2022-08-21 16:02:18
-->
<template>
  <div class="body">
    <div class="container">
      <div class="tabs">
        <figure v-for="tab in tabs"
                :key="tab.id"
                class="tab"
                :class="getTabClass(tab.id)">
          <nav class="tab__header">
            <button class="tab__button" @click="selectTabById(tab.id)">
              <span class="bar" >{{ tab.message }}</span>
            </button>
          </nav>
          <article class="tab__content">
            <div class="skeleton" v-html="tab.content"></div>
          </article>
        </figure>
      </div>
    </div>
  </div>

</template>

<script>
const TABS_AMOUNT = 3;
const life = `
  一只普通的大学生，普通的学历，普通的家庭，没有传奇的经历，每逢大考，运气一定差。<br/><br/>
  大一因为一个blog入坑前端，然后就一发不可收拾，嘿嘿，前端真好玩🤪。<br/><br/>
  喜欢炫酷的网页，想要学学Vim，喜欢一些沙雕的创意项目，但是目前还没有实现过(我太菜了...)

`;
const ability = `
  <div style="line-height: 25px;">
    <h2> 写 Vue 的, 后端会点 Nodejs </h2><br/>
    <h2>近期的🎯 </h2> <br/>
    <div>更加扎实的计算机基础知识, 更强的coding能力, 希望暑期实习获得 dream offer, 秋招顺利</div>
  </div>
`

const githubCalendar = `
<div class="width: 100%">
  <img src="https://ghchart.rshah.org/mengqiuleo" />
</div>
`
const motto = `
以前，自己经常会陷入一些毫无意义的精神内耗，<br/>后来在网上看到这样的一句话👇🏻<br/><br/>
<h2>你做三四月的事，八九月份的事自有答案</h2><br/>
<strong>共勉!!!</strong>
`


export default {
  data() {
    return {
      title: [{message:"生活碎片"},{message: "contact me"},{message:"githubCalendar"}],
      tabs: [
        {
          "id": 0,
          message: "Skills",
          content: ability
        },
        {
          "id": 1,
          message: "Life",
          content: life
        },
        {
          "id": 2,
          message: "Motto",
          content: motto
        },
      ],
      currentTabIndex: 0,
      prevTabIndex: 2
    };
  },
  mounted() {

  },
  methods: {
    getTabClass(id) {
      return [{
        'tab--current': this.currentTabIndex === id,
        'tab--prev': this.prevTabIndex === id
      }];
    },
    selectTabById(id) {
      if (id === this.currentTabIndex) { return; }
      this.prevTabIndex = this.currentTabIndex;
      this.currentTabIndex = id;
    }
  },
};
</script>
<style lang='css' scoped>
.body {
  --color-light: #665e68;
  --color-regular: #353637;
  --color-semidark: #9f946f;
  --color-dark: #bfb48f;
  --color-accent: #f2efe9;
  --color-background: #564e58;
  --color-background-a: #200e15;
  --color-background-b: #151617;

  position: absolute;
  font-family: Arial, sans-serif;
  display: flex;
  /* background:
    linear-gradient(
      to bottom,
      var(--color-background-b),
      var(--color-background-a)
    ); */
  overflow: hidden;
  top: 700px;
  left: 340px;
}
.container {
    /* color: #353637; */
    margin: 0;
    flex: 1;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
}

  .tabs {
    min-width: 700px;
    max-width: 100%;
    position: relative;
    perspective: 1000px;
    height: 400px;
  }

  .tab {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: 0;
    pointer-events: none;
    display: flex;
    flex-flow: column;
    z-index: 0;
    animation: swipe 1200ms ease;

    --border-radius: 12px;
    --border-radius-small: calc(var(--border-radius) / 4);
  }

  .tab__header {
    background: transparent;
    display: flex;
    font-size: 1em;
    height: calc(5em + var(--border-radius-small));
    margin-bottom: calc(0px - var(--border-radius-small));
    padding: 0 var(--border-radius-small);
  }

  .tab__button {
    position: relative;
    pointer-events: all;
    cursor: pointer;
    font: inherit;
    outline: none;
    border: 0;
    color: var(--color-light);
    background: var(--color-semidark);
    width: 32.5%;
    font-weight: 600;
    border-radius: var(--border-radius) var(--border-radius) 0 0;
    transition: all 160ms ease;
  }

  .tab__button:hover {
    background: var(--color-dark);
  }

  .tab.tab--current {
    animation: none;
    z-index: 1;
  }

  .tab.tab--current .tab__content,
  .tab.tab--current .tab__button,
  .tab.tab--prev .tab__content,
  .tab.tab--prev .tab__button {
    /* box-shadow: 0 6px 16px 0 rgba(0, 0, 0, 0.36); */
  }

  .tab.tab--prev {
    z-index: -1;
  }

  .tab.tab--current .tab__button {
    color: var(--color-regular);
    background: var(--color-accent);
  }

  .tab:nth-child(1) .tab__button {
    justify-self: flex-start;
    margin: 0 auto 0 0;
  }

  .tab:nth-child(2) .tab__button {
    justify-self: center;
    margin: 0 auto;
  }

  .tab:nth-child(3) .tab__button {
    justify-self: flex-end;
    margin: 0 0 0 auto;
  }

  .tab__content {
    text-align: justify;
    font-size: 2em;
    line-height: 1.25;
    flex: 1;
    transform-style: preserve-3d;
    pointer-events: all;
    background: var(--color-accent);
    padding: 1.5em 2em;
    border-radius:
      var(--border-radius-small)
      var(--border-radius-small)
      var(--border-radius)
      var(--border-radius);
  }

  .skeleton {
    width: 100%;
    height: 1em;
    border-radius: --border-radius-small;
    /* background: var(--color-dark); */
  }

  .skeleton + .skeleton {
    margin-top: 0.5em;
  }

  .bar {
    display: inline-block;
    /* width: 0.5em;
    height: 0.5em; */
    font-size: 2em;
    margin: 0 0.1em;
    border-radius: --border-radius-small;
    /* background: var(--color-background); */
    transition: all 260ms ease;
  }

  .tab--current .bar {
    /* background: var(--color-dark); */
  }

  @keyframes swipe {
    0% {
      transform: translate3d(0, 0, 0);
      z-index: 2;
    }
    50% {
      transform: translate3d(80%, 0, 100px) rotate3d(0, 1, 0, -80deg);
      z-index: 2;
    }
    51% { z-index: -1; }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @media only screen and (max-width: 400px) {
    .tabs {
      min-width: 100%;
    }
  }
</style>
