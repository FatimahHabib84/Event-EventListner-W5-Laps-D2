// let squar = document.getElementsByTagName(`div`)
// let width = document.getElementsByName('width')
// let height = document.getElementsByName('height')
// let color = document.getElementsByName('color')
// let radius = document.getElementsByName('radius')

let set = document.getElementById('set')
let reset = document.getElementById('reset')
let squar = document.getElementsByTagName(`div`)[0]

set.addEventListener('click',()=>{
    let w = document.getElementById('width')
    let h = document.getElementById('height')
    let c = document.getElementById('color')
    let r = document.getElementById('radius')
    squar.style.width = w.value+"%"
    squar.style.height = h.value+"%"
    squar.style.borderRadius = r.value+"%"
    console.log(radius.value)
    squar.style.backgroundColor = c.value

})

reset.addEventListener('click',()=>{
    squar.style.width = '30%'
    squar.style.height = '40%'
    squar.style.borderRadius = '0'
    console.log(radius.value)
    squar.style.backgroundColor = 'blue'
})