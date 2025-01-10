let currentpage = 1;
let menuitems; // array with all menu items
let pages; // array with all pages
let menubutton; // single menu button

function setup() {
  pages = selectAll('.page');
  menuitems = selectAll('.menuitem');
  menubutton = select('.menubutton'); // select the single menubutton element

  // Attach mousePressed event to each menuitem
  for (let m of menuitems) {
    m.mousePressed(function(e) {
      let nr = e.target.id.slice(-1);
      shiftpage(nr);
    });
  }
  
  select('header #menu4').mouseOver(function(){
    select('header').style('border-bottom', '6px solid black')
  })
  select('header #menu4').mouseOut(function(){
    select('header').style('border-bottom', '0px solid black')
  })
  // Attach mousePressed event to the single menubutton
  menubutton.mousePressed(function() {
    select('header').removeClass("hidden");
  });

  let header = select('header');

  header.mouseOver(() => {
    header.removeClass("hidden");
  });

  header.mouseOut(() => {
    header.addClass("hidden");
  });

  shiftpage(currentpage);
}
function shiftpage(num) {
  if (num == "ArrowLeft") {
    num = currentpage - 1;
  }
  if (num == "ArrowRight") {
    num = currentpage + 1;
  }
  if (isNaN(num) || num > pages.length || num == 0) {
    return;
  }
  select("#page" + currentpage).removeClass("visible");
  select("#menu" + currentpage).removeClass("active");
  currentpage = num;
  select("#page" + currentpage).addClass("visible");
  select("#menu" + currentpage).addClass("active");
}

function keyPressed() {
  shiftpage(key);
}
