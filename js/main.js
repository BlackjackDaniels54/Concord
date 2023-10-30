import { ScrollTo } from "./modules/scrollTo";
import { initValid } from "./modules/initValid";
import { GetArticles } from "./modules/requests";
import { ShowData, GoToArticle } from "./modules/ShowData";

window.addEventListener("DOMContentLoaded", () => {
    ScrollTo();

    GetArticles()
    .then(data => {
        ShowData(data);
        GoToArticle();
    })

    initValid();
})


