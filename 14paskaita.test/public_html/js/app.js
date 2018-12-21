function clickEffect(){
  document.getElementById("headline").classList.toggle('clicked');
}

function hoverEffect(){
  document.getElementById("headline").classList.add('hovered');
}

function hoverEnd(){
  document.getElementById("headline").classList.remove('hovered');
}




document.getElementById("headline").addEventListener("click", function(){
  clickEffect();
});

document.getElementById("headline").addEventListener("mouseover", function(){
  hoverEffect();
})

document.getElementById("headline").addEventListener("mouseout", function(){
  hoverEnd();
})
