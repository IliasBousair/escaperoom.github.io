console.log('Main Loaded')



const trashBtn = document.querySelector(".trashBtn");



function goToPuzzle2() {
    
    window.open('/pages/puzzle2.html');

}


if(trashBtn)
{
    trashBtn.addEventListener('click', goToPuzzle2);
}