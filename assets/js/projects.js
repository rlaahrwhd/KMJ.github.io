$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            title: '정보기술자격(ITQ) A등급',
            technologies: [],
            description: "아래한글, 엑셀, 파워포인트의 사무능력",
            categories: ['featured', 'webdev']
        },
        {
            title: '그래픽기술자격(GTQ) 1급',
            technologies: [],
            description: "포토샵 활용능력",
            categories: ['featured', 'webdev']
        },
        {
            title: 'Cos Pro(Python) 2급',
            technologies: [],
            description: "Python에 대한 기본적인 활용능력",
            categories: ['featured', 'webdev']
        },
        {
            title: '컴퓨터활용능력 2급',
            technologies: [],
            description: "엑셀, 워드, PPT와 같은 사무능력",
            categories: ['featured', 'webdev']
        }
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}
