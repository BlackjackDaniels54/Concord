const headerData = JSON.parse(localStorage.getItem("data")),
      newsContainer = document.querySelector('.concord_news_block-innerInfo'),
      titleContainer = document.querySelector('.concord_news_block-title'),
      htmlTitle = document.querySelector('title');

function fillTitle(data){
    htmlTitle.innerText = data.title;
    titleContainer.innerHTML = `
        <h3>${data.title}</h3>
            <div>${data.date}</div>
            <div><i>${data.author}</i></div>
        <div class=" mt-3 line-between"></div>
    `;  
}

fillTitle(headerData);

async function getArticle() {
    try {
        const res = await fetch('https://artichecker.com/parser/?url=' + headerData.link);
        const data = res.json();
        return data;

    }catch(e) {
        console.error("Error receiving page", e)
    }
}

function hideSpinner() {
    newsContainer.classList.remove('d-flex', 'justify-content-center', 'align-items-center')
    newsContainer.style = "";
    newsContainer.innerHTML = null;
}


getArticle()
        .then(data => {
            hideSpinner();
            showArticle(data);
        })


function showArticle(data) {
    
        data.forEach(item => {
            newsContainer.innerHTML += item;
        });
        newsContainer.innerHTML += `
            <div class="newsblock_innerInfo-container d-flex justify-content-center">
                <div class="newsblock_innerInfo-img-container">
                    <img src="${headerData.image}">
                </div>
            </div>
        `;
        
}