$(document).ready(function () {


//Header animation

    function animateHeader() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > 50) {
            $('header').addClass('header-active py-1 py-lg-2').removeClass('py-2 py-lg-4');
        } else {
            $('header').removeClass('header-active py-1 py-lg-2').addClass('py-2 py-lg-4');
        }
    }
    
    
    //animation 
    function animation() {

        var windowHeight = $(window).height();
        var scrollDown = $(window).scrollTop();

        $('.animation').each(function () {
            var position = $(this).offset().top;

            if (position < scrollDown + windowHeight - 50) {
                var animacija = $(this).attr('data-animation');
                var delay = $(this).attr('data-delay');
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
                
            }
        });
    }

    animateHeader();
    animation();

    $(window).scroll(function () {
        animateHeader();
        animation();
    });



    // EASE SCROLL

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });


    //OWL CAROUSEL START HERE

    if ($('.owl-carousel').length > 0) {


        $('.lead-slider').owlCarousel({

            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true

        });//end lead-slider

        $('.team-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                992: {
                    items: 4,
                    margin: 30,
                    slideBy: 4
                }
            }



        });//end team slider

        $('.portfolio-slider').owlCarousel({
            loop: true,
            autoplay: true,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2,
                    margin: 30,
                    slideBy: 2
                },
                992: {
                    items: 4,
                    margin: 30,
                    slideBy: 4
                }
            }

        });//end portfolio slider



        $('.testimonial-slider').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayHoverPause: true

        })


    }


    //counter up 

    $('.achievements-value').counterUp({
        delay: 10,
        time: 1000
    });




    $(function () {
        $(".subscribe-form").validate({
            highlight: function (element) {
                $(element).closest('.form-group').addClass("has-danger");
                $(element).addClass("form-control-danger");
            },
            unhighlight: function (element) {
                $(element).closest('.form-group').removeClass('has-danger').addClass('has-success');
                $(element).removeClass('form-control-danger').addClass('form-control-success');
            },
            rules: {
                name: {
                    required: true
                },
                email:{
                    required:true,
                    email:true
                }


            },
            messages: {
                name: {
                    required: "The *Name field is required!"
                },
                email:{
                    required: 'The *Email field is required',
                    email:'Please enter a valid Email address!'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });




});//end document.ready



