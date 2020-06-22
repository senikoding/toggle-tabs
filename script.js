let $btn     = Array.from(document.getElementsByTagName('button'))
let $content = Array.from(document.getElementsByClassName('content')) 

$btn.forEach(e=>{
    e.addEventListener('click',()=>{
        display($btn.indexOf(e))
    })
})

display(0)

function display(id){
    $btn.forEach(e=>e.style.backgroundColor = 'rgb(90, 90, 90)')
    $content.forEach(e=>e.style.display = 'none');

    $btn[id].style.backgroundColor = 'aliceblue';
    $content[id].style.display = 'block'
}