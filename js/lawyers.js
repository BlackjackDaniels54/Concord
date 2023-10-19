import { Lawyers } from "./modules/textData";

const data = Lawyers();
const body = document.querySelector('body');
body.innerHTML = null;

data.forEach((lawyer, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
        <img src="../img/lawyers/${lawyer.image}">
        <h5>${lawyer.name}</h5>
        <h5>${lawyer.surname}</h5>
    `;

    body.append(div);
})
