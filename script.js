const translations = {
    en: {
        pageTitle: "My portfolio", logo: "My portfolio",
        navHome: "Home", navAbout: "About", navSkills: "Skills", navProjects: "Projects", navContact: "Contact",
        languageButton: "فارسی", welcome: "WELCOME TO MY PORTFOLIO",
        heroGreeting: "Hi, I'm", heroRole: "Web Developer",
        heroDescription: "I create modern, beautiful and responsive websites. Welcome to my personal portfolio!",
        viewWork: "View My Work", profileAlt: "My profile photo",
        aboutTitle: "About", me: "Me",
        aboutDescription: "I am passionate about web development and technology. I enjoy learning new skills and building creative websites.",
        my: "My", skillsTitle: "Skills",
        htmlDescription: "Building website structure.", cssDescription: "Creating beautiful designs.",
        jsDescription: "Adding interactive features.", projectsTitle: "Projects",
        portfolioProject: "Portfolio Website", portfolioDescription: "My personal website.",
        landingProject: "Landing Page", landingDescription: "A modern landing page design.",
        designProject: "Web Design", designDescription: "A creative web design project.",
        contactTitle: "Contact", contactDescription: "Feel free to get in touch with me!",
        sayHello: "Say Hello", whatsappSupport: "WhatsApp Support", copyright: "© 2026 My portfolio. All rights reserved.",
        message: "Thank you for visiting my portfolio! Have a great day!"
    },
    fa: {
        pageTitle: "نمونه‌کار من", logo: "نمونه‌کار من",
        navHome: "خانه", navAbout: "دربارهٔ من", navSkills: "مهارت‌ها", navProjects: "پروژه‌ها", navContact: "تماس",
        languageButton: "English", welcome: "به نمونه‌کار من خوش آمدید",
        heroGreeting: "سلام، من", heroRole: "توسعه‌دهندهٔ وب هستم",
        heroDescription: "وب‌سایت‌های مدرن، زیبا و واکنش‌گرا طراحی می‌کنم. به نمونه‌کارهای من خوش آمدید!",
        viewWork: "دیدن پروژه‌ها", profileAlt: "عکس پروفایل من",
        aboutTitle: "دربارهٔ", me: "من",
        aboutDescription: "به توسعهٔ وب و فناوری علاقه دارم. از یادگیری مهارت‌های تازه و ساخت وب‌سایت‌های خلاقانه لذت می‌برم.",
        my: "", skillsTitle: "مهارت‌ها",
        htmlDescription: "ساختاردهی صفحات وب.", cssDescription: "طراحی ظاهر زیبای وب‌سایت.",
        jsDescription: "اضافه‌کردن قابلیت‌های تعاملی.", projectsTitle: "پروژه‌ها",
        portfolioProject: "وب‌سایت نمونه‌کار", portfolioDescription: "وب‌سایت شخصی من.",
        landingProject: "صفحهٔ فرود", landingDescription: "طراحی مدرن صفحهٔ فرود.",
        designProject: "طراحی وب", designDescription: "یک پروژهٔ خلاقانهٔ طراحی وب.",
        contactTitle: "ارتباط با", contactDescription: "برای ارتباط با من پیام بدهید!",
        sayHello: "سلام کن", whatsappSupport: "پشتیبانی در واتساپ", copyright: "© ۲۰۲۶ نمونه‌کار من. تمامی حقوق محفوظ است.",
        message: "از بازدید شما از نمونه‌کار من سپاسگزارم! روز خوبی داشته باشید."
    }
};

let currentLanguage = "en";

function setLanguage(language) {
    currentLanguage = language;
    const translation = translations[language];
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.body.classList.toggle("fa", language === "fa");
    document.title = translation.pageTitle;

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        element.textContent = translation[element.dataset.i18n];
    });
    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        element.alt = translation[element.dataset.i18nAlt];
    });
}

function toggleLanguage() {
    setLanguage(currentLanguage === "en" ? "fa" : "en");
}

function showMessage() {
    alert(translations[currentLanguage].message);
}

document.getElementById("languageBtn").addEventListener("click", toggleLanguage);
setLanguage(currentLanguage);
