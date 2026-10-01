let $input = document.querySelector("input");
let $btn = document.querySelector("button");
let $meme = document.querySelector("#meme");

async function $getdata($index) {
	try {
		let $result = await fetch("https://api.imgflip.com/get_memes");
		let $data = await $result.json();
		let $memes = $data.data.memes;
		$meme.innerHTML = `
				<p class="text-warning">${$memes[$index].name}</p>
				<img class="w-100" src="${$memes[$index].url}" alt="${$memes[$index].name}"/>
		`;
	} catch (er) {
		$meme.innerHTML = `<p class=" fs-1 text-center text-danger" >${er.message}</p>`;
	}
}

function $showMeme() {
	+$input.value > -1 && +$input.value < 100 && $input.value != ""
		? $getdata($input.value)
		: ($meme.innerHTML = `<P class="text-danger">Please Enter Valid Number</P>`);
	$input.value = "";
}

$btn.addEventListener("click", () => $showMeme());
$input.addEventListener("keydown", (e) => e.key == "Enter" && $showMeme());
