import { ServicesData } from "./servicesData";

export function ServicesTabs() {
    const data = ServicesData(),
          titles = document.querySelector('.services-titles'),
          content = document.querySelector('.services-content');

    data.forEach((obj, index) => {
        titles.innerHTML += `
            <div>${obj.title}</div>
        `;
    })

    
}