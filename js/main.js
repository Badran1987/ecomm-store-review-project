function myFunction() {
  var x = document.getElementById("menu");
  if (x.style.display === "inline-flex") {
    x.style.display = "none";
  } else {
    x.style.display = "inline-flex";
  }
}

function myFilterFunction() {

  var x = document.getElementById("filter");

  if (x.style.display === "block") {

    x.style.display = "none";
  } else {
    
    x.style.display = "block";
  }

  
}

