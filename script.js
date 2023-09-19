//your code here!
let ol = document.getElementById("infi-list");
let item = 1;
function load()
	{
		for(let i=1;i<=20;i++)
			{
				let li = document.createElement("li");
				li.innerText = `item ${item}`;
				item++;
				ol.appendChild(li);
			}
	}
ol.addEventListener("scroll", () => {
	if(ol.scrollTop + ol.clientHeight >= ol.scrollHeight)
	{
		load();
	}
})
load();