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
    $(".profile-div").removeClass('page-center');
    $(".profile-div").addClass('page-left');

    $(".centerdiv").removeClass('page-right');
    $(".centerdiv").addClass('page-center');
}

function openMenu() {

    if ($(".sideMenuOverlay").hasClass('page-left')) {

        $(".sideMenuOverlay").show();
        $(".sideMenuOverlay").removeClass('page-left');
        $(".sideMenuOverlay").addClass('page-center');

    } else {

        $(".sideMenuOverlay").addClass('page-left');
        $(".sideMenuOverlay").removeClass('page-center');

    }

}

function closeMenu() {

    $(".sideMenuOverlay").addClass('page-left');
    $(".sideMenuOverlay").removeClass('page-center');
    $(".c-hamburger--htla").removeClass('is-active');
}



function toggleMenu(ele) {
    var eleId = $(ele).attr('id').split('-')[0];

    var headerText = eleId[0].toUpperCase() + eleId.slice(1);
    if (eleId == "profile") {
        headerText = "";
    }
    $("#headerText").val("");
    $("#headerText").text(headerText);
    var eleClass = eleId + "-div";
    var element = $('.page-center').attr('class').split(' ')[0];
    var elementTmp = $('.page-center').find('class');
    var clsName = '';
    for (i = 0; i < elementTmp.prevObject.length; i++) {
        clsName = elementTmp.prevObject[i].className.split(' ')[0];

        if (clsName.indexOf("sideMenuOverlay") == -1) {
            $("." + clsName).addClass('page-right');
            $("." + clsName).removeClass('page-center');
        }
    }

    $("." + eleClass).addClass('page-center');

    
    $("." + eleClass).removeClass('page-right');
    if(eleId == "experience"){
        renderExp();
    }


}

function renderExp() { 
    var orgJson = '[{"orgName":"Sysvine Technologies","pic":"ic_sysvine","duration":"June 2013 - Til Date","position":"Software Engineer","responsibilities":["Engaged in the development of Mobile Application using PhoneGap","Responsibilities in designing the architecture the application and coded from specifications,analyzed,evaluated,tested and implemented complex mobile app","Ability to innovate and come up with new ideas especially around UX , user input and content delivery"]},{"orgName":"Southern Info Systems","pic":"ic_sis","duration":"Dec 2012 - June 2013","position":"Software Intern","responsibilities":["Involved in the development of a Mobile Application.","Developing new/additional features in the product.","Came up with unique idea on implementing the app with unique features"]},{"orgName":"SBMS","pic":"ic_sbms","duration":"Dec 2012 - June 2013","position":"Equity Trader","responsibilities":["Buying and selling stock at US stock exchanges on behalf of investors","Analyzing companies and trading opportunities in order to make trade decisions","Devising trading strategies","Monitoring markets and Reporting trading results"]}]';

    
// <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Engaged in the development of current HR students by being an available educational resource.</span></li>
// <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Took advantage of time, diving into several technologies that extend the possibilities of programming.</span></li>
// <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Honored to be a Hacker in Residence under three month contract with HR.</span></li>
var orgJsonObj = JSON.parse(orgJson);
   var header='';
   $(".experience-div").text("");
   
   for(var i=0;i<orgJsonObj.length;i++){
    var listElements = '';
        var orgName = orgJsonObj[i].orgName;
        var orgPic = orgJsonObj[i].pic;
        var orgDuration = orgJsonObj[i].duration;
        var orgPosition = orgJsonObj[i].position;
        for(var j=0;j< orgJsonObj[i].responsibilities.length;j++){
            listElements += '<li class="center-item"><i class="fa fa-circle blue-text"></i><span>'+orgJsonObj[i].responsibilities[j]+'</span></li>';
        }
                
     header += '<div class="row"><div class="col s12"><div class="card hoverable" style="padding-left: 5;padding-right: 5;"><div class="io-section-heading-xs ng-scope">' +
        '<div class="io-section-heading-top"><div class="section-logo"><img width="60px" src="images/'+orgPic+'.png" class="responsive-img"></div>' +
        '<div class="section-title">'+orgName+'</div><div class="section-date grey-text text-darken-1"><span class="">'+orgDuration+'</span></div></div>'+
        '<div class="io-section-heading-bottom"><div class="section-subtitle"><span class="blue-text text-darken-1">'+orgPosition+'</span></div></div></div>'+
        '<div class="io-section-content ng-scope"><ul>'+listElements+'</ul></div></div></div></div>';

        
    }

    // $(".io-section-content ng-scope").append('<ul>'+listElements+'</ul>');
    $(".experience-div").append(header);
}
