<template>
  <div>
    <el-container>
      <!--  头部导航栏  -->
      <el-header class="nav-header custom-header">
        <el-row>
          <el-col :span="8">
            <div class="nav-title">{{ title }}</div>
          </el-col>
          <el-col :span="16" style="text-align:right;">
            <div class="nav-buttons">
              <a href="#" class="nav-link">作者：{{ author }}</a>
              <a href="#" class="nav-link">|</a>
              <a href="#" class="nav-link">邮箱：{{ email }}</a>
            </div>
          </el-col>
        </el-row>
        <br/>
        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <span>{{ desc }}</span>
          </el-col>
        </el-row>
      </el-header>

      <!--  主体内容  -->
      <el-main>
        <br/>
        <br/>
        <el-divider></el-divider>
        <br/>
        <br/>

        <div class="swiper-container">
          <swiper
              id="swiper-1"
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }"
              :initial-slide="3"
              :pagination="true"
              :navigation="true"
              :modules="modules1"
              class="swiper">
            <swiper-slide class="swiper-slide" v-for="(item, index) in carouselImages" :key="index">
              <img :src="item.imagePath"/>
            </swiper-slide>
          </swiper>
        </div>

        <br/>
        <br/>
        <el-divider></el-divider>
        <br/>
        <br/>

        <div class="swiper-container">
          <el-row>
            <el-col :offset="2" :span="10">
              <swiper
                  id="swiper-2"
                  class="mySwiper2"
                  :direction="'vertical'"
                  :initial-slide="1"
                  :space-between="10"
                  :centeredSlides="true"
                  :loop="true"
                  :autoplay="{
                    delay: 2500,
                    disableOnInteraction: false,
                  }"
                  :modules="moduels2"
                  style="height: 300px"
                  @slide-change="slide2Change"
              >
                <swiper-slide class="swiper-slide" v-for="(item, index) in carouselImages" :key="index">
                  <img :src="item.imagePath"/>
                </swiper-slide>
              </swiper>
            </el-col>
            <el-col :span="12">
              <p class="show-text">{{ this.showText }}</p>
            </el-col>
          </el-row>
        </div>

        <el-divider></el-divider>
        <br/>
        <br/>

        <el-row :gutter="20">
          <el-col v-for="(item, index) in carouselImages" :key="index" :span="24 / 4" style="margin-top: 10px">
            <el-card :body-style="{ padding: '5'}" :shadow="'hover'">
              <img :src="item.beforeImage" alt="" class="image" @mouseover="showAnotherImage($event, index)"
                   @mouseout="hideAnotherImage($event, index)"/>
            </el-card>
          </el-col>
        </el-row>

      </el-main>
      <el-footer>
        <el-divider></el-divider>
        <!--   添加作者 & 联系方式 居中显示    -->
        <el-row type="flex" justify="center" align="middle">
          <el-col>
            <!--     add copyright       -->
            <span>© 2023 {{ author }}. All rights reserved.</span>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script>


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import {Swiper, SwiperSlide,} from "swiper/vue";
import {EffectCoverflow, Pagination, Navigation, Autoplay} from "swiper";

export default {
  name: "Home",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      title: 'The development of Tik Tok filters',
      text1: 'About',
      text2: 'Contact',
      showText: '',
      desc: '一款专业的Tiktok滤镜工具',
      author: '小明',
      email: 'xiaoming@gmail.com',
      hover_postfix: '',
      carouselImages: [
        {
          beforeImage: this.getImage('img_1_before.jpg'),
          imagePath: this.getImage('img_1_after.jpg'),
          text: '滤镜效果1'
        },
        {
          beforeImage: this.getImage('img_2_before.jpg'),
          imagePath: this.getImage('img_2_after.jpg'),
          text: '滤镜效果2'
        },
        {
          beforeImage: this.getImage('img_3_before.jpg'),
          imagePath: this.getImage('img_3_after.jpg'),
          text: '滤镜效果3'
        },
        {
          beforeImage: this.getImage('img_4_before.jpg'),
          imagePath: this.getImage('img_4_after.jpg'),
          text: '滤镜效果4'
        },
        {
          beforeImage: this.getImage('img_5_before.jpg'),
          imagePath: this.getImage('img_5_after.jpg'),
          text: '滤镜效果5'
        },
        {
          beforeImage: this.getImage('img_6_before.jpg'),
          imagePath: this.getImage('img_6_after.jpg'),
          text: '滤镜效果6'
        },
        {
          beforeImage: this.getImage('img_7_before.jpg'),
          imagePath: this.getImage('img_7_after.jpg'),
          text: '滤镜效果7'
        },
      ],
      modules1: [EffectCoverflow, Pagination, Navigation],
      moduels2: [Autoplay, Pagination, Navigation]
    }
  },
  methods: {
    getImage(filename) {
      return new URL(`../assets/${filename}`, import.meta.url).href
    },
    slide2Change(swiper) {
      const i = swiper.realIndex
      this.showText = this.carouselImages[i].text
    },
    showAnotherImage(event, index) {
      event.target.src = this.carouselImages[index].imagePath
    },
    hideAnotherImage(event, index) {
      event.target.src = this.carouselImages[index].beforeImage
    }
  },
  mounted() {
  },
}
</script>

<style scoped>
.nav-header {
  margin-top: 28px;
  margin-bottom: 10px;
  margin-left: 50px;
}

.custom-header {

}

.nav-title {
  font-size: 24px;
  color: #000000;
  font-weight: bold;
}

.nav-buttons {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}

.nav-link {
  text-decoration: none;
  color: #000000;
  margin: 0 5px;
  font-size: 20px;
  font-weight: bold;
}

.nav-link:hover,
.nav-link:active {
  color: #6aa4dc;
}

.swiper-container {
  position: relative;
  margin-left: 200px;
  margin-right: 200px;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.show-text {
  font-size: 65pt;
}

.el-footer {
  text-align: center;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>