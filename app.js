var keys = document.querySelector('.keys');
var quantity = 18;
var number = document.getElementById('number')
for(let i = 0; i < quantity; i++){
    let element = document.createElement('button');
    element.classList.add('key');
    keys.appendChild(element);
    if ( i == 0){
        element.setAttribute('id', '7');
        element.textContent = '7';
    }else if(i == 1){
        element.setAttribute('id', '8');
        element.textContent = '8';
    }else if(i == 2){
        element.setAttribute('id', '9');
        element.textContent = '9';
    }else if(i == 3){
        element.setAttribute('id', 'del');
        element.textContent = 'DEL';
    }else if(i == 4){
        element.setAttribute('id', '4');
        element.textContent = '4';
    }else if(i == 5){
        element.setAttribute('id', '5');
        element.textContent = '5';
    }else if(i == 6){
        element.setAttribute('id', '6');
        element.textContent = '6';
    }else if(i == 7){
        element.setAttribute('id', '+');
        element.textContent = '+';
    }else if(i == 8){
        element.setAttribute('id', '1');
        element.textContent = '1';
    }else if(i == 9){
        element.setAttribute('id', '2');
        element.textContent = '2';
    }else if(i == 10){
        element.setAttribute('id', '3');
        element.textContent = '3';
    }else if(i == 11){
        element.setAttribute('id', '-');
        element.textContent = '-';
    }else if(i == 12){
        element.setAttribute('id', '.');
        element.textContent = '.';
    }else if(i == 13){
        element.setAttribute('id', '0');
        element.textContent = '0';
    }else if(i == 14){
        element.setAttribute('id', '/');
        element.textContent = '/';
    }else if(i == 15){
        element.setAttribute('id', '*');
        element.textContent = 'X';
    }else if(i == 16){
        element.setAttribute('id', 'reset');
        element.textContent = 'RESET';
    }else if(i == 17){
        element.setAttribute('id', '=');
        element.textContent = '=';
    }
}

data = {
    final : ''
}

// for(let i = 0; i < document.getElementsByClassName('keys').length; i++){
//     console.log(document.getElementsByClassName('keys').length)
// }

var nums = [1,2,3,4,5,6,7,8,9,0 ]
var operators = ['+', '-', '*', '/']

for(let i = 0; i < document.getElementsByClassName('keys')[0].getElementsByClassName('key').length; i++){
    let  get_element = document.getElementsByClassName('keys')[0].getElementsByClassName('key')[i]
    get_element.addEventListener('click', function(){
        
        if (get_element.getAttribute('id') == 'del'){
            data.final = data.final.slice(0, -1)
            number.textContent = data.final
            console.log(data)
        }else if(get_element.getAttribute('id') == 'reset'){
            data.final = ''
            number.textContent = '0'
            console.log(data)
        }else{
            if(get_element.getAttribute('id') != '='){
                data.final = data.final + get_element.getAttribute('id')
                number.textContent = data.final
                console.log(data)
            }
            for(let i = 0; i < data.final.length; i++){
                if(!(parseInt(data.final[0]) in nums)){
                    number.textContent = 'Error'
                }else if(!(parseInt(data.final[i-1]) in nums) && !(parseInt(data.final[i]) in nums)){
                    number.textContent = 'Error'
                }
            }
        }
    })
}



function calculate(){
    let  equal = document.getElementsByClassName('keys')[0].getElementsByClassName('key')[17];

    equal.addEventListener('click', function(){
        if((parseFloat(eval(data.final)).toFixed(2)).toString() == 'Infinity'){
            number.textContent = "Error"
            data.final = ''
        }else{
            number.textContent = (parseFloat(eval(data.final)).toFixed(2)).toString()  
            data.final = ''   
        }  
    })
}

calculate();




// Theme Buttons //

var switcher = document.getElementById('button')
localStorage.setItem('theme', '0')
switcher.addEventListener('click', function(){
    if (localStorage.getItem('theme') == '0'){
        localStorage.setItem('theme', '1');
        document.getElementById('body').style.background = 'hsl(0, 0%, 90%)';
        document.getElementById('background').style.background = 'hsl(0, 5%, 81%)';
        document.getElementById('output').style.background = 'hsl(0, 0%, 93%)';
        document.getElementById('number').style.color = 'hsl(60, 10%, 19%)';
        document.getElementById('=').style.backgroundColor =  'hsl(25, 98%, 40%)';
        document.getElementById('=').style.boxShadow = '0 8px 0px 0px hsl(25, 99%, 27%)';
        document.getElementById('del').style.backgroundColor =  'hsl(185, 42%, 37%)';
        document.getElementById('del').style.boxShadow = '0 8px 0px 0px hsl(185, 58%, 25%)';
        document.getElementById('reset').style.backgroundColor =  'hsl(185, 42%, 37%)';
        document.getElementById('reset').style.boxShadow = '0 8px 0px 0px hsl(185, 58%, 25%)';
    } else {
        localStorage.setItem('theme', '0');
        document.getElementById('body').style.background = 'hsl(222, 26%, 31%)';
        document.getElementById('background').style.background = 'hsl(223, 31%, 20%)';
        document.getElementById('output').style.background = 'hsl(224, 36%, 15%)';
        document.getElementById('number').style.color = '#fff';
        document.getElementById('=').style.backgroundColor =  'hsl(6, 63%, 50%)';
        document.getElementById('=').style.boxShadow = '0 8px 0px 0px hsl(6, 70%, 34%)';
        document.getElementById('del').style.backgroundColor =  'hsl(225, 21%, 49%)';
        document.getElementById('del').style.boxShadow = '0 8px 0px 0px hsl(224, 28%, 35%)';
        document.getElementById('reset').style.backgroundColor =  'hsl(225, 21%, 49%)';
        document.getElementById('reset').style.boxShadow = '0 8px 0px 0px hsl(224, 28%, 35%)';

    }
})