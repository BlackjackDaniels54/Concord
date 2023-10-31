import { Lawyers } from "./modules/textData";



const data = Lawyers();
const body = document.querySelector('#lawyer-card_container');
body.innerHTML = null;

data.forEach((lawyer, index) => {
    const div = document.createElement('div');
    div.classList.add('col-sm-6', 'col-lg-4', 'col-xl-3',  'mb-5', 'employee');
    div.setAttribute('data-id', index);
    div.innerHTML = `
    
        <div class="lawyer-card_container">
            <div class="lawyer-card_content">
                <div class="mb-3 img-lawyer-card_container">
                    <img src="../img/lawyers/${lawyer.image}" alt="">
                </div>
                <div class="lawyer-info_container">
                    <div class="lawyer-name">${lawyer.name + ' ' + lawyer.surname}</div>
                    <div class="lawyer-city">${lawyer.city}</div>
                    
                    <a class="lawyer-email" href="mailto:${lawyer.email}">
                        ${lawyer.email}
                    </a>
                    
                </div>
            </div>
        </div>
    
    `;

    body.append(div);
})


