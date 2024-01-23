const SingUpEl = document.querySelector("#singUP");
const SingIpEl = document.querySelector("#SingIN");
const inputEmailEl = document.querySelector("#input__email");
const inputPasswordEl = document.querySelector("#input__password");

// const Api = "https://todo-for-n92.cyclic.app/user/register";

// //! qiymatlarni yuklab olamiz
// SingUpEl.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const email = e.target[0];
// 	const password = e.target[1];

// 	//! obyekt ochamiz malumoti osolashtrimz
// 	const data = {
// 		email: email.value,
// 		password: password.value,
// 	};

// 	//! obyekt qiymatlarni yuklab olamiz
// 	fetch(Api, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(data),
// 	})
// 		.then((response) => response.json())
// 		.then((res) => {
// 			const token = res.token;
// 			localStorage.setItem("token", token);
// 			window.location.href = "../index.html";
// 		})
// 		.catch((err) => console.log(err));
// });

//! sing up 2-chi urinish
SingUpEl.addEventListener("submit", async (e) => {
	e.preventDefault();
	const inputEmailEl = e.target[0];
	const inputPasswordEl = e.target[1];
	// console.log(inputValue, passwordValue);
	const resEl = await fetch("https://todo-for-n92.cyclic.app/user/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: inputEmailEl.value,
			password: inputPasswordEl.value,
		}),
	})
		.then((e) => {
			return e.json();
		})
		.then((response) => {
			let token = response.token;
			localStorage.setItem("token", token);
			window.location.href = "../index.html";
		});
});

//! login 2-chi urunish
SingIpEl.addEventListener("submit", async (e) => {
	e.preventDefault();
	const inputEmailEl = e.target[0];
	const inputPasswordEl = e.target[1];

	const logInRes = await fetch("https://todo-for-n92.cyclic.app/user/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: inputEmailEl.value,
			password: inputPasswordEl.value,
		}),
	})
		.then((ro) => {
			return ro.json();
		})
		.then((resArr) => {
			const token = resArr.token;
			localStorage.setItem("token", token);
			window.location.href = "../index.html";
		})
		.catch((err) => console.log(err));
});
// const API = "https://kind-ruby-clam.cyclic.app/api/v1/admin/login";
// //! login page started
// SingIpEl.addEventListener("submit", (e) => {
// 	e.preventDefault();
// 	const email = e.target[0];
// 	const password = e.target[1];

// 	const dataLogin = {
// 		email: email.value,
// 		password: password.value,
// 	};

// 	fetch(API, {
// 		method: "POST",
// 		headers: {
// 			"Content-Type": "application/json",
// 		},
// 		body: JSON.stringify(dataLogin),
// 	})
// 		.then((ress) => ress.json())
// 		.then((data) => {
// 			const token = data.token;
// 			localStorage.setItem("token", token);
// 			window.location.href = "../index.html";
// 		})
// 		.catch((err) => console.log(err));
// });
