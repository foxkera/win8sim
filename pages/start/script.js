jQuery(document).ready(function($) {
    $(function() {
      $('.btn_down').click(function() {
        $('.all').addClass('allHideTop');
        $('.all').removeClass('allShowDown');
        $('.btn_down').addClass('hidden');
        $('.btn_up').removeClass('hidden');
        $('.apps').addClass('appsShowtop');
        $('.apps').removeClass('appsHidedown');
        $('.apps').css('display','block');
      });
      $('.btn_up').click(function() {
        $('.all').removeClass('allHideTop');
        $('.all').addClass('allShowDown');
        $('.btn_down').removeClass('hidden');
        $('.btn_up').addClass('hidden');
        $('.apps').removeClass('appsShowtop');
        $('.apps').addClass('appsHidedown');
        setTimeout(function(){
          $('.apps').css('display','none');
        },500);
      });
      $('.desktoptile').click(function() {
        $('.all2').toggleClass('desktopopen');
        setTimeout(function(){
            window.location.href = '../desktop/desktop.html';
        }, 170);
      });
      $('.taskbar_startbutton').click(function() {
        $('.all2').toggleClass('desktopopen');
        setTimeout(function(){
            window.location.href = '../desktop/desktop.html';
        }, 170);
      });
    });
  });
  $(function(){
    $('.rumode_btn').click(function(){
        $('body').toggleClass('rumode_on');
        if (localStorage.getItem('rumode_active') == 'true') {
            localStorage.setItem('rumode_active', 'false')
        } else {
            localStorage.setItem('rumode_active', 'true')
        }
            

    });
  });
  if (localStorage.getItem('rumode_active') == "true") {
    $('body').addClass('rumode_on');
  } else {
    $('body').addClass('bodyanimation');
  }

  $('.TILE_metromail').click(function(){
    window.location.href = '../METRO_mail/mainpage.html';
  })
  $('.TILE_metrocalc').click(function(){
    window.location.href = '../METRO_calc/mainpage.html';
  })
  $('.TILE_metroie').click(function(){
    window.location.href = '../METRO_ie/mainpage.html';
  })
  $('.TILE_metrosettengs').click(function(){
    window.location.href = '../METRO_settengs/mainpage.html';
  })
  $('.TILE_metromusic').click(function(){
    window.location.href = '../METRO_music/mainpage.html';
  })
  $('.TILE_store').click(function(){
    window.location.href = '../METRO_store/mainpage.html'
  })
  $('.TILE_igor2677-changelog').click(function(){
    window.location.href = '../appsFromStore/igor2677-changelog/mainpage.html'
  })
  $('.TILE_nerok-2048').click(function(){
    window.location.href = '../appsFromStore/nerok-2048/2048.html'
  })