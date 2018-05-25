/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
       // this.receivedEvent('deviceready');
    },

    // Update DOM on a Received Event

};

app.initialize();

// mostrar templates
document.addEventListener('init', function(event) {
   
    var page = event.target;
     console.log('page: ', page)

    if (page.id === 'page1') {
        document.getElementById('fotoBtn').onclick = function() {
            console.log('cucu cámara');
            document.querySelector('#myNavigator').pushPage('page2.html', { data: { title: 'Page 2' } });
        };
    }
    else if (page.id === 'page2') {
        page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
        let takePic = document.getElementById('savePic');
        takePic.addEventListener('click', hacerFoto);
           
    }
});

// FOTO



// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        cosole.log('path: ',path)
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

// start image capture
function hacerFoto() {
    navigator.device.capture.captureImage(captureSuccess, captureError, {limit:1});
}

