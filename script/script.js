const toggleSwitch = document.querySelector('.darkMode-toggle input[type="checkbox"]');
const menuItems = document.querySelectorAll('.menu-item');
const tabs = document.querySelectorAll('.filter-tab li a');

/* ====================== switching to dark mode script  ===================== */

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        //Store the user preference for future visits
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
         //Store the user preference for future visits
        localStorage.setItem('theme', 'light');
    }    
}
    // check if any previous theme style are stored or not
toggleSwitch.addEventListener('change', switchTheme, false);
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

/* ====================== puls animation script (change icon) ===================== */
$(".pulse").click(function(){
    $('.menu-ico').toggleClass("fa-angle-left fa-times");
    $('.menuBody').toggleClass("enable");
});

/* ====================== add active state to side menu ===================== */
$(".menuBody a").click(function(){
    $('.menuBody a').removeClass("active");
    $(this).addClass("active");
});

// /* ====================== add active state to portfolio menu  ===================== */
// $(".menu-item").click(function(){
//     $(".menu-item").removeClass("active");
//     $(this).addClass("active");
// });

/* ====================== add active state to topnav bar for portfoilio section  ===================== */
$("ul li").click(function(){
    $("ul li").removeClass("active");
    $(this).addClass("active");
});
/* ====================== testimonials swiper script  ===================== */
var testimomials_swiper = new Swiper(".testimomials_swiper", {
    pagination: {
    el: ".swiper-pagination",
    },
});
/* ====================== Filter data in PORTFOLIO nav bar  ===================== */
tabs.forEach(tab=>{
    tab.addEventListener('click', (e)=>{
        menuItems.forEach(item => {
            console.log()
            if (item.id === e.currentTarget.id) {
                item.style.display = "flex";
            }else if (e.currentTarget.id === "all-tab"){
                item.style.display = "flex";
                var index = item.getAttribute("aria-label").split("/");
                portfolio_side_menu.appendSlide(index[0]);
            }
            else {
                // item.data("aria-label");
                // console.log(item.data("aria-label"));
                var index = item.getAttribute("aria-label").split("/");
                portfolio_side_menu.removeSlide(index[0]);
                item.style.display = "none";
            }
        });
    })
})
/* ====================== portfolio swiper script  ===================== */
var portfolio_side_menu = new Swiper(".portfolio_side_menu", {
    spaceBetween: 15,
    slidesPerView: 5,
    watchSlidesProgress: true,
    direction: "vertical",
    mousewheel: true,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    breakpoints: {
    425: {
        slidesPerView: 4,
        spaceBetween: 20,
    },
    }
});

/* ====================== preview swiper script  ===================== */
var preview_swiper = new Swiper(".preview-container", {
    spaceBetween: 30,
    effect: "creative",
    creativeEffect: {
        prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
        },
        next: {
        shadow: true,
        translate: ["120%", 0, -500],
        },
    },
    thumbs: {
    swiper: portfolio_side_menu,
    },
});
/* ====================== Graphic Design PORTFOLIO Scripts  ===================== */
/* open full screen */
$(".full-screen-btn").click(function(){
    const el = $(this).parent().parent('.card');
    el.find(".overview").css("display" , "flex");
});
$(".close-overview-btn").click(function(){
    $(this).parent().css("display","none");
})




