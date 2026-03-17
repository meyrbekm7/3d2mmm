function to(){
    let input=document.getElementById('inp')
    let list=document.getElementById('list')

    let p =document.createElement('p')

    p.textContent=input.value

    list.appendChild(p)

    input.value=''
p.style.border='1px solid black';
p.style.width='100px'
p.style.backgroundColor='white';
p.style.borderRadius='10px'
p.style.boxShadow='1px 2px 2px 2px red'
}

    function wq(){
let list=document.getElementById('list')
list.innerHTML=''
    }



    
    window.addEventListener('load',function(){
        let add=this.document.querySelector('.ota')
        add.classList.add('axi')
    })




    window.addEventListener('load',function(){
        let ass=document.querySelector('.h')
setTimeout(function(){
     ass.classList.add('m')
},2000)

    
    })








































// function to(){
//     let input=document.getElementById('inp')
// let list=document.getElementById('list')

// let p=document.createElement('p')

// p.textContent=input.value

// list.appendChild(p)

// input.value=''

// }
