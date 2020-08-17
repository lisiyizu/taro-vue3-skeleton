<template>
  <view>
    <skeleton v-if="loading"/>
    <view class="container">
      <view class="top-banner" data-skeleton-hide="hideBanner" :hidden="!hideBanner">
        <swiper class="swiper" autoplay>
          <block v-for="item in swiperList" :key="item">
            <swiper-item>
              <view :class="`swiper-item ${item}`"></view>
            </swiper-item>
          </block>
        </swiper>
      </view>
      <view class="top-nav" bindtap="onTap" data-skeleton-hide="hideCategory" :hidden="!hideCategory">
        <view class="nav_item" v-for="item in navs" :key="item">
          <image class="nav_item_image" :src="item"></image>
          <view class="nav_item_title"><text>测试标题</text></view>
        </view>
      </view>
      <view class="middle-content" data-skeleton-list data-skeleton-hide="hideGoods" :hidden="!hideGoods">
        <view class="content_item" v-for="item in list" :key="item.id" >
          <image class="content_item_img" mode="scaleToFill" :src="item.icon"></image>
          <view class="content_item_text">
            <text>{{item.text}}</text>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { ref, onMounted } from 'vue';
import skeleton from './index.skeleton.vue';
const img = 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3870849579,1183618012&fm=26&gp=0.jpg';
export default {
    name: 'Index',
    components: { skeleton },
    setup () {
        const loading = ref(true);
        const hideCategory = ref(false);
        const hideGoods = ref(false);
        const hideFooter = ref(false);
        const hideBanner = ref(false);

        const swiperList = ref([]);
        const navs = ref([]);
        const list = ref([]);

        onMounted(() => {
            setTimeout(() => {
                swiperList.value = ['demo-text-1', 'demo-text-2', 'demo-text-3'];
                navs.value = new Array(5).fill(img);
                list.value = [{
                    text: '小程序是一种新的开放能力，开发者可以快速地开发一个小程序。小程序可以在微信内被便捷地获取和传播。',
                    id: 1,
                    icon: img
                },
                {
                    text: '小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 的体验。',
                    id: 2,
                    icon: img
                },
                {
                    text: '​小程序的主要开发语言是 JavaScript ，小程序的开发同普通的网页开发相比有很大的相似性。对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的',
                    id: 3,
                    icon: img
                }];
                loading.value = false;
            }, 3000);
        });

        return {
            //
            loading,
            hideCategory,
            hideGoods,
            hideFooter,
            hideBanner,
            //
            swiperList,
            navs,
            list
        };
    },
    progressiveLoad () {
    }
};
</script>

<style>
page {
  background: #fff;
}

.top-banner {
  position: absolute;
  top: 0;
  left: 0;
  height: 200px;
  width: 100%;
}

.top-nav {
  position: absolute;
  left: 0;
  top: 230px;
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
}

.nav_item {
  display: flex;
  flex-direction: column;
}

.nav_item_image {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.nav_item_title {
  margin-top: 20px;
}

.content {
  display: flex;
  flex-direction: column;
}

.content_item {
  padding: 40px;
  display: flex;
  height: 240px;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
}

.content_item_img {
  display: inline-block;
  width: 160px;
  height: 160px;
  margin-right: 30px;
  border: 2px solid #ccc;
  box-sizing: border-box;
  flex-shrink: 0;
}

.content_item_text {
  display: inline-block;
}

.middle-content {
  position: absolute;
  top: 440px;
  height: 360px;
  font-size: 28px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 20px;
  width: 100%;
  height: 84px;
}

.swiper {
  height: 200px;
}

.swiper-item{
  display: block;
  height: 200px;
}

.demo-text-1{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #1AAD19;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-1:before{
  content: 'A';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-2{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #2782D7;
  color: #FFFFFF;
  font-size: 36rpx;
}
.demo-text-2:before{
  content: 'B';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.demo-text-3{
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #F1F1F1;
  color: #353535;
  font-size: 36rpx;
}

.demo-text-3:before{
  content: 'C';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
