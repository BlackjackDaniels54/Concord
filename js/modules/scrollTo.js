
export function ScrollTo(){
    const link = document.querySelector('.home_news');
          
    link.addEventListener('click', (e) => {
        
        const gotoBlock = document.querySelector(e.target.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - 90; 
        
        window.scrollTo({
            top: gotoBlockValue,
            behavior:"smooth"
        })
        
        document.querySelector('.nav-menu-wrapper').classList.remove('show');
})
}
    
