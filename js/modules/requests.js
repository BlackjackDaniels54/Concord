export async function GetArticles() {
    try {
        const res = await fetch('https://artichecker.com/parser/');
        const data = res.json();
        
        return data;

    }catch(e){
        console.log(e);
    }
}