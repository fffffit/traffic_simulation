<template>
    <div>
      <div class="background-div">车均延误</div>
      <div
        class="echart"
        ref="mychart"
        id="mychart"
        :style="myChartStyle">
      </div>
    </div>
</template>

<style>
.background-div {
  background-image: url("../../assets/small.png");
  background-size: cover;
  background-position: center;
  text-indent: 3.5em;
}
</style>

<script>
import * as echarts from "echarts";


export default {
  data() {
    return {
      myChart: {},
      xData: ["0:00", "4:00", "8:00", "12:00", "16:00", "20:00"], //横坐标
      yyyData: [10,20,30],

      yData: [15, 24, 19, 21, 16, 25], 
      taskData: [20, 19, 19, 20, 20, 21], 
      myChartStyle: { float: "left", width: "500px", height: "200px" ,color: "#A9B1C9FF"} //图表样式
    };
  },
  mounted() {
    this.initEcharts();
  },
  methods: {
    initEcharts() {
      const option = {
        xAxis: {
          data: this.xData,
          axisLabel: {
            textStyle: {
              color: '#A9B1C9FF'
            }            
          }

        },
        yAxis: {
          type:'value',
          min: 0,
          max: 30,
          interval: 10,
          axisTick: {
            interval: 2 // 设置刻度线之间的间隔，单位为刻度线个数
          },
          axisLabel: {
            interval: 0  ,// 设置刻度线之间的间距，0 表示不间隔
            textStyle: {
            color: '#A9B1C9FF'
          }
          }
        },
        series: [
          {
            name: "车均延误",
            data: this.yData,
            type: "line", // 类型设置为折线图
            smooth: true,
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 16
              }
            },  
            symbol:'none',          
            itemStyle: {
              normal: {
                  color: '#498DFFFF', //改变折线点的颜色
                  lineStyle: {
                      color: '#498DFFFF' //改变折线颜色
                  }
              }
			      },
          },
          {
            name: "平均延误",
            data: this.taskData,
            type: "line", // 类型设置为折线图
            smooth: true,
            label: {
              show: true,
              position: "bottom",
              textStyle: {
                fontSize: 16
              }
            },
            symbol:'none',
            itemStyle: {
              normal: {
                  color: '#B4CBEBB3', //改变折线点的颜色
                  lineStyle: {
                      color: '#B4CBEBB3' //改变折线颜色
                  }
              }
			      },
          }
        ],
        legend:{
          data:['车均延误','平均延误'],
          textStyle: {
            color: '#A9B1C9FF'
          }
        }
      };
      const myChart = echarts.init(this.$refs.mychart);
      myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    }
  }
};
</script>