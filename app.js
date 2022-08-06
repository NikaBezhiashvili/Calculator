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
        number.textContent = parseFloat(eval(data.final)).toFixed(2)
    })
}

calculate();


