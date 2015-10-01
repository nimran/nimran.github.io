function init() {
    bindEvents();
}

function bindEvents() {
    $('.card-face__avatar,.card-face__name').bind('touchend', function(e) {
        openDetails();
    });
    $('.card-face__avatar,.card-face__name').bind('click', function(e) {
        openDetails();
    });
}



function animate(src, dest, type) {

}


/**
 * method to close introscreen
 */
function openDetails() {
    console.log("cal");
    $(".mainScreen").removeClass('page-center');
    $(".mainScreen").addClass('page-left');
    $("#toolbar").removeClass('page-right');
    $("#toolbar").addClass('page-center');
    $(".centerdiv").removeClass('page-right');
    $(".centerdiv").addClass('page-center');
}

function openMenu() {

    if($(".sideMenu").hasClass('page-left')){
        $(".sideMenu").show();
        $(".sideMenu").removeClass('page-left');
        $(".sideMenu").addClass('page-center');
    } else {

        $(".sideMenu").addClass('page-left');
        $(".sideMenu").removeClass('page-center');
    }

}
