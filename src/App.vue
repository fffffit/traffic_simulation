<template>
  <div id="app">

    <div>

      <el-header style="display: flex; justify-content: center; align-items: center;
        font-size: x-large;height: 50px;margin-top: 3px;">交通仿真
      </el-header>

      <el-container style="height: 70vh;">


        <el-aside style="height: 100%; width: 20%">

          <el-container>

            <el-header style="background-color: #0b1a26;max-height: 3em;padding: 0;">

              <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick"
                style="background-color: #0b1a26;border: 20px solid #0b1a26;color: white;">
                <el-tab-pane style="background-color: #0b1a26;" label="道路编辑" name="first">
                  <road style="background-color: #0b1a26;" />
                </el-tab-pane>
                <el-tab-pane label="联合仿真" name="second">
                  <emulation style="background-color: #0b1a26;"></emulation>
                </el-tab-pane>
              </el-tabs>

            </el-header>

            <el-main></el-main>

          </el-container>

        </el-aside>

        <el-main style="width: auto;">
    <video controls loop autoplay style="width: 100%; height: 100%; object-fit: fill; background-color: #000;">
      <source src="./assets/8.mp4" type="video/mp4">
    </video>
  </el-main>


        <el-aside style="height: 100%;width: 20%; ">
          <el-container style=" ">

            <el-header style="background-color: #0b1a26;max-height: 3em;padding: 0; ">

              <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick"
                style="background-color: #0b1a26;border: 20px solid #0b1a26;color: white;">
                <el-tab-pane label="路口评价" name="third" style=" background-color: #0b1a26;">
                  <Crossing style="background-color: #0b1a26;" />
                </el-tab-pane>
                <el-tab-pane label="路网评价" name="fourth" style=" background-color: #0b1a26;">
                  <RoadNetwork style="background-color: #0b1a26;" />
                </el-tab-pane>
              </el-tabs>

            </el-header>

            <el-main></el-main>
          </el-container>
        </el-aside>


      </el-container>

      <router-view />
    </div>


  </div>
</template>

<style>
html {
  zoom: 150%;
}

body {
  color: white;
  background-image: url(./assets/大标题_1684810761505.png), url(./assets/底图.png);
  background-size: 100% 100%;

  /* 当内容高度大于图片高度时，背景图像的位置相对于viewport固定 */
  background-attachment: fixed;
  /* 让背景图基于容器大小伸缩 */
  background-size: cover;

}

.el-input--mini .el-input__inner {
  background-color: #0b1a26;
  color: #dcdcdc;
}

.el-tabs__nav-scroll {
  background-color: #0b1a26;
}

.el-table tr {
  background-color: #0b1a26 !important;
}

.el-descriptions__body {
  background-color: #0b1a26 !important;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
  background-color: #0b1a26 !important;
  border-right-color: #0b1a26 !important;
  border-left-color: #0b1a26 !important;
}

.el-tabs__content {
  background-color: #0b1a26;
}

.el-tag {
  background-color: #0b1a26 !important;
}

.el-button {
  background-color: #0b1a26 !important;
}

.el-table--border,
.el-table--group {
  border: 1px solid #0b1a26 !important;
}

.el-tabs--border-card {
  border: 1px solid #0b1a26 !important;
}

/* .el-table--scrollable-x .el-table__body-wrapper {
 overflow-x: auto;
 background-color: #0b1a26 !important;
} */

.el-table th.el-table__cell {
  background-color: #0b1a26 !important;
  color: #FFF !important;
}

.el-table {
  color: #CCCCCCFF !important;
}

.el-descriptions__body,
.el-form-item__label,
.el-checkbox,
.el-radio {
  color: #e1e4e9 !important;

}

.el-tag,
.el-button {
  border-color: #044b92 !important;
}

.el-button {
  color: #a9a9a9 !important;
}

.el-input--mini .el-input__inner {
  border-color: rgb(135, 135, 135);
}

#pane-0>div>div.el-table__body-wrapper.is-scrolling-left>table td {
  border-color: rgb(133, 159, 238) !important;
  ;
  /* Set the border color to black */
}


#pane-0>div>div.el-table__body-wrapper>table td {
  border-color: rgb(133, 159, 238) !important;
  ;
  /* Set the border color to black */
}

#pane-0>div>div.el-table__header-wrapper>table th {
  border-color: rgb(133, 159, 238) !important;
  ;
  /* Set the border color to black */
}

/* 修改滚动条的宽度和高度 */
::-webkit-scrollbar {
  width: 5px;
  height: 15px;
}

/* 修改滚动条的thumb（拖动条）样式 */
::-webkit-scrollbar-thumb {
  background-color: #244e6d;
  /* background-color: #c5c5c5; */
  border-radius: 5px;
}

/* 修改滚动条的track（轨道）样式 */
::-webkit-scrollbar-track {
  background-color: #000000;
}

	/* //全屏按钮 */
    video::-webkit-media-controls-fullscreen-button {
        display: none;
    }
    /* //播放按钮 */
    video::-webkit-media-controls-play-button {
        display: none;
    }
    /* //进度条 */
    video::-webkit-media-controls-timeline {
        display: none;
    }
    /* //观看的当前时间 */
    video::-webkit-media-controls-current-time-display{
        display: none;            
    }
    /* //剩余时间 */
    video::-webkit-media-controls-time-remaining-display {
        display: none;            
    }
    /* //音量按钮 */
    video::-webkit-media-controls-mute-button {
        display: none;            
    }
    video::-webkit-media-controls-toggle-closed-captions-button {
        display: none;            
    }
    /* //音量的控制条 */
    video::-webkit-media-controls-volume-slider {
        display: none;            
    }
    /* //所有控件 */
    video::-webkit-media-controls-enclosure{ 
        display: none;
    }

</style>
<script>
import road from '@/components/road.vue'
import emulation from '@/components/emulation.vue'
import Crossing from '@/components/Crossing.vue'
import RoadNetwork from '@/components/RoadNetwork.vue'
export default {
  name: 'app',
  components: {
    road,
    emulation,
    Crossing,
    RoadNetwork
  },
  data() {
    return {
      input1: '',


      activeName: 'first',

      activeName2: 'third',

      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: '',
      radio1: '上海',
      tags: [
        { name: '五一大道路段2', type: '' },
        { name: '桐梓坡路段1', type: '' },
        { name: '桐梓坡路段2', type: '' },
      ]
      ,
      tagss: [
        { name: '小轿车1', type: '' },
        { name: '小轿车', type: '' },
        { name: '货车', type: '' },
      ]
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
    // handleClick2(tab, event) {
    //   console.log(tab, event);
    // }
  }
}
</script>
 