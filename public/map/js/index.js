import React from 'react';
import ReactDOM from 'react-dom';

import Map from './Map';
import Info from './Info';

(function () {
    window.onload = function () {
        ReactDOM.render(
            <Map/>,
            document.getElementById('mapArea')
        );
        ReactDOM.render(
            <Info/>,
            document.getElementById('infoArea')
        );
    }
})();