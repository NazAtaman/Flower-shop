// Custom scripts
'use strict'

/* const { post } = require("jquery");
 */
// для Цветом main
$('.flower-big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  asNavFor: '.flower-small'
});
$('.flower-small').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.flower-big',
  dots: false,
  focusOnSelect: true
});


// ТАБС



// Для "Рекомендуемых товаров"
$('.recomend-img').slick({
  dots:true,   
  autoplay: true,
  infinite: true,
  speed: 3000,
  fade: true,
  prevArrow: false, // отключение стрелки "назад"
    nextArrow: false, // отключение стрелки "вперед"
});

$('.latest-img').slick({
  dots:true,   
  autoplay: true,
  infinite: true,
  speed: 3000,
  fade: true,
  prevArrow: false, // отключение стрелки "назад"
    nextArrow: false, // отключение стрелки "вперед"
});

// Отзывы 
$('.reviews-slider').slick({
  autoplay: true,
  infinite: true,
  speed: 3000,
    prevArrow: '<img class="slick-prev" src="../img/l-arrow.svg">',
    nextArrow: '<img class="slick-next" src="../img/r-arrow.svg">'
});





// Находим элементы на странице
var inputNumber = document.querySelector('.input-number');
var btnPlus = document.querySelector('.btn-plus');
var btnMinus = document.querySelector('.btn-minus');
var activeButton = document.querySelector('.toggleButton.active');
var priceBlock = document.querySelector('.order-price__money.active');
inputNumber.value = 5;

// Задаем цены для каждой длины цветов
var prices = {
  'text1': {
    'new': 13499,
    'old': 15499,
    'increment': 100
  },
  'text2': {
    'new': 1313,
    'old': 1515,
    'increment': 200
  },
  'text3': {
    'new': 14014,
    'old': 16499,
    'increment': 300
  }
};

// Обновляем цену в зависимости от длины цветов и количества
function updatePrice() {
  var price = prices[activeButton.getAttribute('data-target')];
  var quantity = parseInt(inputNumber.value);
  var newPrice = price['new'] + price['increment'] * quantity;
  var oldPrice = price['old'] + price['increment'] * quantity;
  priceBlock.querySelector('.order-price__money-new').textContent = newPrice.toLocaleString() + ' ₴';
  priceBlock.querySelector('.order-price__money-old').textContent = oldPrice.toLocaleString() + ' ₴';
}

// Обработчик нажатия на кнопку "+"
btnPlus.addEventListener('click', function(e) {
  e.preventDefault();
  var currentValue = parseInt(inputNumber.value);
  inputNumber.value = currentValue + 1;
  updatePrice();
});

// Обработчик нажатия на кнопку "-"
btnMinus.addEventListener('click', function(e) {
  e.preventDefault();
  var currentValue = parseInt(inputNumber.value);
  if (currentValue > 0) {
    inputNumber.value = currentValue - 1;
    updatePrice();
  }
});

// Обработчик выбора длины цветов
var buttonsContainer = document.getElementById('order-block');
buttonsContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('toggleButton')) {
    var targetId = event.target.getAttribute('data-target');
    var targetBlock = document.getElementById(targetId);
    activeButton.classList.remove('active');
    event.target.classList.add('active');
    activeButton = event.target;
    priceBlock.classList.remove('active');
    targetBlock.classList.add('active');
    priceBlock = targetBlock;
    updatePrice();
  }
});

// Обработчик изменения количества в инпуте
inputNumber.addEventListener('change', function() {
  updatePrice();
});














const postsJson = [
  '{"PostId" : 1355, "coment" : 5}',
  '{"PostId" : 1355, "coment" : 5}',
  '{"PostId" : 1355, "coment" : 5}',
  '{"PostId" : 1355, "coment" : 5}',
]

const postJs = postsJson.map((post) => JSON.parse(post))

console.log(postJs)











/* const myCity = ["London", "Kiev", "Lviv"]

  const cytiInfo = (city, index) => 
  `${city} is the capital of index ${index} of world`

  
myCity.forEach((city, index) => {
    console.log(cytiInfo(city, index))
});
 */


















/* function isArrayEmpty(arr) {
 return arr.lenght > 0 ? 'massive not emptu' : "massive is empty"

} */

/* 
let isArrayEmpty = (arr) => {
  return arr.lenght > 0 ? "Massive is not empty" : "Massive is empty"
}
let ar = isArrayEmpty([]);
let br = isArrayEmpty([1,2,3]);

console.log(br)

console.log(ar)

 */








console.log("well done")