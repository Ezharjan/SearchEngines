$(document).ready(function () {
    // $("#menu").click(function (event) {
    //     $(this).toggleClass('on');
    //     $(".list").toggleClass('closed');
    //     $(".mywth").toggleClass('hidden');
    // });
    $("#content").click(function (event) {
        $(".on").removeClass('on');
        $(".list").addClass('closed');
        $(".mywth").removeClass('hidden');
    });
});
