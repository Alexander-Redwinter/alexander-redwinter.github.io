function select_language(language) {
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).css('display', 'initial');
        else
            $(this).hide();
    });
}