function init() {
    bindEvents();
}

function bindEvents() {
    $('.card-face__avatar,.card-face__name').bind('touchend', function(e) {
        
    });
    $('.card-face__avatar,.card-face__name').bind('click', function(e) {
       
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

    if($(".sideMenu").hasClass('page-left')){
        $(".sideMenu").show();
        $(".sideMenu").removeClass('page-left');
        $(".sideMenu").addClass('page-center');
    } else {

        $(".sideMenu").addClass('page-left');
        $(".sideMenu").removeClass('page-center');
    }

}
function closeMenu(){

        $(".sideMenu").addClass('page-left');
        $(".sideMenu").removeClass('page-center');
}
