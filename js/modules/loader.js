export function Loader() {
    const mediaElements = Array.from(document.querySelectorAll('.lawyers_video-container video, img'));
    console.log(mediaElements);
    let contentCounter = 0;
    mediaElements.forEach((file, index) => {
        if(file.tagName == 'IMG'){
            file.addEventListener('load', (e) => {
                contentCounter++;
                console.log(index);
            })
        }else if(file.tagName == 'VIDEO') {
            file.addEventListener('canplay', (e) => {
                contentCounter++;
                console.log(index);
            })
        }
        
    })
    console.log(mediaElements.length);
    
}