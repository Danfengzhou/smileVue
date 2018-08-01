<template>
    <div>
        <swiper :options="swiperOption" class="swiper">
            <swiper-slide class="text">
                <div class="content">Lorem ipsum dolor sit lorem   Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, dolores harum! Eveniet asperiores laboriosam id. Natus quis, doloremque, quia deleniti doloribus praesentium repudiandae sed, qui perferendis mollitia illum omnis debitis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit ut quis. Officiis, qui deserunt! Vero omnis non quo quia, repellendus facere dolorum a ad consectetur, enim, ut eaque temporibus! , amet consectetur adipisicing elit. Rem soluta itaque similique nemo necessitatibus expedita nesciunt quidem molestias! Quas praesentium inventore eligendi porro ipsam facere quae alias nam modi. Neque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto rerum quod sapiente ipsa non esse optio voluptas aliquid ipsum distinctio, iste quae consequatur facere eos, accusantium soluta? Eaque, nam fugiat!Lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima cum nisi sunt at. Fugiat ab sint hic dolor, facere, beatae laudantium voluptatem recusandae delectus omnis et commodi at quas adipisci.</div>
            </swiper-slide>
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
                    direction:'vertical',
                    slidesPerView:'auto',//滑动行数
                    freeMode: true,
                    mousewheel: true
                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>

<style scoped>
.swiper{
    height: 200px;
    overflow: hidden;
}
.text{
    font-size: 18px !important;
    text-align: left;
    padding:30px;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
   
}
</style>