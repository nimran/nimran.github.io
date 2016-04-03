function init() {
    
    renderMenu();
    bindEvents();
    renderAboutMe();
}


function bindEvents() {
    $('.sideMenuOverlay').bind('touchend', function(e) {
        closeMenu();
    });
    $('.sideMenuOverlay').bind('click', function(e) {
        closeMenu();
    });

}


/**
 * method to close introscreen
 */
function openDetails() {
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
        ga('send', 'pageview', '/profile');
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
    if (eleId == "experience") {
        renderExp();
        ga('send', 'pageview', '/experience');
    }else if(eleId == "skills"){
        renderSkills();
        ga('send', 'pageview', '/skills');
    }else if(eleId == "personal"){
        // renderPersonal();
        ga('send', 'pageview', '/personal');
    }



}

function renderMenu() {
    var menus = '<ul><li class="menuNames waves-effect waves-teal" id="profile-menu" onclick="toggleMenu(this)"> <img src="images/ic_profile.png" width="36" height="36" draggable="false" /><a>Profile</a></li><li class="menuNames waves-effect waves-teal" id="experience-menu" onclick="toggleMenu(this)"><img src="images/ic_exp.png" width="36" height="36" draggable="false" /><a>Experience</a></li><li class="menuNames waves-effect waves-teal" id="skills-menu" onclick="toggleMenu(this)"> <img src="images/ic_skill.png" width="36" height="36" draggable="false" /><a>Skills</a></li><li class="menuNames waves-effect waves-teal" id="personal-menu" onclick="toggleMenu(this)"> <img src="images/ic_persona.png" width="36" height="36" draggable="false" /><a>Personal Details</a></li></ul>';
    $(".sideMenu").append(menus);

}



function renderExp() {
    var orgJson = '[{"orgName":"Tata Consultancy Services","pic":"ic_tcs","duration":"Dec 2015 - Till Date","position":"Systems Engineer","responsibilities":["Engaged in the development of Mobile Application using Android"]},{"orgName":"Sysvine Technologies","pic":"ic_sysvine","duration":"June 2013 - Nov 2015","position":"Software Engineer","responsibilities":["Engaged in the development of Mobile Application using PhoneGap","Responsibilities in designing the architecture the application and coded from specifications,analyzed,evaluated,tested and implemented complex mobile app","Ability to innovate and come up with new ideas especially around UX , user input and content delivery"]},{"orgName":"Southern Info Systems","pic":"ic_sis","duration":"Dec 2012 - June 2013","position":"Software Intern","responsibilities":["Involved in the development of a Mobile Application.","Developing new/additional features in the product.","Came up with unique idea on implementing the app with unique features"]},{"orgName":"SBMS","pic":"ic_sbms","duration":"Dec 2012 - June 2013","position":"Equity Trader","responsibilities":["Buying and selling stock at US stock exchanges on behalf of investors","Analyzing companies and trading opportunities in order to make trade decisions","Devising trading strategies","Monitoring markets and Reporting trading results"]}]';


    // <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Engaged in the development of current HR students by being an available educational resource.</span></li>
    // <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Took advantage of time, diving into several technologies that extend the possibilities of programming.</span></li>
    // <li class="center-item"><i class="fa fa-circle blue-text"></i><span>Honored to be a Hacker in Residence under three month contract with HR.</span></li>
    var orgJsonObj = JSON.parse(orgJson);
    var header = '';
    $(".experience-div").text("");

    for (var i = 0; i < orgJsonObj.length; i++) {
        var listElements = '';
        var orgName = orgJsonObj[i].orgName;
        var orgPic = orgJsonObj[i].pic;
        var orgDuration = orgJsonObj[i].duration;
        var orgPosition = orgJsonObj[i].position;
        for (var j = 0; j < orgJsonObj[i].responsibilities.length; j++) {
            listElements += '<li class="center-item"><i class="fa fa-circle blue-text"></i><span>' + orgJsonObj[i].responsibilities[j] + '</span></li>';
        }

        header += '<div class="row"><div class="col s12"><div class="card hoverable" style="padding-left: 5;padding-right: 5;"><div class="io-section-heading-xs ng-scope">' +
            '<div class="io-section-heading-top"><div class="section-logo"><img width="60px" src="images/' + orgPic + '.png" class="responsive-img"></div>' +
            '<div class="section-title">' + orgName + '</div><div class="section-date grey-text text-darken-1"><span class="">' + orgDuration + '</span></div></div>' +
            '<div class="io-section-heading-bottom"><div class="section-subtitle"><span class="blue-text text-darken-1">' + orgPosition + '</span></div></div></div>' +
            '<div class="io-section-content ng-scope"><ul>' + listElements + '</ul></div></div></div></div>';
    }
    $(".experience-div").append(header);
}


function renderSkills() {
    var skills = '';
    var skillObj = '',
        skillItemsObj = '';
    $(".skills-div").text("");   
    var skillsJson = '[{"SkillType":"Primary Skills","Items":[{"name":"Android","image":"images/ic_android.png"},{"name":"Phonegap","image":"images/ic_phonegap.png"}]},{"SkillType":"Secondary Skills","Items":[{"name":"HTML","image":"images/ic_html.png"},{"name":"CSS","image":"images/ic_css.png"},{"name":"Javascript","image":"images/ic_js.png"},{"name":"iOS","image":"images/ic_apple.svg"},{"name":"Parse","image":"images/ic_parse.png"},{"name":"Dreamfactory","image":"images/ic_df.png"}]}]';
    var skillsJsonObj = JSON.parse(skillsJson);
    for (var i = 0; i < skillsJsonObj.length; i++) {
        skillObj = "";
        skillItemsObj = '';
        var skillType = skillsJsonObj[i].SkillType;
        skillObj += '<div class="row"><div class="col s12"><div class="card hoverable"><div class="io-section-card"><div class="io-section-card-heading">' + skillType + '</div><div class="io-section-logos">';

        for (var j = 0; j < skillsJsonObj[i].Items.length; j++) {
            var skillItemName = skillsJsonObj[i].Items[j].name;
            var skillItemImage = skillsJsonObj[i].Items[j].image;
            skillItemsObj += '<div class="img-wrap"><img src="' + skillItemImage + '" class="responsive-img no-flex"><h6>' + skillItemName + '</h6></div>';
        }
        skills += skillObj + "" + skillItemsObj + "</div></div></div></div></div>";
    }
    $(".skills-div").append(skills);
}

function renderAboutMe(){
    var aboutMe ='My name is <b>Imran</b>, and I am 25 years old, Software Developer from Chennai who has been in the field for 3 years and counting.<br> I am a person who has interest in Mobile and Web application development.I love blogging. My blogs will be released soon !!.<br> Other than work, I have more interest in Volunteering. Currently I am volunteering with Bhumi for more than 4 years.<br> During my leisure time, I always sit with Social networking, Whatsapp. Like others, I am person who loves to hangout with Friends :)';

    $('#aboutMeText').text("");
    $('#aboutMeText').append(aboutMe);
}
