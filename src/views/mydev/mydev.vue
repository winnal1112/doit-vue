<template>
  <div class="page-container">
    <div id="dataMap"></div>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        map: null,  // 地图
        district: '',  // 行政区划
        polygons: [],  // 区域图层
        disProvince: '',  // 行政区
        colors: {},  // 颜色
      }
    },
    mounted() {
      this.initDataMap()
    },
    methods: {
      initDataMap() {
        this.map = new AMap.Map('dataMap', {
          viewMode: '2D',
          zoom: 5.12,
          center: [109.595668, 35.447184],
        })
        let opts = {
          subdistrict: 0,   //获取边界不需要返回下级行政区
          extensions: 'all',  //返回行政区边界坐标组等具体信息
          level: 'district'  //查询行政级别为 市
        }
        this.district = new AMap.DistrictSearch(opts)
        this.district.search('120106', (status, result) => {
          this.map.remove(this.polygons)//清除上次结果
          this.polygons = []
          var bounds = result.districtList[0].boundaries
          if (bounds) {
            for (var i = 0, l = bounds.length; i < l; i++) {
              //生成行政区划polygon
              var polygon = new AMap.Polygon({
                strokeWeight: 1,
                path: bounds[i],
                fillOpacity: 0.4,
                fillColor: '#80d8ff',
                strokeColor: '#0091ea'
              });
              this.polygons.push(polygon);
            }
          }
          this.map.add(this.polygons)
          // this.map.setFitView(this.polygons);//视口自适应
        });
        this.disProvince = new AMap.DistrictLayer.Province({
            zIndex:12,
            adcode:['130100'],
            depth:2,
            styles:{
                'fill':(properties)=>{
                    var adcode = properties.adcode;
                    return this.getColorByAdcode(adcode);
                },
                'province-stroke':'cornflowerblue',
                'city-stroke': 'white',//中国地级市边界
                'county-stroke': 'rgba(255,255,255,0.5)'//中国区县边界
            }
        })
        this.disProvince.setMap(this.map)
      },
      getColorByAdcode(adcode) {
        if (!this.colors[adcode]) {
            var gb = Math.random() * 155 + 50;
            this.colors[adcode] = 'rgb(' + gb + ',' + gb + ',255)';
        }
        return this.colors[adcode];
      }
    }
  }
</script>

<style scoped>
  .page-container {
    width: 100%;
    height: 850px;
  }
  #dataMap {
    width: 100%;
    height: 100%;
  }
</style>
