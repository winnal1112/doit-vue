<template>
  <div style="height: 100%;">
    <div id="dataMap"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loca: null,
        map: null
      }
    },
    mounted() {
      this.initDataMap()
    },
    methods: {
      initDataMap() {
        this.map = new AMap.Map('dataMap', {
          zoom: 5.12,
          center: [109.595668, 35.447184],
          showLabel: false,
        });
        this.loca = new Loca.Container({
          map: this.map
        });
        // 颜色配置
        var headColors = ['#ECFFB1', '#146968', '#146968', '#146968', '#146968', '#146968', '#146968', '#146968'];
        var trailColors = [
          'rgba(255,178,6, 0.2)',
          'rgba(255,178,6, 0.2)',
          'rgba(20,105,104, 0.2)',
          'rgba(20,105,104, 0.2)',
          'rgba(20,105,104, 0.2)',
          'rgba(20,105,104, 0.2)',
          'rgba(20,105,104, 0.2)',
          'rgba(20,105,104, 0.2)',
        ];
        // 进入北京方向的线
        var inLineSource = new Loca.GeoJSONSource({
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-in.json',
        });
        var inLinelayer = new Loca.PulseLineLayer({
          // loca,
          zIndex: 11,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        });
        inLinelayer.setStyle({
          altitude: 0,
          lineWidth: (_, feature) => feature.properties.lineWidthRatio * 4 + 1,
          headColor: (_, feature) => headColors[feature.properties.type],
          trailColor: (_, feature) => trailColors[feature.properties.type],
          interval: 0.5,
          duration: 2000,
        });
        inLinelayer.setSource(inLineSource);
        this.loca.add(inLinelayer);

        // 出北京方向的线
        var outLineSource = new Loca.GeoJSONSource({
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-line-out.json',
        });
        var outLinelayer = new Loca.PulseLineLayer({
          // loca,
          zIndex: 11,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        });
        outLinelayer.setStyle({
          altitude: 0,
          lineWidth: (_, feature) => feature.properties.lineWidthRatio * 1 + 3,
          headColor: (_, feature) => headColors[feature.properties.type],
          trailColor: (_, feature) => trailColors[feature.properties.type],
          interval: 0.25,
          duration: 5000,
        });
        outLinelayer.setSource(outLineSource);
        this.loca.add(outLinelayer);
        // 下方呼吸点层
        var scatter = new Loca.ScatterLayer({
          // loca,
          zIndex: 10,
          opacity: 1,
          visible: true,
          zooms: [2, 22],
        });
        var scatterGeo = new Loca.GeoJSONSource({
          url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/data-scatter.json',
        });
        scatter.setSource(scatterGeo);
        scatter.setStyle({
          unit: 'px',
          size: (_, feature) => {
              var size = feature.properties.lineWidthRatio * 2 + 30;
              return [size, size];
          },
          borderWidth: 0,
          texture: 'https://a.amap.com/Loca/static/loca-v2/demos/images/breath_yellow.png',
          duration: 2000,
          animate: true,
        });
        this.loca.add(scatter);
        this.loca.animate.start();
      }
    },
    beforeDestroy() {
      this.loca = null
      this.map = null
    }
  }
</script>

<style>
  #dataMap {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
</style>
