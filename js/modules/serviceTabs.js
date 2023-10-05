import { ServicesData } from "./servicesData";

export function ServicesTabs() {
    const data = ServicesData(), // Получение заголовков и статей 
          titles = document.querySelector('.services-titles'), // Контейнер заголовков
          content = document.querySelector('.services-content'); // Контейнер статей

// Перебор данных и отрисовка заголовков 

    data.forEach((obj, index) => {
        titles.innerHTML += `
            <div data-id="${index}" class="serive-title-item d-flex justify-content-between mt-3">
                <div class="serive-title-item-text">
                    ${obj.title}
                </div>
                <div class="serive-title-item-arrow">
                    <i class="fa-solid fa-chevron-right" ></i>
                </div>
            </div>
        `;
    })
//Слушатель событий клика по заголовкам 

    titles.addEventListener("click", (e) => { 
        const target = e.target.closest('.serive-title-item'); // Фильтрация и поиск подходящего
        if(!target.classList.contains('active')) {
            clearActive();
            activeTab(target);
            setTimeout(() => {
                showArticle(Number(target.getAttribute('data-id')));
            }, 450);
            
        }
    })

    function clearActive(){
        const titleItems = document.querySelectorAll('.serive-title-item'),
              serviceContentContainer = document.querySelector('.services-content-container');
        titleItems.forEach(elem => {
            const titleIcon = elem.querySelector('.serive-title-item-arrow');
            titleIcon.classList.remove('active');
            elem.classList.remove('active');
        })
        serviceContentContainer.classList.remove('element-to-fadeIn');
        serviceContentContainer.classList.add('element-to-fade');

        setTimeout(() => {
            content.innerHTML = null;
        }, 350);
        
    }

    function activeTab(elem){
        const titleIcon = elem.querySelector('.serive-title-item-arrow');
        titleIcon.classList.add('active');
        elem.classList.add('active');
    }

    function showArticle(id) {
        content.innerHTML = `
        <div class="services-content-container element-to-fadeIn">
            ${data[id].description}
        </div>
        `;
    }
    showArticle(0);
    activeTab(document.querySelector('.serive-title-item'));
}