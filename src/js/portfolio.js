let portfolioToggle = document.querySelector('.portfolio__toggle');
let portfolioToggleDesctop = document.querySelector('.portfolio__toggle-control--desctop');
let portfolioToggleMobile = document.querySelector('.portfolio__toggle-control--mobile');

portfolioToggleDesctop.addEventListener('click', function(){
    document.querySelector('.portfolio__list').classList.add('portfolio__list--changed');
    portfolioToggleDesctop.style.opacity = '1';
    portfolioToggleMobile.style.opacity = '0.6';
});
portfolioToggleMobile.addEventListener('click', function(){
    document.querySelector('.portfolio__list').classList.remove('portfolio__list--changed');
    portfolioToggleDesctop.style.opacity = '0.6';
    portfolioToggleMobile.style.opacity = '1';
});