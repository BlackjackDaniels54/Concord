import { ScrollTo } from "./modules/scrollTo";

import { GetArticles } from "./modules/requests";
import { ShowData, GoToArticle } from "./modules/ShowData";


ScrollTo();
GetArticles()
    .then(data => {
        ShowData(data);
        GoToArticle();
    })
