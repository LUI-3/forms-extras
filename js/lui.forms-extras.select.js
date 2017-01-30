$(document).ready(function() {
    // JQUERY UI SELECT
    $("select.make_lui_select").each(function() {
        $(this).parent().append('<div class="ui-js-dropdown"><div class="inside"></div></div>');
        var dropdown = $(this).siblings(".ui-js-dropdown").children(".inside");
        $(this).selectmenu({
			appendTo: dropdown
		});
    });
});