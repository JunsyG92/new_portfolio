

const intro = document.getElementById('intro');
const skill = document.getElementById('soft_skills');
const recommand = document.getElementById('recommandations');
const tarifs = document.getElementById('tarifs');


let introTop = intro.offsetTop;
let skillTop = skill.offsetTop;
let recommandTop = recommand.offsetTop;
let tarifsTop = tarifs.offsetTop;

const listLinkSkill = document.querySelector('.nav-item a[href="#soft_skills"]').parentNode;
const listLinkRecommand = document.querySelector('.nav-item a[href="#recommandations"]').parentNode;
const listLinkTarif = document.querySelector('.nav-item a[href="#tarifs"]').parentNode;

let middleWindow = window.innerHeight / 2;

window.addEventListener("resize", () => {
    introTop = intro.offsetTop;
    skillTop = skill.offsetTop;
    recommandTop = recommand.offsetTop;
    tarifsTop = tarifs.offsetTop;

    middleWindow = window.innerHeight / 2;
})

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY
    let scrollMiddleWindow = middleWindow + scrollPosition

    if (scrollMiddleWindow < skillTop) {
        listLinkSkill.classList.remove('active')
        listLinkRecommand.classList.remove('active')
        listLinkTarif.classList.remove('active')
    }
    if (scrollMiddleWindow > skillTop && scrollMiddleWindow < recommandTop) {
        listLinkSkill.classList.add('active')
        listLinkRecommand.classList.remove('active')
        listLinkTarif.classList.remove('active')
    }
    if (scrollMiddleWindow > recommandTop && scrollMiddleWindow < tarifsTop) {
        
        listLinkSkill.classList.remove('active')
        listLinkRecommand.classList.add('active')
        listLinkTarif.classList.remove('active')
    }
    if (scrollMiddleWindow > tarifsTop ) {
        
        listLinkSkill.classList.remove('active')
        listLinkRecommand.classList.remove('active')
        listLinkTarif.classList.add('active')
    }
})
