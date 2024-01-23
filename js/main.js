const token = localStorage.getItem("token");
if (!token) {
	window.location.href = "../auth.html";
}

// const UrlPost = "https://todo-for-n92.cyclic.app/todos/add";

const inputEl = document.querySelector("#innnerIput");
const innerBtn = document.querySelector("#btns");
const innnerContent = document.querySelector("#innerContent");

.addEventListener("click", async (event) => {
	event.preventDefault();

	const inputPost = inputEl.value;
	const postEL = await fatch("https://todo-for-n92.cyclic.app/todos/add", {
		method: "POST",
		Headers: {
      "Content-Type": "application/json",
			"x-access-token": "token",
		},
		body: JSON.stringify({
			title: inputPost,
		}),
	})
		.then((result) => {
			return result.json();
		})
		.then((resultEl) => {
			console.log(resultEl);
		})
		.catch((err) => console.log(err));
});
