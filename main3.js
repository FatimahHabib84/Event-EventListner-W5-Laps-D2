// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener or Onclick and getElementById if you're doing it right...
controlButtons = document.getElementsByClassName('button');
stopLight = document.getElementById('stopLight')
controlButtons[0].addEventListener('click',()=>{
    stopLight.style.backgroundColor = "red"
    slowLight.style.backgroundColor = "#111"
    goLight.style.backgroundColor = "#111"
});


slowLight = document.getElementById('slowLight')
controlButtons[1].addEventListener('click',()=>{
    slowLight.style.backgroundColor = "yellow"
    goLight.style.backgroundColor = "#111"
    stopLight.style.backgroundColor = "#111"
});

goLight = document.getElementById('goLight')
controlButtons[2].addEventListener('click',()=>{
    goLight.style.backgroundColor = "green"
    slowLight.style.backgroundColor = "#111"
    stopLight.style.backgroundColor = "#111"
});