var viewer = new Cesium.Viewer('cesiumContainer');

var czmlDataSource = new Cesium.CzmlDataSource();
viewer.dataSources.add(czmlDataSource);
czmlDataSource.load('./data/test.czml');

