// Task 1-3

var inp1 = document.getElementById('inp1');
var plus = document.getElementsByClassName('plus')[0];
var minus = document.getElementsByClassName('minus');
var counter = 0;
plus.onclick = function () {
    if (counter < 8) {
        counter++;
        var inpNext = inp1.cloneNode(true);
        inpNext.querySelector('input').value = '';
        inpNext.querySelector('button').className = 'minus';
        inpNext.querySelector('button').innerHTML = '-';
        inpNext.id = 'inp1'+counter;
        wrapper.appendChild(inpNext);
    }
        
    for (var i=0; i<minus.length; i++) {
        minus[i].onclick = removeBtn;
    } 

    function removeBtn () {
        counter--;
        var classDel = 'inp1'+(counter+1);
        console.log(classDel);
        var deleteInp = document.getElementById(classDel);
        deleteInp.parentNode.removeChild(deleteInp);
    }
}

var inputs = document.getElementsByClassName('inputs');
var txtArea = document.getElementById('txtArea');
document.getElementById('joinInp').onclick = joinInp;

function joinInp () {
    warning();
    txtArea.value = '';
    var inpmas = document.getElementsByClassName('inputs');
    var radio = document.getElementsByName('radioBtn');

    if (radio[0].checked) {
        for (var i = 1; i < inputs.length; i+=2) {
            txtArea.value += inputs[i].value+' ';
        }
    }
    else if (radio[1].checked){
        for (var i = 0; i < inputs.length; i+=2) {
            txtArea.value += inputs[i].value+' ';
        }
    }
    else if (radio[2].checked){
        for (var i = 0; i < inputs.length; i++) {
            txtArea.value += inputs[i].value+' ';
        }
    }
}

function warning () {
    var message = document.getElementsByClassName('message');
    for (var i = 0; i < inputs.length; i++){
        if (!inputs[i].value){
            inputs[i].style.background = 'red';
            message[i].innerHTML = 'Заполните поле!';
        }
        else {
            inputs[i].style.background = null;
            message[i].innerHTML = '';
        }
    }
}
// TASK#4
var alert4 = document.getElementById('alert4');

document.getElementById('btn4').onclick = function (e) {
    
    alert4.style.display = 'inline-block';
    alert4.style.left = e.pageX + 100+'px';
    alert4.style.top = e.pageY - 25+'px';

}
document.querySelector('#btn1').onclick = click;
document.querySelector('#btn2').onclick = click;

function click() {
    alert4.style.display = 'none';
    alert('Вы выбрали опцию-' + this.value);
}

// TASK#5
var list5 = document.querySelector('#list5');
var newElement = document.querySelector('#newElement');
var allLi = document.getElementsByTagName('li');

for (var i=0; i<allLi.length; i++) {
        allLi[i].onclick = changeColor;
        } 

        function changeColor() {
        console.log(this);
        if (this.classList.contains('white')) {
            this.classList.remove('white');
            this.classList.add('red');
        }
        else {
            this.classList.remove('red');
            this.classList.add('white');
        }
    }

document.getElementById('btn5').onclick = function () {
    var newLi = document.createElement('li');
    newLi.innerHTML = newElement.value;
    newLi.className = 'white';
    list5.appendChild(newLi);
    newLi.onclick = changeColor;

}

// TASK#6
var leaf = document.querySelector('.leaf');
var text = document.querySelector('.text');

leaf.onmouseenter = function () {
    leaf.style.left = '-200px';
    text.style.opacity = '0.5';
    leaf.style.opacity = '';
}

text.onmouseleave = function () {
    setTimeout(function () {
        console.log(this);
        leaf.style.left = '';
    }, 500);
    opacity()
}
function opacity() {
    setTimeout(function () {
        text.style.opacity = '1';
        leaf.style.opacity = '1';
    }, 1500);
}
// TASK#7

var msg7 = document.getElementById('msg7');
var img7 = document.getElementsByClassName('img7');
var link7 = document.getElementsByClassName('link7');

for (var i = 0; i < link7.length; i++) {
    link7[i].onmouseenter = function () {
        msg7.style.display = 'block';
        msg7.style.color = 'white'; 
        msg7.innerHTML = 'Адрес ссылки: ' + this.href + '<hr>' + 'Название ссылки: ' + this.title + '<hr>' + 'Атрибут target: ' + this.target;
        if ((this.href == '') || (this.title == '') || (this.target == '')) {
            msg7.innerHTML = 'ГИПЕРССЫЛКА:необходимые атрибуты отсутствуют';
            msg7.style.color = 'red'; 
        }
    }
    link7[i].onmouseleave = function () {
        msg7.style.display = 'none';
        msg7.innerHTML = '';
    }
}
// TASK#8

for (var i = 0; i < img7.length; i++) {
    img7[i].onmouseenter = function () {
        msg7.style.display = 'block';
        msg7.style.color = 'white'; 
        msg7.innerHTML = 'Адрес изображения: ' + this.src + '<hr>' + 'Описание изображения: ' + this.alt;
        if (this.alt == '') {
            this.style.boxShadow = ' 0 0 8px 8px red'; 
        }
        if ((this.src == '') || (this.alt == '')) {
            msg7.innerHTML = 'ИЗОБРАЖЕНИЕ:необходимые атрибуты отсутствуют';
            msg7.style.color = 'red'; 
        }
    }
    img7[i].onmouseleave = function () {
        msg7.style.display = 'none';
        msg7.innerHTML = '';
        this.style.boxShadow = '';
    }
}

// TASK#9
var h1 = document.getElementsByTagName('h1').length;
var h2 = document.getElementsByTagName('h2').length;
var h3 = document.getElementsByTagName('h3').length;
var h4 = document.getElementsByTagName('h4').length;
var h5 = document.getElementsByTagName('h5').length;
var h6 = document.getElementsByTagName('h6').length;
var report9 = document.getElementById('report9');
// console.log(h1);
// console.log(h2);
// console.log(h3);
// console.log(h4);
// console.log(h5);
// console.log(h6);

document.getElementById('btn9').onclick = function () {

    if (h1 == 0) {
        report9.innerHTML += '<hr>' + 'h1 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h1 - ' + h1;
    }
    if (h2 == 0) {
        report9.innerHTML += '<hr>' + 'h2 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h2 - ' + h2;
    }
    if (h3 == 0) {
        report9.innerHTML += '<hr>' + 'h3 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h3 - ' + h3;
    }
    if (h4 == 0) {
        report9.innerHTML += '<hr>' + 'h4 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h4 - ' + h4;
    }
    if (h5 == 0) {
        report9.innerHTML += '<hr>' + 'h5 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h5 - ' + h5;
    }
    if (h6 == 0) {
        report9.innerHTML += '<hr>' + 'h6 - отсутствует';
    }
    else {
        report9.innerHTML += '<hr>' + 'Количество h6 - ' + h6;
    }
}

// TASK#10
var report10 = document.getElementById('report10');
var metaTag = document.getElementsByTagName('meta');
console.log(metaTag);

document.getElementById('btn10').onclick = function () {
    if (document.title) {
        report10.innerHTML += 'Meta title присутствует' + '<hr>' + 'Длина Meta title - ' + document.title.length + ' символов' + '<hr>';
    }
    else {
        report10.innerHTML += 'Meta title отсутствует' + '<hr>';
    }

    if (metaTag.description) {
        report10.innerHTML += 'Meta description присутствует' + '<hr>' + 'Длина Meta description - ' + metaTag.description.content.length + ' символов' + '<hr>';
    }
    else {
        report10.innerHTML += 'Meta description отсутствует' + '<hr>';
    }

    if (metaTag.keywords) {
        report10.innerHTML += 'Meta keywords присутствует' + '<hr>';
    }
    else {
        report10.innerHTML += 'Меtа keywords отсутствует' + '<hr>';
    }
}