let header
let currentPage = '#page1'

function windowresized(){
  resizeCanvas(windowWidth, windowHeight);
}
function setup() {
  select("#item1").mouseClicked(() => switchPage('#page1'))
  select("#item2").mouseClicked(() => switchPage('#page2'))
  select("#item3").mouseClicked(() => switchPage('#page3'))
  select("#item4").mouseClicked(() => switchPage('#page4'))
}
function switchPage(whichPage){
  select(currentPage).removeClass('show')
  select(whichPage).addClass('show')
  currentPage = whichPage
}

function draw() {

}  
