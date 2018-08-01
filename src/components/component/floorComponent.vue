<template>
  <div>
    <div class="floor">
      <div class="floor-title">
        <div class="floor-number">
          <span>{{floorNum}}F</span>
        </div>
        <div class="floor-type">{{floorTitle}}</div>
      </div>
      <div class="irregulr-floor">
        <div class="floor-one">
          <img v-lazy="floorData0.image" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img v-lazy="floorData1.image" width="100%" />
          </div>
          <div>
            <img v-lazy="floorData2.image" width="100%" />
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(items,index) in floorData.slice(3)" :key=index>
          <img v-lazy="items.image" width="100%">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['floorData','floorTitle','floorNum'],
    data() {
      return {
        floorData0: {},
        floorData1: {},
        floorData2: {}
      }
    },
    watch: {
      floorData: function (val) {
        console.log(this.floorData)
        this.floorData0 = this.floorData[0]
        this.floorData1 = this.floorData[1]
        this.floorData2 = this.floorData[2]
      }
    }
  }

</script>

<style scoped>
  .floor-title {
    height: 2rem;
    width: 100%;
    display: flex;
    justify-Content: center;
    background-color: #f0f0f0;
    line-height: 2rem;
    font-size: 18px;
  }

  .floor-number {
    /* position: relative; */
    border: 1px solid #e5017d;
    background-color: #e5017d;
    border-radius: 90%;
    color: #fff;
    width: 1.4rem;
    height: 1.4rem;
    margin-top: .3rem;
    text-align: center;
  }

  .floor-number span {
    display: inline-block;
    transform: translateY(-.3rem)
  }

  .floor-type {
    color: #e5017d;
    margin-left: .5rem;
  }

  .irregulr-floor {
    display: flex;
    flex-direction: row;
    background-color: #fff;
    border-bottom: 1px solid #ddd;
  }

  .irregulr-floor div {
    /* width: 10rem; */
    box-sizing: border-box;
    --webkit--box-sizing: border-box;

  }

  .floor-one {
    border-right: 1px solid #ddd;
  }

  .floor-two {
    border-bottom: 1px solid #ddd;
  }

  .floor-rule {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: #fff;
    /* width:100%; */
  }

  .floor-rule div {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 10rem;
    border-bottom: 1px solid #ddd;
  }

  .floor-rule div:nth-child(odd) {
    border-right: 1px solid #ddd;
  }

</style>
