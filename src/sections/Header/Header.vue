<!--
 * @Author: Pan Jingyi
 * @Date: 2022-08-20 00:21:36
 * @LastEditTime: 2022-08-20 02:06:58
-->
<template>
  <header id="header">
      <div class="container">
        <div class="left">
          <p class="name">I'M PJY</p>
          <h1 class="heading">
            <div class="wrapper"><span>Pixels</span></div>
            <div class="wrapper"><span>With</span></div>
            <br />
            <div class="wrapper"><span>purpose</span></div>
          </h1>
          <p class="para">
            I work with companies and agencies around the world, building Web
            sites and application UIs with strong focus on responsive design,
            accessibility, performance,
          </p>
          <div class="button">
            <a href="">See My Works</a>
            <i class="fa fa-play-circle-o"></i>
          </div>
        </div>
        <div class="right">
          <img src="img/profile.jpg" alt="" />
        </div>
      </div>
    </header>
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

/*
img{
    width: 100%;
    height: 100%;
}
*/

a{
    text-decoration: none;
    color: black;
    cursor: pointer;
}

header{
    font-size: 10px;
    width: 100%;
    height: 100%;
    padding-top: 6rem;
}



header .container{
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    max-width: 1000px;
    padding: 0;

}

header .container .left{
    flex: 6;
}

header .container .left .name{
    font-size: 2.5rem;
    font-weight: 900;
    color: #5924ed;
    margin-bottom: 1rem;
    opacity: 0;
    animation: fade 0.3s ease-in forwards;
}

header .container .left .heading{
    font-size: 6rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    line-height: 5.5rem;
    margin-bottom: 3rem;
}

header .container .left p{
    font-size: 1.6rem;
    font-weight: 600;
    margin-bottom: 3.5rem;
}

header .container .left .heading .wrapper{
    display: inline-block;
    overflow: hidden;
}

header .container .left .heading .wrapper span{
    position: relative;
    top: 70px;
    animation: reveal 1s ease-in-out forwards;
}

@keyframes reveal {
    0%{
        top: 70px;
    }
    100%{
        top: 0;
    }
}

@keyframes fade {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 100;
    }
}

header .container .button{
    display: flex;
    justify-content:center;
    gap: 20px;
}

header .container .button a{
    font-size: 1.6rem;
    font-weight: 400;
    color: #fff;
    padding: 1.1rem 3rem;
    background-color: #5924ed;
    border-radius: 50px;

}

header .container .button i{
    font-size: 4.4rem;
    color: #5924ed;
    cursor: pointer;
}

header .container .right{
    flex: 8;
    text-align: right;
}

header .container .right img{
    width: 100%;
    max-width: 450px;
    height: 600px;
    object-fit: cover;
    border-radius: 12px;
}

/* header done here  */

@media only screen and (max-width:750px){

    header .container{
        display: flex;
        gap: 20px;
    }

    html{
        font-size: 8px;
    }

    header .container .left{
        flex: 6;
    }

    header .container .right{
        flex: 5;
    }

    header .container .left .name{
        margin-bottom: 2rem;
        font-size: 2.5rem;

    }
}

@media only screen and (max-width:475px){
    html{
        font-size: 0.7rem;
    }

    header .container{
        flex-direction: column-reverse;
        text-align: center;


    }

    header .container .left .button{
        display: flex;
        justify-content: center;
        align-items: center;
    }

    header .container .left .button a{
        padding: 1.5rem 3rem;
    }

    header .container .left .button i{
        font-size: 5.3rem;
    }

    header .container .left .heading{
        font-size: 4.2rem;
        line-height: 4rem;
        margin-bottom: 3rem;
    }
    header .container .left .para{
        font-size: 1.8rem;
    }

    header .container .right{
        text-align: center;

    }

    header .container .right img{
        text-align: center;
        width:80%;
        height: 20%;
    }

    header .container .left .name{
        font-size: 4rem;
    }

    .container h2{
        font-size: 2rem !important;
    }


}
</style>
