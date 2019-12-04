let background = document.getElementById("ongiri-container");

function setBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function tarakoButtonClicked() {
    setBackgroundColor("#FFC7CE");
    document.getElementsByClassName('tarako').style.transform = "translateY(20px)";
}
document.getElementById("topping-button1").onclick = tarakoButtonClicked;

function unagiButtonClicked() {
    setBackgroundColor("#BA8268"); 
}
document.getElementById("topping-button2").onclick = unagiButtonClicked;

function crabButtonClicked() {
    setBackgroundColor("#B25353");
}
document.getElementById("topping-button3").onclick = crabButtonClicked;

function tunaButtonClicked() {
    setBackgroundColor("#DB8888");
}
document.getElementById("topping-button4").onclick = tunaButtonClicked;

function beefButtonClicked() {
    setBackgroundColor("#8AAF72");
}
document.getElementById("topping-button5").onclick = beefButtonClicked;

function shrimpButtonClicked() {
    setBackgroundColor("#FFD5E3");
}
document.getElementById("topping-button6").onclick = shrimpButtonClicked;

document.getElementsByClassName('topping-button').addEventListener('click',function() {
      var c = document.getElementsByClassName('tarako');
      for (var i = 0; i < c.length; i++) {
      c[i].classList.add('animate');
      }
    })



