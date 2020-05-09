$(document).ready(function () {

    $('.container').on('click', function () {
        $(this).addClass('container-origin');
        $(this).removeClass('pointer');
        $(this).off('click');
        $('.help-text').addClass('hidden');
    })


});