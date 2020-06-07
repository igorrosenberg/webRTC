# Web RTC

Live versions via GitHub Pages:

- [Earliest demo from grafikart](https://igorrosenberg.github.io/webRTC/grafikart.html)
- [Student](https://igorrosenberg.github.io/webRTC/a_student.html) and [teacher](https://igorrosenberg.github.io/webRTC/a_teacher.html) demo : imbalanced roles
  - (todo) When student joins before the teacher
  - (todo) Debug mode : make the messages available
  - (todo) Focus on portrait mode : higher than wide
  - (todo) Set Peer camera to fullscreen
  - (todo) Set self camera to resonable size
  - (todo) Add buttons for the teacher: remote actions   
  - (todo) code re-use ?    

## getUserMedia

https://github.com/webrtc/samples/blob/gh-pages/src/content/getusermedia/gum/js/main.js

```
<video playsinline autoplay></video>

stream = navigator.mediaDevices.getUserMedia(constraints);
video.srcObject = stream;
```


## promises

https://github.com/webrtc/samples/blob/gh-pages/src/content/getusermedia/canvas/js/main.js
```
<video playsinline autoplay></video>

function handleSuccess(stream) {
  window.stream = stream;      // make stream available to browser console
  document.querySelector('video').srcObject = stream;    // connect to <video>
}

navigator.mediaDevices
    .getUserMedia(constraints)
    .then(handleSuccess)
    .catch(handleError);
```

## draw screenshot

https://github.com/webrtc/samples/blob/gh-pages/src/content/getusermedia/canvas/js/main.js
```  
  // drawImage(video) :
  canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
```

## Set camera size via constraints

https://github.com/webrtc/samples/blob/gh-pages/src/content/getusermedia/resolution/js/main.js
```  
  constraints = {  video: {width: {exact: 640}, height: {exact: 480}} }
```

## Audio only

```
 <audio id="xxx" controls autoplay></audio>
 functionhandleSuccess (stream) { 
    document.querySelector('audio').srcObject = stream; 
 }
 constraints = { audio: true, video: false };
 navigator.mediaDevices.getUserMedia(constraints)
     .then(handleSuccess)
      .catch(handleError);
```

## stream object

Nice functions : 
 - stream.getAudioTracks()
 - stream.oninactive
 
 
## Some more references
 
- https://www.instructables.com/id/WebRTC-Video-Chat-in-20-Lines-of-JavaScript/
- https://www.grafikart.fr/tutoriels/webrtc-864
 
 