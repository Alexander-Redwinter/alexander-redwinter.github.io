$(document).ready(function () {
    if (screen.width <= 850) {
        document.location = "mobile.html";
    }



    $('.container').on('click', function () {
        $(this).addClass('container-origin');
        $(this).removeClass('pointer');
        $(this).off('click');
        $('.help-text').addClass('hidden');
        $('a').addClass('visible');
    })


});

