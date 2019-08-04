function mOver(obj) {
    obj.innerHTML = 'Welcome! Stay here forever!';
  }
  
  function mOut(obj) {
    obj.innerHTML = 'Do not go please!';
  }


$("#button").mouseenter(function(){
    $("#button").text('Welcome! Stay here forever!');
  });

  $("#button").mouseleave(function(){
    $("#button").text('Do not go please!');
  });

