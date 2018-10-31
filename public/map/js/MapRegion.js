import React from 'react';
import {Map} from 'react-amap';
import Geolocation from 'react-amap-plugin-geolocation';

import MapMarker from './components/Map/MapMarker'

const ZoomCtrl = (props) => {
    const map = props.__map__;
    if (!map) {
        console.log('组件必须作为Map的子组件使用');
        return;
    }
    const zoomIn = () => map.zoomIn();
    const zoomOut = () => map.zoomOut();

    return(
        <div id="zoom-ctrl">
            <span onClick={zoomIn}>+</span>
            <span onClick={zoomOut}>-</span>
        </div>
    );
};

let center = {
    lat: 2,
    lng: 2
};
MapMarker.mapCenter('asdasd');

let pluginProps = {
    enableHighAccuracy: true,
    timeout: 10000,
    showButton: true
};
pluginProps.getCurrentLocation;

const MapRegion = React.createClass({
    render: function () {
        return (
            <Map amapkey={'8bf5aebf54292ccff95a3c41f98bc9e4'} version={'1.4.0'}>
                <ZoomCtrl/>
                <Geolocation/>
                <MapMarker/>
            </Map>
        );
    }
});

export default MapRegion;