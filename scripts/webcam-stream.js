// Ripped from view-source:https://stemkoski.github.io/Three.js/Webcam-Texture.html
window.URL = window.URL || window.webkitURL;
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
var camvideo = document.getElementById('monitor');

function gotStream(stream)
{
  if (window.URL)
  {   camvideo.src = window.URL.createObjectURL(stream);   }
  else // Opera
  {   camvideo.src = stream;   }
  camvideo.onerror = function(e) {   stream.stop();   };
}
function noStream(e)
{
  var msg = 'No camera available.';
  if (e.code == 1)
  {   msg = 'User denied access to use camera.';   }
  document.getElementById('errorMessage').textContent = msg;
}

function initWebCam() {
  // TODO : This is really sloppy, just leaking into the global namespace.
  // Clean this up.

  if (navigator.getUserMedia)
    navigator.getUserMedia({video: true}, gotStream, noStream);

  video = document.getElementById( 'monitor' );
  videoImage = document.getElementById( 'videoImage' );
  videoImageContext = videoImage.getContext( '2d' );

  // background color if no video present
  videoImageContext.fillStyle = '#000000';
  videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

  videoTexture = new THREE.Texture( videoImage );
  videoTexture.wrapS = videoTexture.wrapT = THREE.RepeatWrapping;
  videoTexture.repeat.set( 2, 2  );
  uniforms.gridTexture.value = videoTexture;
}
