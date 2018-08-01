<template>
    <div>
        <swiper class="swiper" :options="swiperOption">
            <swiperSlide v-for="(item,index) in items" :key = index class="swiper-slide">
                <div>{{item}}</div>
            </swiperSlide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    loop: true,// 循环
                    pagination:{
                        el: '.swiper-pagination',
                        clickable:true //分页器点击
                    }
                },
                items: [1,2,3,4,5,6]
            }
        },
        components:{
            swiper,
            swiperSlide
        }
    }
</script>

<style scoped>
    .swiper-slide{
        height: 5rem;
        background-color: #ccc;
        text-align:center;
        width:100%;
        line-height: 5rem; 
    }
</style>