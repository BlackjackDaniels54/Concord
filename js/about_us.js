import { aboutInfo } from "./modules/textData";



$('.about_us-tab').on('click', (e) => {
    const tab = e.target,
          idTab = Number(tab.getAttribute('data-id'));

    if(!tab.classList.contains('active')) {
        $('.about_us-tab').removeClass('active');
        tab.classList.add('active');
        $('.about_bg-img-container .main-title').text(tab.innerText);
        fillContainer(aboutInfo(idTab));
    }
})


fillContainer(aboutInfo(0));
function fillContainer(arr) {
    const container = $('#about_us-content');
          container[0].innerText = null;
    arr.forEach(paragraph => {
        container[0].innerHTML += `
        <p>${paragraph}</p>
        `;
    });
}