
(function() {

	let field = document.querySelector("#review");
	let name = document.querySelector("#name")
	let button = document.querySelector("#feedback");
	let text = document.querySelector(".text");


	if (localStorage.getItem("div") !== null) {
		let nameValue = localStorage.getItem("nameValue");
		let inputValue = localStorage.getItem("inputValue");
		let div = document.createElement("div");
		div.classList.add("block");

		let block = document.querySelector(".block");
		let p = document.createElement("p");
		let p1 = document.createElement("p");
		let time = document.createElement("div");
		p.classList.add("paragraph");
		p1.classList.add("name");
		time.classList.add("time");

		//Время
		let month = localStorage.getItem("month");
		let day = localStorage.getItem("day");
		let hours = localStorage.getItem("hours");
		let mins = localStorage.getItem("mins");
		let year = localStorage.getItem("year");

		text.appendChild(div).innerHTML;
		div.appendChild(p1).innerHTML = "<b>Имя: </b>" + nameValue;
		div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputValue;
		div.appendChild(time).innerHTML = hours + ":" + mins + " " + day + "." + month + "." + year;
	};



	button.addEventListener("click", function() {
		let nameValue = name.value;
		let inputValue = field.value;


		if (nameValue != "" && inputValue != "") {
			let div = document.createElement("div");
			div.classList.add("block");

			let block = document.querySelector(".block");
			let p = document.createElement("p");
			let p1 = document.createElement("p");
			let time = document.createElement("div");
			p.classList.add("paragraph");
			p1.classList.add("name");
			time.classList.add("time");

			//Время
			let d = new Date();
			let month = d.getMonth();
			let day = d.getDate();
			let hours = d.getHours();
			let mins = d.getMinutes();
			let year = d.getFullYear();


			text.appendChild(div).innerHTML;
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + nameValue;
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputValue;
			div.appendChild(time).innerHTML = hours + ":" + mins + " " + day + "." + month + "." + year;
			field.value = "";
			field.placeholder = "Оставьте отзыв";

			name.value = "";
			name.placeholder = "Введите имя";



			localStorage.setItem("div", ".block");
			localStorage.setItem("nameValue", nameValue);
			localStorage.setItem("inputValue", inputValue);
			localStorage.setItem("month", month);
			localStorage.setItem("day", day);
			localStorage.setItem("hours", hours);
			localStorage.setItem("mins", mins);
			localStorage.setItem("year", year);
		};
	});
})();
