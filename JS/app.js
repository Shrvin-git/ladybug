const introOuter = document.querySelector('.intro-logo');
const headerHeight = document.querySelector('header').offsetHeight;
let logoSite = document.querySelector('.logo_site')
let sectionNavbar = document.querySelector('.navbar')
let flashBottom = document.querySelector('.item-arrow')
let navElem = document.querySelector('.nav')
let mobileMenu = document.querySelector('.menu-mobile--toggle')
let navMenuElem = document.querySelector('.nav-link_menu')
let delabsInfoShape = document.querySelector('.intro-bottom_section')
let allSections = document.querySelectorAll('section')
let menuItems = document.querySelectorAll('.navbar-btn')
let delabsContainer = document.querySelector('.delabs-wrapper')


window.addEventListener('scroll', function (event) {
    const ladybug = document.querySelector('.intro-logo');
    const intro = document.querySelector('.intro');

    const scrollTop = window.scrollY;
    const headerHeight = intro.offsetHeight;
    console.log(scrollTop);
    // درصد پیشرفت اسکرول بین هدر و سکشن
    const scrollProgress = Math.min(Math.max(scrollTop / headerHeight, 0), 1);

    // نقطه شروع انیمیشن (300px)
    const startScroll = 300;

    let rotation = 0; // چرخش
    let ladybugSize = 11.11; // اندازه
    let ladybugLeft = 50; // موقعیت افقی
    let ladybugTop = 45; // موقعیت عمودی

    if (scrollTop < startScroll) {
        // فاز اولیه: حرکت به پایین بدون چرخش
        const initialProgress = scrollTop / startScroll; // درصد پیشرفت
        ladybugTop = 45 + initialProgress * 10; // حرکت به پایین
    }
    else {
        // فاز اصلی: چرخش و حرکت به چپ
        const adjustedScrollProgress = (scrollTop - startScroll) / (headerHeight - startScroll);
        rotation = adjustedScrollProgress * 360; // چرخش 360 درجه
        ladybugSize = 11.11 + adjustedScrollProgress * (40.40 - 11.11); // تغییر اندازه
        ladybugLeft = 50 - adjustedScrollProgress * 25; // حرکت تدریجی به سمت چپ
        ladybugTop = 55 + adjustedScrollProgress * 10; // حرکت به پایین

    }

    // اعمال تغییرات
    ladybug.style.transform = "translate(-50%, -50%) rotate(" + rotation + "deg)";
    ladybug.style.width = ladybugSize + "vw";
    ladybug.style.left = ladybugLeft + "%";
    ladybug.style.top = ladybugTop + "%";


    if (scrollTop > 840) {
        ladybug.style.zIndex = '-5'
        ladybug.style.transform = "translate(-50%, -50%) rotate(" + 360 + "deg)";
        ladybug.style.width = 40.40 + "vw";
        ladybug.style.left = 25 + "%";
        ladybug.style.top = 60 + "%";
        delabsContainer.style.position = 'fixed'
        delabsContainer.style.zIndex = '-5'
        delabsContainer.style.top = '30%'
        delabsContainer.style.right = '1%'
    }
    else {
        delabsContainer.style.position = 'static'
        ladybug.style.display = 'block'
    }


    
    if (scrollTop > 1500) {
        delabsContainer.classList.add('delabs-wrapper--cover')
        ladybug.classList.add('remove-ladybug')
    }
    else if (scrollTop > 1100) {
        delabsInfoShape.classList.add('intro-bottom_section--cover')
    }
    else if (scrollTop < 1450) {
        delabsInfoShape.classList.remove('intro-bottom_section--cover')
        delabsContainer.classList.remove('delabs-wrapper--cover')
        introOuter.classList.remove('remove-ladybug')
    }

if (scrollTop > 300) {
        logoSite.style.top = '20px'
        sectionNavbar.style.bottom = 0
    }

    else {
        logoSite.style.top = '-5rem'
        sectionNavbar.style.bottom = -5 + 'rem'
    }


    allSections.forEach(function (section, index) {

        const sectionTop = section.offsetTop - 400;
        const sectionHeight = section.clientHeight;
        const scrollY = window.scrollY;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {

            const progress = Math.ceil(((scrollY - sectionTop) / sectionHeight) * 100); // درصد پیشرفت اسکرول
            const underline = menuItems[index].querySelector('.section-navbar');
            underline.style.width = progress + '%'; // طول نوار برابر با درصد پیشرفت
        }

        else {
            const underline = menuItems[index].querySelector('.section-navbar');
            underline.style.width = '0%'; // نوار به حالت اولیه برگردد
        }

    })
})
mobileMenu.addEventListener('click', function () {
    navElem.classList.toggle('menu-mobile--toggle-line')
    navMenuElem.classList.toggle('nav-link_menu--open')
})
setInterval(function () {
    flashBottom.classList.toggle('item-arrow_toggle')
}, 600)






