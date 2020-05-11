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

function select_language(language) {
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).css('display', 'initial');
        else
            $(this).hide();
    });
}