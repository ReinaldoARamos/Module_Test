function showAge(city){

        return  `A cidade é ${city}`
}

function morbius(){
   let div = document.createElement('h2')
   div.id = 'content'
   div.innerHTML = '<p>Morbius</p>'
   document.body.appendChild(div)
}

export{
    showAge, 
    morbius
}