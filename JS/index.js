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
			let time = document.createElement("div"); // объявляю переменную для создания div с времене
			let inputA = inputAr[i].split('_3_9').join(',');
			let namesA = namesAr[i].split('_3_9').join(',');
			p.classList.add("paragraph");
			p1.classList.add("name");
			time.classList.add("time");
			text.insertBefore(div, oldDiv).innerHTML;
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + namesA;
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputA;
			div.appendChild(time).innerHTML = timeAr[i];
		};
	};
	let link = document.querySelector(".link");
	
	button.addEventListener("click", function() { //действие, которое будет исполняться при нажатии кнопки "Оставить отзыв"
		
		let nameValue = name.value;
		let inputValue = field.value;
		
		if (nameValue != "" && inputValue != "") {
			link.setAttribute('name', 'link');
			let div = document.createElement("div");
			div.classList.add("block");
			let oldDiv = text.querySelector(".block");
			let p = document.createElement("p");
			let p1 = document.createElement("p");
			let time = document.createElement("div");
			p.classList.add("paragraph");
			p1.classList.add("name");
			time.classList.add("time");
		//Time
			let d = new Date();
			let month = d.getMonth();
			let day = d.getDate();
			let hours = d.getHours();
			let mins = d.getMinutes();
			let year = d.getFullYear();
		//Time
			text.insertBefore(div, oldDiv).innerHTML;
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + nameValue;
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputValue;
			div.appendChild(time).innerHTML = hours + ":" + mins + " " + day + "." + month + "." + year;
			field.value = "";
			field.placeholder = "Оставьте отзыв";
			name.value = "";
			name.placeholder = "Введите имя";
			let timeValue = hours + ":" + mins + " " + day + "." + month + "." + year;
			let nameV_ = nameValue.split(',').join('_3_9');
			names.push(nameV_);
			let inputV_ = inputValue.split(',').join('_3_9');
			inputV.push(inputV_);
			timeV.push(timeValue);	
			localStorage.setItem("div", ".block");
			localStorage.setItem("nameValue", names);
			localStorage.setItem("inputValue", inputV);
			localStorage.setItem("timeValue", timeV);
			setTimeout(function(){let link = document.querySelector(".link"); link.removeAttribute('name', 'link')}, 100);
		};
	});
})();


//Остаток места в LocalStorage
let localStorageSpace = function(){
	var allStrings = '';
	for(var key in window.localStorage){
		if(window.localStorage.hasOwnProperty(key)){
			allStrings += window.localStorage[key];
		}
	}
	return allStrings ? 3 + ((allStrings.length*16)/(8*1024)) + ' KB' : 'Empty (0 KB)';
};
console.log(localStorageSpace());
