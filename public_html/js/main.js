$(document).ready(function() {
  $('a.slide').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    var offs = 0;
    if (target.length) {
      $('html,body').animate({
      scrollTop: target.offset().top - offs
      }, 1000);
      if ( ($(this).hasClass("nav-link")) && ($(window).width() < 992)) {
        $('.navbar-close').click(); 
      }
      return false;
    }
   }
  }); 

  $(".form-control-phone").mask("+7 (999) 999-99-99");
  var numMetric = 1;
  $('body').activity({
    callBack: function (e) {
      ym(numMetric, 'reachGoal', '60_sec');
    }
  });   
  $('html').on('click', '.goal_phone', function(e) {
    ym(numMetric, 'reachGoal', 'goal_phone'); return true;
   
  });
  $('html').on('click', '.goal_mail', function(e) {
   ym(numMetric, 'reachGoal', 'goal_mail'); return true;
  });
  $('html').on('click', '.goal_insta', function(e) {
    ym(numMetric, 'reachGoal', 'goal_insta'); return true;
  });
  $('html').on('click', '.goal_facebook', function(e) {
    ym(numMetric, 'reachGoal', 'goal_facebook'); return true;
  });  


  $('.form-lead').on('submit', function (e) {
    var formsend = this;
    $.ajax({
      url: "/form.php",
      type: "POST",
      dataType: 'html',
      data: $(formsend).serialize(),
      success: function (response) {
        ym(numMetric, 'reachGoal', 'goal_lead');
        $('#modal-ok').modal('show');
        result = $.parseJSON(response);  
        console.log(result);
      },
      error: function(response) {
        result = $.parseJSON(response);  
        console.log(result);
      }
    });
    return false;
  });

  $('.modal-lead-form').on('submit', function (e) {
    var formsend = this;
    $.ajax({
      url: "/form2.php",
      type: "POST",
      dataType: 'html',
      data: $(formsend).serialize(),
      success: function (response) {
        ym(numMetric, 'reachGoal', 'goal_lead');
        $('#modal-lead').modal('hide');
        $('#modal-ok').modal('show');
        result = $.parseJSON(response);  
        console.log(result);
      },
      error: function(response) {
        result = $.parseJSON(response);  
        console.log(result);
      }
    });
    return false;
  });  

  $('#review-carousel').owlCarousel({
    loop:false,
    margin:0,
    center:false,
    nav:true,
    autowidth:true,
    navText: '',
    dotsEach: true,
    responsive:{
      0:{
          items:1,
      },
      576:{
        items: 2,
      },
      768:{
        items:3
      }
    }
  });

  $('html').on('click', '.modal-type-btn', function(e) {
        e.preventDefault();
        $('#modal-type').modal('hide');
        $('#modal-lead').modal('show');
   }); 

  var videoEl = document.getElementById('video-file');
  var playBtn = document.getElementById('playBtn');

  $('html').on('click', '#playBtn', function(e) {
    if (videoEl.paused) {
        $('.video-wrapper').css('display', 'none');  
        videoEl.play();

    } else {
        videoEl.pause();
        $('.video-wrapper').css('display', 'flex');
    }
  });  

  $("#input-4").suggestions({
      token: "7998ee62dc6ab91dab96532f5f68760e5ea1c60b",
      type: "PARTY",
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect: function(suggestion) {
          $("#input-5").val(suggestion.data.inn);
      }
  });
  $("#input-5").suggestions({
      token: "7998ee62dc6ab91dab96532f5f68760e5ea1c60b",
      type: "PARTY",
      /* Вызывается, когда пользователь выбирает одну из подсказок */
      onSelect: function(suggestion) {
          $("#input-4").val(suggestion.value);
          $("#input-5").val(suggestion.data.inn);
      }
  });  

});
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();