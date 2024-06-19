
    window.addEventListener('scroll',
function() {
    let container=document.getElementById('container')
if(window.scrollY>50){
    container.style.backgroundColor='gainsboro'
}
else{
    container.style.backgroundColor='#333'
}
})