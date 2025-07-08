var overlay=document.getElementById("popup-overlay")
var box=document.getElementById("popup-box")
var popup=document.getElementById("popup")
var cancel=document.querySelector(".cancel")


popup.addEventListener("click",function(){
    overlay.style.display="block"
    box.style.display="block"
})

cancel.addEventListener("click",function(){
  overlay.style.display = "none";
  box.style.display = "none";
})

document.addEventListener("DOMContentLoaded", function () {
  var container = document.querySelector(".container");
  var addbox = document.getElementById("add-box");
  var booktitleinput = document.getElementById("book-title-input");
  var bookauthorinput = document.getElementById("book-author-input");
  var textareainput = document.getElementById("text-area-input");
  var overlay = document.getElementById("popup-overlay");
  var box = document.getElementById("popup-box");
  var log=document.getElementById("log")
  

  addbox.addEventListener("click", function (event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "book-container");

    div.innerHTML = `
      <h2>${booktitleinput.value}</h2>
      <h3>${bookauthorinput.value}</h3>
      <p>${textareainput.value}</p>
      <button class="abb" onClick="deletebook(event)">Delete</button>
    `;

    container.append(div);

    overlay.style.display = "none";
    box.style.display = "none";
  });
  var but=document.querySelector(".in")
var fora=document.getElementById("view")

but.addEventListener("click",function(){
  overlay.style.display="block"
  fora.style.display="flex"

})
log.addEventListener("click",function(){
  overlay.style.display="none"
  fora.style.display="none"

})



});

function deletebook(event){
    event.target.parentElement.remove()
}

var form=document.getElementById("view")
var name=document.getElementById("name")
var mail=document.getElementById("mail")
var pass=document.getElementById("pass")
var cpass=document.getElementById("cpass")             



