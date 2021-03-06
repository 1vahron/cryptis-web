$(document).ready(function() {
    centerJumbo();

    // my-navi
    $("#my-carousel").on("slide.bs.carousel", function (e) {
        $(".btn-sm:not(.my-navi)").each(function () {
            $(this).removeClass("active")
        });
        var index = $(e.relatedTarget).index();
        $(".btn-sm:not(.my-navi):nth-child("+(2+index)+")").addClass("active");
    });
    $("#my-carousel").carousel("cycle");

    // set year
    $('#copyright').html("&copy; Cryptis " + new Date().getFullYear());
});

function centerJumbo() {
    $(window).resize(function(){
        $('.my-content').css({
            position:'absolute',
            left: ($(window).width() - $('.my-content').outerWidth())/2,
            top: ($(window).height() - $('.my-content').outerHeight())/2,
            width: $('.header').width()
        });

    });
    $(window).resize();
    setTimeout("$(window).resize()", 1);
    setTimeout("$(window).resize()", 5);
    setTimeout("$(window).resize()", 10);
}

function normalizeScreensHeight() {
    $(window).resize(function(){
        var max = 0;
        $('.my-item').each(function() {
            if ($(this).height() > max) {
                max = $(this).height();
            }
        })
        $('.my-item').css("min-height", function() { return max+'px'; });
    });
    $(window).resize();
    setTimeout("$(window).resize()", 1);
}

function subscribe() {
    $.ajax({
        url: '/actions/subscribe',
        data: {
            email: $('#subscribe-email').val()
        }
    }).done(showSuccess).fail(showFail);

    function showFail() {
        $('.alert').removeClass('alert-success');
        $('.alert').addClass('alert-info');
        $('.alert').text(locale.email.emailAlreadyRegistered);
        $('.alert').fadeIn('slow', function() {
            setTimeout("$('.alert').fadeOut('slow');", 1500);
        });
    }

    function showSuccess() {
        $('.alert').removeClass('alert-info');
        $('.alert').addClass('alert-success');
        $('.alert').text(locale.email.emailRegisteredThanks);
        $('.alert').fadeIn('slow', function() {
            setTimeout("$('.alert').fadeOut('slow');", 1500);
        });
    }
}
