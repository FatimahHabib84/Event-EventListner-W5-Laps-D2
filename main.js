let btns = document.querySelectorAll('button')
let p = document.getElementsByTagName('p')[0]
//      Q1
// change text
btns[0].addEventListener('click',()=>{
p.innerText = "Hi I am Noor, data anayist"
})

// increase size
btns[1].addEventListener('click',()=>{
    p.style.fontSize = "1.5em"
})

// decreace size
btns[2].addEventListener('click',()=>{
    p.style.fontSize = "0.75em"
})

// change color
btns[3].addEventListener('click',()=>{
    p.style.color = "lightblue"
})

// change background color
btns[4].addEventListener('click',()=>{
    p.style.background = "navy"
})

//      Q2
let img = document.getElementsByTagName('img')
let imges = ["https://images.pexels.com/photos/22207914/pexels-photo-22207914/free-photo-of-a-black-and-white-photo-of-a-staircase.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/24718979/pexels-photo-24718979/free-photo-of-a-black-and-white-photo-of-a-lone-tree-on-top-of-a-mountain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/23891460/pexels-photo-23891460/free-photo-of-woman-standing-and-holding-net-of-basketball-ring.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/23230552/pexels-photo-23230552/free-photo-of-a-person-walking-out-of-a-monumental-building-in-city.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
"https://images.pexels.com/photos/21366949/pexels-photo-21366949/free-photo-of-woman-sitting-with-book-and-coffee-cup.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"]
  
btns[5].addEventListener('click',()=>{
    var i = Math.floor(Math.random()*imges.length);
    img[0].src = imges[i]
    img[0].style.width="40vw"
    img[0].style.height="50vw"
    console.log(i)
})