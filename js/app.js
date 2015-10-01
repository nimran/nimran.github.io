function init() {
    bindEvents();
}

function bindEvents() {
    $('.sideMenuOverlay').bind('touchend', function(e) {
        closeMenu();
    });
    $('.sideMenuOverlay').bind('click', function(e) {
       closeMenu();
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

    $(".centerdiv").removeClass('page-right');
    $(".centerdiv").addClass('page-center');
}

function openMenu() {

    if($(".sideMenuOverlay").hasClass('page-left')){

        $(".sideMenuOverlay").show();
        $(".sideMenuOverlay").removeClass('page-left');
        $(".sideMenuOverlay").addClass('page-center');
        
    } else {
        
        $(".sideMenuOverlay").addClass('page-left');
        $(".sideMenuOverlay").removeClass('page-center');

    }

}
function closeMenu(){

        $(".sideMenuOverlay").addClass('page-left');
        $(".sideMenuOverlay").removeClass('page-center');
        $(".c-hamburger--htla").removeClass('is-active');
}
