<template>
    <div>
        <div class="search-bar">
            <van-row class="testCol">
                <van-col span="3">
                    <img :src="LocaltionIron" alt="location-icon" class="location-icon">
                </van-col>
                <van-col span="16">
                    <input type="text" class="search-input">
                </van-col>
                <van-col span="5">
                    <van-button size="mini">搜索</van-button>
                </van-col>
            </van-row>
        </div>
        <!-- swipe area -->
        <div class="swipe-area">
            <van-swipe :autoplay="3000">
                <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
                    <img v-lazy="banner.image" alt="bannerimage" width="100%">
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- type-baar -->
        <div class="type-bar">
            <div v-for="(cate,index) in category" :key = index>
                <img v-lazy="cate.image"  width="90%">
                <span>{{cate.mallCategoryName}}</span>
            </div>
        </div>
        <!-- ab-banner -->
        <div class="ad-banner">
            <img v-lazy="adBanner.PICTURE_ADDRESS" alt="adbanner" width="100%">
        </div>
        <!-- recommend-goods -->
        <div class="recommend-area">
            <div class="recommend-title">
                <span>商品推荐</span>
            </div>
            <div class="recommend-body">
                <!-- swipe -->
                <swiper :options="swiperOption">
                    <swiper-slide v-for="(item,index) in recommendGoods" :key = index>
                        <div class="recommend-item">
                            <img v-lazy="item.image" alt="recommend-image" width="80%">
                            <div><span>{{item.goodsName}}</span></div>
                            <div><span>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</span></div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>    
        </div>
        <floor-component :floorData="floor1" :floorTitle="floorName.floor1" :floorNum="floorNumber.floor1"></floor-component>
        <floorComponent :floorData="floor2" :floorTitle="floorName.floor2" :floorNum="floorNumber.floor2"></floorComponent>
        <floorComponent :floorData="floor3" :floorTitle="floorName.floor3" :floorNum="floorNumber.floor3"></floorComponent>
        <!-- hotsell-area -->
        <div class="hot-area">
            <div class="hot-title">热卖商品</div>
            <div class="hot-goods">
                <!-- 需要一个list组件 -->
                <van-list>
                    <van-row gutter="20">
                        <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
                            <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
                        </van-col>

                    </van-row>
                </van-list>
            </div>
        </div>
        <!-- <swiperDefault></swiperDefault>
        <swiperDefault2></swiperDefault2>
        <swiperText></swiperText> -->
    </div>
</template>

<script>
    import axios from 'axios'
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    // import swiperDefault from '../swiper/swiperDefault'
    // import swiperDefault2 from '../swiper/swiperDefault2'
    // import swiperText from '../swiper/swiperText'
    import floorComponent from '../component/floorComponent'
    import { toMoney } from '@/filter/moneyFilter'
    import goodsInfo from '../component/goodsInfoComponent'
    import url from '@/serviceAPI.config.js'

    export default {
        data() {
            return {
                swiperOption:{
                    slidesPerView: 3
                },
                 LocaltionIron: require('../../assets/images/location.png'),
                 bannerPicArray:[],
                 category: [],
                 adBanner:{},
                 recommendGoods:[],
                 floor1: [],
                 floor2: [],
                 floor3: [],
                 floorName: [],
                 floorNumber:{},
                 hotGoods:[]
                //  floor1_0:{},
                //  floor1_1:{},
                //  floor1_2:{}
            }
        },
        components:{
            swiper,
            swiperSlide,
            floorComponent,
            goodsInfo
            // swiperDefault,
            // swiperDefault2,
            // swiperText
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }
        },
        created(){
            axios({
                url: url.getShoppingMallInfo,
                method: 'get'
            })
            .then(response => {
                console.log(response)
                if(response.status == 200){
                    this.category = response.data.data.category
                    this.bannerPicArray = response.data.data.slides
                    this.adBanner = response.data.data.advertesPicture
                    this.recommendGoods = response.data.data.recommend
                    this.floor1 = response.data.data.floor1
                    this.floor2 = response.data.data.floor2
                    this.floor3 = response.data.data.floor3
                    this.floorName = response.data.data.floorName
                    this.floorNumber = response.data.data.floorNumber
                    this.hotGoods = response.data.data.hotGoods
                    // this.floor1_0 = this.floor1[0]
                    // this.floor1_1 = this.floor1[1]
                    // this.floor1_2 = this.floor1[2]
                }
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
</script>

<style scoped>
    *{
        margin:0;
        padding: 0;
        /* background-color: rgb(239, 239,239); */
    }
    .search-bar{
        height: 2.2rem;
        background-color: hsl(327, 99%, 45%);
        line-height: 2.2rem;
        overflow:hidden;
    }
    .location-icon{
        width: 60%;
        padding-top: .2rem;
        padding-left: .3rem;  
    }
    .search-input{
        /* width:100%;
        height: 1.3rem;
        border: 0px 0px 1px 0px;
        border-bottom: solid white; 
        background-color: #e5017d; */
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border: bottom 1px solid #fff  !important ;
        background-color: #e5017d;
    }
    .swipe-area{
        clear:both;
        max-height: 15rem;
        overflow:hidden;
    }
    .type-bar{
        background-color: rgb(255,255,255);
        margin: 0 .3rem .3rem .3rem;
        /* padding: .2rem; */
        border-radius: .3rem;
        font-size: 14px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
    }
    .type-bar div{
        flex: 1; 
        padding: .3rem;
        font-size: 12px;
        text-align: center;    
    }
    .recommend-area{
        background-color: #fff;
        margin-top: .3rem;
    }
    .recommend-title{
        border-bottom: 1px solid #eee;
        font-size: 14px;
        padding: .2rem;
        color: #e5017d;
    }
    .recommend-body{
        border-bottom: 1px solid #eee;
    }
    .recommend-item{
        width: 99%;
        border-right: 1px solid #eee;
        font-size: 12px;
        text-align: center;
    }
    .hot-area{
        text-align: center;
        font-size: 14px;
        height: 1.8rem;
        line-height: 1.8rem;
    }
    
</style>