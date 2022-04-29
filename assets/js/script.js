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


