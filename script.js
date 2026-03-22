$(document).ready(function () {
    $("#profile").load("views/profile.html");
    $("#work-exp").load("views/work-exp.html", function () {
        renderWorkExperiencePage();
    });
    $("#products").load("views/products.html", function () {
        renderProductsPage();
    });
    $("#articles").load("views/articles.html", function () {
        renderArticlesPage();
    });
});

const scrollToPosition = (id) => {
    if (!document.getElementById(id)) return;

    const position = document.getElementById(id).offsetTop;

    window.scrollTo({
        top: position - 65,
        behavior: 'smooth',
    });
}

const renderWorkExperiencePage = () => {
    const histories = [
        {
            position: 'Software Engineer',
            company: 'TMBThanachart Bank Public Company Limited. (ttb bank)',
            detail: 'Software Engineer department of Retail Leading and Collection Solution at ttb bank.',
            date: 'April 2023 – Present',
            cover: '07.png',
            images: [],
            seq: 7,
        },
        {
            position: 'Backend Developer',
            company: 'PUUN Intelligent Co., Ltd.',
            detail: 'Develop and maintain an accounting platform name "Peak Account" both front-end and back-end with .Net Core and Vue.js. including improve query performance of Store Procedure by indexing databases.',
            date: 'July 2022 – March 2023',
            cover: '06.png',
            images: [],
            seq: 6,
        },
        {
            position: 'Web Developer',
            company: 'Zipevent Co. Ltd.',
            detail: 'Develop Front-end and Back-end (.Net MVC) and many features in Zipevent such as Live polling, Live streaming, Virtual Event, Business Matching, and Real-Time Chat (Nuxt.js & Firebase)',
            date: 'July 2019 – July 2022',
            cover: '04.jpg',
            images: [],
            seq: 5,
        },
        {
            position: 'Internship and Cooperative Education',
            company: 'IT One Co. Ltd.',
            detail: 'Develop a new feature to “IT One OT Request” for IT One Co. Ltd. and Develop an “Inspection Abnormality Report” system for SCG Chemicals with .Net MVC and AngularJS',
            date: 'June 2018 – Nov 2018',
            cover: '03.jpg',
            images: [],
            seq: 4,
        },
        {
            position: 'Microsoft Innovation Center 2017',
            company: 'Microsoft (Thailand) Limited',
            detail: 'Develop mobile application “Group Mobile” by Xamarin for Ecartstudio Co., Ltd.',
            date: 'June 2017 – July 2017',
            cover: '02.jpg',
            images: [],
            seq: 3,
        },
        {
            position: 'Waiter (Part-time)',
            company: 'Swensen’s Fortune Tower',
            detail: 'Serviced a customer and make an Ice cream sundae.',
            date: 'March 2015 – July 2015',
            cover: '01.jpg',
            images: [],
            seq: 2,
        },
        {
            position: 'Waiter (Part-time)',
            company: 'Sizzler Rama 9',
            detail: 'Serviced a customer.',
            date: 'February 2013 – October 2014',
            cover: '',
            images: [],
            seq: 1,
        },
    ];

    let result = ''

    for (let i = 0; i < histories.length; i++) {
        const work = histories[i];
        console.log(work)
        let temp = '';
        let cover = '';

        if (work.cover) {
            cover = `
              <div class="cover-image">
                <img
                  src="${work.cover}?alt=media"
                  alt="${work.company}"
                />
              </div> `
        }

        temp = `<div class="grid grid-cols">
          <div class="content grid grid-rows">
            <div class="date">${work.date}</div>
            <div class="description">
              <div class="position">${work.position}</div>
              <div class="company">${work.company}</div>
              <div class="detail">${work.detail}</div>
            </div>
          </div>
            ${cover}
        </div>`

        result += temp;
    }

    $('#work-exp-histories').html(result);
}

const renderProductsPage = () => {

}

const renderArticlesPage = () => {

}