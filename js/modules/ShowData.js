export function ShowData(articles){
    const InfoContainer = document.querySelector('#custom_news-data');
    InfoContainer.innerHTML = null;
    

    InfoContainer.classList.remove('custom_spinner_preload-container');
    InfoContainer.classList.add('main_content_news_block','row','p-4', 'px-lg-2', 'g-4', 'justify-content-center', 'justify-content-sm-between');
    const listItems = articles.map(item => {

        const div = document.createElement('div');
        div.classList.add('info_block', 'col-12','col-sm-5', 'p-2');
        div.setAttribute('data-goto', item.url);
        div.innerHTML = `
                <div class="info_block-img">
                    <img src="${item.image}">
                </div>
                <span class="info_block-date">${item.date}</span>
                <h3 class="info_block-title">${item.title}</h3>
                <span class="info_block-author">${item.author}</span>
                <p class="info_block-excerpt">${item.excerpt}</p>
            
        `; 
        return div;
      });
      listItems.forEach(item => {
        InfoContainer.append(item);
      });
}


export async function GoToArticle() {
    const InfoContainer = document.querySelector('#custom_news-data');

    InfoContainer.addEventListener('click', (e) => {
        const target = e.target.closest('.info_block');

        const ArticleData = getInfoAbout(target); 

        if(target !== null) {
            const link = target.getAttribute('data-goto');
            ArticleData.link = link;
            localStorage.setItem("data", JSON.stringify(ArticleData));
            window.location.href = 'src/pages/newsPage.html';
        }
    })
}

function getInfoAbout(infoBlock) {
    const title = infoBlock.querySelector('.info_block-title').innerText,
          date = infoBlock.querySelector('.info_block-date').innerText,
          author = infoBlock.querySelector('.info_block-author').innerText,
          image = infoBlock.querySelector('.info_block-img img').src;

    return {
        title: title,
        date: date,
        author: author,
        image: image
    };
}