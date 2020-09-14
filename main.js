const title__in = document.querySelector('.youtube__info .contents .titleandButton .title__in');
const moreBtn = document.querySelector('.youtube__info .contents .titleandButton .moreBtn');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    title__in.classList.toggle('clamp')
});