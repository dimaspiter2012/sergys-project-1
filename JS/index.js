let Ev = document.getElementById("review"); //реализую переход с поля для ввода отзыва на поле для ввода имени при нажатии клавиши enter
Ev.onkeypress = function(event){
	if (event.keyCode == 13) {
		let name = document.getElementById("name");
		name.focus();
		return false;
	};
};
let Ev2 = document.getElementById("name"); // реализую сохранение отзыва при нажатии клавиши enter 
Ev2.onkeypress = function(event){
	if (event.keyCode == 13) {
		let button = document.getElementById("feedback");
		button.click();
		return false;
	};
};
(function() {
	let field = document.querySelector("#review");
	let name = document.querySelector("#name");
	let button = document.querySelector("#feedback");
	let text = document.querySelector(".text");  
	let inputV = [localStorage.getItem("inputValue")]; // объявляю массив с текстами отзывов
	let names = [localStorage.getItem("nameValue")]; // объявляю массив с именами пользователей отзывов
	let timeV = [localStorage.getItem("timeValue")]; // объявляю массив с верменем и датами отзывов
	if (localStorage.getItem("div") !== null) { //выгрузка данных из LocalStorage
		let namesAr = names[0].split(','); 
		let inputAr = inputV[0].split(',');	
		let timeAr = timeV[0].split(',');	
		for (let i = 1; i < namesAr.length; i++) { // вывод всех отзывов  
			let div = document.createElement("div"); // объявляю переменную для создания div 
			div.classList.add("block"); // присваиваю класс
			let oldDiv = text.querySelector(".block"); //объявляю переменную для сортировки отзывов
			let p = document.createElement("p"); // объявляю переменную для создания p с текстом отзыва
			let p1 = document.createElement("p"); // объявляю переменную для создания p с именем пользователя
			let time = document.createElement("div"); // объявляю переменную для создания div с временем
			let inputA = inputAr[i].split('_3_9').join(','); 
			let namesA = namesAr[i].split('_3_9').join(',');
			p.classList.add("paragraph"); // добавляю класс к p с тектом отзыва
			p1.classList.add("name"); // добавляю класс к p с именем
			time.classList.add("time"); // добавляю класс к div с временем отзыва
			text.insertBefore(div, oldDiv).innerHTML; // добавляю последний отзыв 
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + namesA; // вывожу имя пользователя
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputA; // вывожу отзыв
			div.appendChild(time).innerHTML = timeAr[i]; //вывожу время
		};
	};
	let link = document.querySelector(".link"); // объявляю переменную link
	button.addEventListener("click", function() { //действие, которое будет исполняться при нажатии кнопки "Оставить отзыв"	
		let nameValue = name.value;
		let inputValue = field.value;
		if (nameValue != "" && inputValue != "") {
			link.setAttribute('name', 'link'); // реализую переход к комментариям при нажатии кнопки
			let div = document.createElement("div"); // объявляю переменную для создания div
			div.classList.add("block");  // присваиваю класс
			let oldDiv = text.querySelector(".block"); //объявляю переменную для сортировки отзывов
			let p = document.createElement("p"); // объявляю переменную для создания p с текстом отзыва
			let p1 = document.createElement("p"); // объявляю переменную для создания p с именем пользователя
			let time = document.createElement("div"); // объявляю переменную для создания div с временем
			p.classList.add("paragraph"); //присваиваю класс
			p1.classList.add("name"); //присваиваю класс
			time.classList.add("time"); //присваиваю класс
		//Time
			let d = new Date();
			let month = d.getMonth();
			let day = d.getDate();
			let hours = d.getHours();
			let mins = d.getMinutes();
			let year = d.getFullYear();
		//Time
			text.insertBefore(div, oldDiv).innerHTML; // добавляю последний отзыв 
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + nameValue; // вывожу имя пользователя
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputValue; //выводу отзыв пользователя
			div.appendChild(time).innerHTML = hours + ":" + mins + " " + day + "." + month + "." + year; // вывожу время создания отзыва
			field.value = ""; // обнуляю поле ввода отзыва
			field.placeholder = "Оставьте отзыв"; 
			name.value = ""; // обнуляю поле ввода имени
			name.placeholder = "Введите имя"; 
			let timeValue = hours + ":" + mins + " " + day + "." + month + "." + year;
			let nameV_ = nameValue.split(',').join('_3_9');
			names.push(nameV_);
			let inputV_ = inputValue.split(',').join('_3_9');
			inputV.push(inputV_);
			timeV.push(timeValue);	
			localStorage.setItem("div", ".block");  // сохранение отзыва в localstorage
			localStorage.setItem("nameValue", names); // сохранение отзыва в localstorage
			localStorage.setItem("inputValue", inputV); // сохранение отзыва в localstorage
			localStorage.setItem("timeValue", timeV); // сохранение отзыва в localstorage
			setTimeout(function(){ // убираю возможность перехода к комментариям по нажатию кнопки
				let link = document.querySelector(".link"); link.removeAttribute('name', 'link');
			}, 100);
		};
	});
})();
