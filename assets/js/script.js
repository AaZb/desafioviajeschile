// Esta función sirve para opacar el backgrond del navbar
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});


// Cambio de color card
$(".card").hover(
    function () {
      var cardChange = $(this); // caching $(this)
      cardChange.css("color", "black");
    },
    function () {
      var cardChange = $(this); // caching $(this)
      cardChange.css("color", "black");
    }
  );

  $(".card1")
  .mouseover(function () {
    $(".card1txt").css("color", "#000000");
  })
  .mouseleave(function () {
    $(".card1txt").css("color", "#ffffff");
  });

  $(".card2")
  .mouseover(function () {
    $(".card2txt").css("color", "#000000");
  })
  .mouseleave(function () {
    $(".card2txt").css("color", "#ffffff");
  });

  $(".card3")
  .mouseover(function () {
    $(".card3txt").css("color", "#000000");
  })
  .mouseleave(function () {
    $(".card3txt").css("color", "#ffffff");
  });

  $(".card4")
  .mouseover(function () {
    $(".card4txt").css("color", "#000000");
  })
  .mouseleave(function () {
    $(".card4txt").css("color", "#ffffff");
  });



  // Disponibilizar Tooltips
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

