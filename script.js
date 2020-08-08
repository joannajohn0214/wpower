var btn = $('.form-button')
var imageSection = $('.image')
var alex = "/assets/alexM.JPG"
var sarah = "/assets/sarahS.JPG"
var sue = "/assets/sueB.JPG"
var hilary = "/assets/hilaryK.JPG"
btn.on('click', sendFunFacts)

function sendFunFacts(event) {
  var factType = $('.form-control').val()
  if (factType === "soccer"){
      imageSection.append(`<img src = ${alex}>`);
  } else if (factType === "broadcast") {
      imageSection.append(`<img src = ${sarah}>`);
  } else if (factType === "bball") {
      imageSection.append(`<img src= ${sue}>`);
  } else if (factType === "hockey") {
      imageSection.append(`<img src= ${hilary}>`);
  }
  event.preventDefault();
}