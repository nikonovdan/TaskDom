/*1 - Выбор элемента на странице */
/*1.1 - Выбор элемента по id */
const header1 = document.getElementById('title');
console.log(header1);
/*1.2 - Выбрать элемент по селекторы */ 
const container = document.querySelector('#container');
console.log(container);
/*1.3 - Выбрать несколько элементов по селектору */
const paragrphs = document.querySelectorAll('p');
console.log(paragrphs);

/*2 - Менять контент у контейнеров  */

//Считываем только текст (без тегов)
console.log(header1.textContent);

//Считаем весь контент (и текст и теги)
console.log(header1.innerHTML);

//считываем контент (и текст и теги) вместе с самим тегом
console.log(header1.outerHTML);

//Считываем только текст (без тегов)
console.log(header1.innerText);
//Считываем только текст (без тегов)
console.log(header1.outerText);

//устанвливает новый конетнт (теги интерпритируются как текст)
header1.textContent = 'Новый заголовок <i class="bi bi-wind"></i>';
//устанвливает новый конетнт (теги интерпритируются как код)
header1.innerHTML = 'Новый заголовок <i class="bi bi-wind"></i>';


//меняет полность контент и сам тег на новый
// header1.outerHTML = '<h3>Новый заголовок <i class="bi bi-wind"></i></h3>';

/*3 - Работа с классами (атрибут class) */
const h2 = document.getElementById('h2');
//дабаляем классы
h2.classList.add('red');
h2.classList.add('big');
h2.classList.add('itilac');
//удаляем классы
h2.classList.remove('red');
//проверка есть ли данный класс у элемента
console.log(h2.classList.contains('big'));


//добавть/удалить класс
for(let elem of paragrphs){
    elem.classList.toggle('text');
}

//4 - Работа со стилями (атрибут style)

let link = document.querySelector('.menu li:nth-child(2) .menu-link'); //берем 2 ссылку в меню
link.style.background = "red";
link.style.color = "green";
link.style.textDecoration = "none";
link.style.fontSize = "24px"

link.style.background = "yellow";

//5 - Работа с атрибутами

//чтение атрибута
console.log(link.getAttribute('href'));

//создание/изменение атрибута
link.setAttribute('href','https://midis.ru/');
link.setAttribute('target', '_blank');

//удалить атрибут
//link.removeAttribute('style');


//6 - Создание нового элемента (тега) на странице
const newImg = document.createElement('img'); // создаем новый тег

newImg.setAttribute('src', 'img/1.png'); //задаем атрибут src
newImg.alt = "Стул"; //задаем атрибут alt

newImg.classList.add('new'); //добавляем кратинке класс new

container.append(newImg); //в элемент container добавляем картинку


const nextImg = document.createElement('img');
nextImg.src = 'img/2.png'
nextImg.classList.add('new');
//container.append(nextImg); //добавляем элемент в конец контейнера
//container.prepend(nextImg); //добавляем элемент в начало контейнера
//container.before(nextImg); //добавляем элемент до контейнера
container.after(nextImg); // добавляем элемент после контейнера

//7 - Работа с потомки (дочерние элементы, внуки, правнуки)

//взять все элементы на странице
const links = document.querySelectorAll('a');
console.log(links);

//взять все ссылки внутри ЭЛЕМНТА (с классом menu)
const menu = document.querySelector('.menu');
const menuLinks = menu.querySelectorAll('a');
console.log(menuLinks);


// 8 - Работа с предками (родители, дедушки, продедушки)
const button = document.getElementById('btn');

//найдем для кнопки ближайшего предка form
const form = button.closest('form');

form.style.background = 'yellow';
form.style.padding = '20px'

//9 - События (клик мыши)
//по клику мыше на кнопке Войти, мы будем в консоль 
// выводить данные которые пользователь ввел
//  в логин и пароль


button.addEventListener('click',function(event){
    event.preventDefault();//отменяем действие по умолчанию - перезагрузку страницы
    console.log(event);
    let login = document.getElementById('login').value; //считываем что пользователь ввел в поле login
    let password = document.getElementById('pass').value;
    console.log('логин - ', login, 'пароль - ', password);
    //по клику на кнопке будет добавляться анимация у заголовка 1 уровня
    header1.classList.add('animation');
});