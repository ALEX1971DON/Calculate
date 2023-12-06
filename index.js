/*
cохранить ссылку на наш элемент display dom
*/
let display = document.getElementById('display');

/*
Выбираем все кнопки по классу
getElementsByClassName('button')
document.getElementsByClassName('button') возвращает коллекцию а не массив. Преобразуем ее с помощью Array.from()
*/
let buttonCalc = Array.from(document.getElementsByClassName('button'));

let arr = [];
let cleaner = [];
let str = "";
let str_2 = "";
let str_3 = "";

/*
AddEventListener () - принимает событие для прослушивания и второй аргумент, вызываемый всякий раз, когда запускается описанное событие. Любое количество обработчиков событий может быть добавлено к одному элементу без перезаписи существующих обработчиков событий.

метод map() вызывает функцию для каждого элемента массива и возвращает массив результатов выполнения этой функции.
*/
buttonCalc.map(button => {
	button.addEventListener('click', (e) => {



		//e.target - эл-т по которому кликнули
		//target - это свойство объекта события (event), которое указывает на элемент, на котором произошло событие это может быть любой элемент на веб-странице, например, кнопка, ссылка, форма и т.д.
		//innerText текстовое содержимое эл-та
		switch (e.target.innerText) {//метка нажатой кнопки
			case 'C':
				display.innerText = '';
				//arr[0] = '';
				//console.log(arr.length);
				//console.log("C");
				break;

			case 'CE':
				if (display.innerText) {
					display.innerText = display.innerText.slice(0, -1);
					//slice создаст новый массив без последнего
				}
				break;

			case 'MS':
				if (display.innerText) {
					display.innerText = display.innerText.slice(0);
					arr = display.innerText.slice();
					//console.log(arr.length + 'MS');
				}
				break;

			case 'MR':
				//Из памяти при пустом экране
				if (!display.innerText) {
					console.log(arr.length + "MR");
					display.innerText = arr.slice();

					//console.log(display.innerText + "MR");
				}
				break;

			case 'MC':
				if (display.innerText) {
					//console.log(cleaner.length + "MC")
					display.innerText = cleaner.slice();
					arr = cleaner.slice();
				}
				break;

			case '=':
				try {

					display.innerText = eval(display.innerText);
					// eval() принимает на вход js код и выполняет его !!! АХТУНГ !!!
					//console.log(display.innerText + "  " + "D.I")

				} catch {
					display.innerText = "Error"
				}
				break;

			default:

				display.innerText += e.target.innerText;

				str = display.innerText.slice(0, 1);
				//console.log(str + "str");
				str_2 = display.innerText.slice(1, 2);
				//console.log(str_2 + "str_2");
				str_3 = display.innerText.slice(0, 2);
				//console.log(str.length + "str_3.length");

				if (str == "0" && str_2 != "." && str_3.length == 2) {
					display.innerText = "";
				}


		}
		console.log(display.innerText + "END");
		//console.log(arr.length + "END");
	});
});
/* 
let lengths = ["Бильбо", "Гэндальф", "Назгул"].map(item => item.length);
alert(lengths); // 6,8,6

let result = arr.map(function(item, index, array) {
  // возвращается новое значение вместо элемента
});
*/