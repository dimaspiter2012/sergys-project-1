let Ev = document.getElementById("review");
Ev.onkeypress = function(event){
	if (event.keyCode == 13) {
		let name = document.getElementById("name");
		name.focus();
		return false;
	};
};
let Ev2 = document.getElementById("name");
Ev2.onkeypress = function(event){
	if (event.keyCode == 13) {
		let button = document.getElementById("feedback");
		button.click();
		return false;
	};
};


(function() {
	let field = document.querySelector("#review");
	let name = document.querySelector("#name")
	let button = document.querySelector("#feedback");
	let text = document.querySelector(".text");
	let inputV = [localStorage.getItem("inputValue")];
	let names = [localStorage.getItem("nameValue")];
	let timeV = [localStorage.getItem("timeValue")];
	if (localStorage.getItem("div") !== null) {
		let namesAr = names[0].split(',');
		let inputAr = inputV[0].split(',');	
		let timeAr = timeV[0].split(',');	
		for (let i = 1; i < namesAr.length; i++) {
			let div = document.createElement("div");
			div.classList.add("block");
			let oldDiv = text.querySelector(".block");
			let p = document.createElement("p");
			let p1 = document.createElement("p");
			let time = document.createElement("div");
			p.classList.add("paragraph");
			p1.classList.add("name");
			time.classList.add("time");
			text.insertBefore(div, oldDiv).innerHTML;
			div.appendChild(p1).innerHTML = "<b>Имя: </b>" + namesAr[i];
			div.appendChild(p).innerHTML = "<b>Отзыв: </b>" + inputAr[i];
			div.appendChild(time).innerHTML = timeAr[i];
		};
	};

	button.addEventListener("click", function() {
		let nameValue = name.value;
		let inputValue = field.value;
		
		if (nameValue != "" && inputValue != "") {
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
			
			names.push(nameValue);
			inputV.push(inputValue);
			timeV.push(timeValue);	
			localStorage.setItem("div", ".block");
			localStorage.setItem("nameValue", names);
			localStorage.setItem("inputValue", inputV);
			localStorage.setItem("timeValue", timeV);
		};
	});
})();
