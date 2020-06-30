JEEFACEFILTERAPI.init({
  canvasId: 'jeeFaceFilterCanvas',
  NNCpath: 'dist', //path to JSON neural network model (NNC.json by default)
  callbackReady: function(errCode, spec){
    if (errCode){
      console.log('AN ERROR HAPPENS. ERROR CODE =', errCode);
      return;
    }
    // [init scene with spec...]
    console.log('INFO: JEEFACEFILTERAPI IS READY');
  }, //end callbackReady()

  //called at each render iteration (drawing loop)
  callbackTrack: function(detectState){
    // Render your scene here
    // [... do something with detectState]
  } //end callbackTrack()
});//end init call
