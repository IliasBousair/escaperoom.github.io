console.log('Main Loaded')



const pillowBtn = document.querySelector(".pillowBtn");



function goToPuzzle3() {

    window.open('/pages/puzzle3HL.html');

}


if(pillowBtn)
{
    pillowBtn.addEventListener('click', goToPuzzle3);
}