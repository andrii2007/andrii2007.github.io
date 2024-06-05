$(document).ready(function(){
    $('.carousel_inner').slick({
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow:'<button type="button" class="prev"><img src="icon/chevron-left-solid.png" alt=""></button>',
        nextArrow: '<button type="button" class="next"><img src="icon/chevron-right-solid.png" alt=""></button>',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows:false
                }
              },
        ]

    });
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

  // $('.catalog-item__link').each(function(i){
  //   $(this).on('click',function(e){
  //     e.preventDefault();
  //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
  //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
  //   });

    // $('.catalog-item__back').each(function(i){
    //   $(this).on('click',function(e){
    //     e.preventDefault();
    //     $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //     $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //   });
    // })

    function toggleClass(item){
      $(item).each(function(i){
        $(this).on('click',function(e){
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
        })
    };
    toggleClass('.catalog-item__link')
    toggleClass('.catalog-item__back')

    // Modal

    $('[data-modal=consultation]').on('click',function(){
      $('.overlay,#consultation').fadeIn('slow');
    });
    $('.modal__close').on('click',function(){
      $('.overlay,#consultation, #thank, #order').fadeOut('slow');


    $('.button_mini').on('click',function(){
      $('.overlay,#order').fadeIn('slow');
    })

    $('.button_mini').each(function(i){
        $(this).on('click',function(){
          $('#order .modal__desc').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay,#order').fadeIn('slow');
        })
    });
    })


    // $('#consultation form').validate({
    //   rules:{
    //     name:"required",
    //     phone:"required",
    //     email:{
    //       require:true,
    //       email:true
    //     }
    //   },
    //   messages: {
    //     name: "Please specify your name",
    //     email: {
    //       required: "We need your email address to contact you",
    //       email: "Your email address must be in the format of name@domain.com"
    //     }
    //   }
    // });
    // $('#consultation-form').validate({
    //   rules:{
    //     name:"required",
    //     phone:"required",
    //     email:{
    //       require:true,
    //       email:true
    //     }
    //   },
    //   messages: {
    //     name: "Please specify your name",
    //     email: {
    //       required: "We need your email address to contact you",
    //       email: "Your email address must be in the format of name@domain.com"
    //     }
    //   }
    // });


    function validateForms(form){
      $(form).validate({
          rules: {
              name: {
                  required: true,
                  minlength: 2
              },
              phone: "required",
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
              name: {
                  required: "Пожалуйста, введите свое имя",
                  minlength: jQuery.validator.format("Введите {0} символа!")
                },
              phone: "Пожалуйста, введите свой номер телефона",
              email: {
                required: "Пожалуйста, введите свою почту",
                email: "Неправильно введен адрес почты"
              }
          }
      });
  };

  validateForms('#consultation-form');
  validateForms('#consultation form');
  validateForms('#order form');


  $('input[name=phone]').mask("+380(999) 999-9999");

  $('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#consultation, #order').fadeOut();
        $('.overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});






  $(window).scroll(function(){
    if($(this).scrollTop()>1600){
      $(".pageup").fadeIn();
    }else{
        $(".pageup").fadeOut();
    }
  });
  new WOW().init();

  });
// https://kenwheeler.github.io/slick/


// const slider = tns({
//   container: '.carousel_inner',
//   items: 1,
//   slideBy: 'page',
//   // autoplay: true
//   nav:false,
//   controls:false
//   // controlsText:[
//   //   '<img src="icon/chevron-left-solid.png" alt="">',
//   //   '<img src="icon/chevron-right-solid.png" alt="">'
//   // ]
// });

// document.querySelector('.prev').addEventListener("click",function () {
//   slider.goTo("prev");
// });
// document.querySelector('.next').addEventListener("click",function () {
//   slider.goTo("next");
// });


