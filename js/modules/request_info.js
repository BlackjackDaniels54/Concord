
export function Request_Info(){
  window.addEventListener("DOMContentLoaded", () => {
    
    const InfoContainer = document.querySelector('#custom_news-data');
    
    fetch('https://artichecker.com/parser/')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        const listItems = data.map(item => {

            const a = document.createElement('a');
            a.classList.add('info_block');
            
            a.innerHTML = `
                <div class="info_block-img">
                    <img src="${item.image}">
                </div>
                <span class="info_block-date">${item.date}</span>
                <h3 class="info_block-title">${item.title}</h3>
                <span class="info_block-author">${item.author}</span>
                <p class="info_block-excerpt">${item.excerpt}</p>
                
            `; 
            return a;
          });
          
          
          listItems.forEach(item => {
            InfoContainer.append(item);
          });
          const tabs = document.querySelectorAll('.info_block');
          tabs.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                data.forEach((obj, i) => {
                  if(index == i) {
                    
                    $.ajax({
                      url: 'server.php',
                      method: 'POST',
                      data: { url: obj.url},
                      success: function(response) {
                        const newData = JSON.parse(response);
                        console.log(newData);
                        const ArrOfData = [newData, obj.title, obj.date]
                        
                        localStorage.setItem('newsBlock', JSON.stringify(ArrOfData));
                        
                        setTimeout(function() {
                          document.location.href = 'src/pages/newsPage.html';
                       },  1000);
                      },
                      error: function() {
                        // Обработка ошибки
                        console.log('Произошла ошибка при отправке AJAX-запроса.');
                      }
                    });

                  }
                })
            })
          })
          return data;
        })

        .catch(error => {
            console.error('Error 404', error);
});

})
}


