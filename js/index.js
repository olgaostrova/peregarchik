$( document ).ready(function() {
  $( ".obare" ).hover(function() {
    $( "#about_bar" ).addClass( "hover" );
    $( ".eyes" ).addClass( "eyes_second_1" );
    $( ".eyes2" ).addClass( "eyes_second_2" );
    $( ".eyes_second_2" ).css( "animation-play-state","running" );
    // $( ".eyes" ).removeClass( "eyes_first" );
    }, function() {
      $( "#about_bar" ).removeClass( "hover" );
      $( ".eyes" ).removeClass( "eyes_second_1" );
      $( ".eyes2" ).removeClass( "eyes_second_2" );
      $( ".eyes" ).addClass( "eyes_first" );
    }
  );
  $( ".menu" ).hover(function() {
      $( "#menu" ).addClass( "hover" );
      $( ".under_mouth_1" ).addClass( "mouth_1" );
      $( ".under_mouth_2" ).addClass( "mouth_2" );
    }, function() {
      $( "#menu" ).removeClass( "hover" );
      $( ".under_mouth_1" ).removeClass( "mouth_1" );
      $( ".under_mouth_2" ).removeClass( "mouth_2" );

    }
  );
  $( ".otzivi" ).hover(function() {
      $( "#feedback" ).addClass( "hover" );
    }, function() {
      $( "#feedback" ).removeClass( "hover" );
    }
  );
  $( ".magazin" ).hover(function() {
      $( "#shop" ).addClass( "hover" );
    }, function() {
      $( "#shop" ).removeClass( "hover" );
    }
  );
  $( ".afisha" ).hover(function() {
      $( "#affiche" ).addClass( "hover" );
    }, function() {
      $( "#affiche" ).removeClass( "hover" );
    }
  );
  $( ".sob" ).hover(function() {
      $( "#events" ).addClass( "hover" );
    }, function() {
      $( "#events").removeClass( "hover" );
    }
  );




} );
