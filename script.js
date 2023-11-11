
/// Getting Buttton 
                                          
/////////////////////////////////////////////////////////////////////
                                                                 // |
//numbers                                                        // |
const zerobtn  = document.getElementById("0btn")                 // |
const onebtn   = document.getElementById("1btn")                 // |
const twobtn   = document.getElementById("2btn")                 // |
const threebtn = document.getElementById("3btn")                 // |
const fourbtn  = document.getElementById("4btn")                 // |
const fivebtn  = document.getElementById("5btn")                 // |
const sixbtn   = document.getElementById("6btn")                 // |
const sevenbtn = document.getElementById("7btn")                 // |
const eightbtn = document.getElementById("8btn")                 // |
const ninebtn  = document.getElementById("9btn")                 // |
                                                                 // | /// Getting Buttton 
// symbols                                                       // |
                                                                 // |
const divbtn     =   document.getElementById("divbtn")           // |
const mutiplebtn =   document.getElementById("mutiplebtn")       // |
const minusbtn   =   document.getElementById("minusbtn")         // |
const plusbtn    =   document.getElementById("plusbtn")          // |
const dotbtn     =   document.getElementById("dotbtn")           // |
const equalbtn   =   document.getElementById("equalbtn")         // |
const clearbtn   =   document.getElementById("clearbtn")         // |
                                                                 // |
// content area                                                  // |
                                                                 // |
var  contentarea = document.getElementById("inputnumber")        // |
var  seccontentarea = document.getElementById("secinputnumber")  // |
                                                                 // |
/////////////////////////////////////////////////////////////////////



//Eventlistener


var syb = null;
var num01 = null;
var num02 = null;
var ans = null;

//Numbers
clearbtn.addEventListener('click', ()=>{
    contentarea.innerHTML = 00
    seccontentarea.innerHTML = null
})

zerobtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00'){
        contentarea.innerHTML =  0
    }else{
        // contentarea.innerHTML =  0
        contentarea.append(0)
    }
})

onebtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  1
    }else{
        contentarea.append(1)
    }
})

twobtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  2
    }else{
        contentarea.append(2)
    }
})

threebtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  3
    }else{
        contentarea.append(3)
    }
})

fourbtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  4
    }else{
        contentarea.append(4)
    }
})

fivebtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  5
    }else{
        contentarea.append(5)
    }
})

sixbtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  6
    }else{
        contentarea.append(6)
    }
})

sevenbtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00' || contentarea.innerHTML === '0'){
        contentarea.innerHTML =  7
    }else{
        contentarea.append(7)
    }
})

eightbtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00', contentarea.innerHTML === '0'){
        contentarea.innerHTML =  8
    }else{
        contentarea.append(8)
    }
})

ninebtn.addEventListener('click' ,()=>{
    if(contentarea.innerHTML === '00', contentarea.innerHTML === '0'){
        contentarea.innerHTML =  9
    }else{
        contentarea.append(9)
    }
})

//Symbols

dotbtn.addEventListener('click' , ()=>{
    if(contentarea.innerHTML === '0'){
        contentarea.innerHTML = '0.'
    }else if( contentarea.innerHTML === '0.'){
        contentarea.innerHTML = '0'
    }else{
        contentarea.append(".")
    }
})

divbtn.addEventListener('click', ()=>{
    if(contentarea.innerHTML === '0'|| contentarea.innerHTML === '0.' || contentarea.innerHTML === '00'){
        contentarea.innerHTML = '0'
    }else if(contentarea.inculdes = "+"){
        
    }
    else{
        syb = "/"
        num01 = contentarea.innerHTML
        contentarea.append('/')
        seccontentarea.innerHTML = contentarea.innerHTML
        contentarea.innerHTML = "0"
    }
})

mutiplebtn.addEventListener('click', ()=>{
    if(contentarea.innerHTML === '0'|| contentarea.innerHTML === '0.' || contentarea.innerHTML === '00'){
        contentarea.innerHTML = '0'
    }else{
        syb = "*"
        num01 = contentarea.innerHTML
        contentarea.append('	×')
        seccontentarea.innerHTML = contentarea.innerHTML
        contentarea.innerHTML = "0"
    }
})

minusbtn.addEventListener('click', ()=>{
    if(contentarea.innerHTML === '0'|| contentarea.innerHTML === '0.' || contentarea.innerHTML === '00'){
        contentarea.innerHTML = '0'
    }else{
        syb = "-"
        num01 = contentarea.innerHTML
        contentarea.append('-')
        seccontentarea.innerHTML = contentarea.innerHTML
        contentarea.innerHTML = "0"
    }
})

plusbtn.addEventListener('click', ()=>{
    if(contentarea.innerHTML === '0'|| contentarea.innerHTML === '0.' || contentarea.innerHTML === '00'){
        contentarea.innerHTML = '0'
    }else{
        syb = '+'
        num01 = contentarea.innerHTML
        contentarea.append('+')
        seccontentarea.innerHTML = contentarea.innerHTML
        contentarea.innerHTML = "0"
    }
})

equalbtn.addEventListener('click', ()=>{
    if(contentarea.innerHTML === '0'|| contentarea.innerHTML === '0.' || contentarea.innerHTML === '00'){
        contentarea.innerHTML = '0'
    }else{
        num02 = contentarea.innerHTML
        num01 = Number(num01)
        num02 = Number(num02)
      if(syb === null){
          contentarea.innerHTML = contentarea.innerHTML
      }else if(syb === '+'){
           ans = num01 + num02
           contentarea.innerHTML = ans
           seccontentarea.innerHTML = num01 + "+" +num02;
      }else if(syb === '/'){
        ans = num01 / num02
        contentarea.innerHTML = ans
        seccontentarea.innerHTML = num01 + "÷" +num02;
       }else if(syb === '*'){
        ans = num01 * num02
        contentarea.innerHTML = ans
        seccontentarea.innerHTML = num01 + "	×" +num02;
       }else if(syb === '-'){
        ans = num01 - num02
        contentarea.innerHTML = ans
        seccontentarea.innerHTML = num01 + "-" +num02;
       }
    }
})
