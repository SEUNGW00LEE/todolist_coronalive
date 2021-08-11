const clock = document.querySelector("h2#clock");
const todayDate = document.querySelector("#date")

function getClock() {
	const date = new Date();
	const hours = String(date.getHours()).padStart(2,"0");
	const minutes =String(date.getMinutes()).padStart(2,"0");
	const seconds = String(date.getSeconds()).padStart(2,"0");
	const year = date.getFullYear(); // 년도
	const month = date.getMonth() + 1;  // 월
	const dateday = date.getDate();  // 날짜
    const week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');
    const day = date.getDay();
    const todayLabel = week[day];
	clock.innerText = `${hours}:${minutes}:${seconds}`;
	todayDate.innerText = `${year}년 ${month}월 ${dateday}일 ${todayLabel}`
}

getClock();
setInterval(getClock, 1000);
