const hourHand = document.querySelector('.hour-hand');
const minsHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.second-hand');

function setDate() {
    const now = new Date();
    const second = now.getSeconds();   //当前时间的秒数
    const secondDeg = (second / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
    const mins = now.getMinutes();
    const minsDeg = (mins / 60) * 360 + 90;
    minsHand.style.transform = `rotate(${minsDeg}deg)`;
    const hour = now.getHours();
    const hourDeg = (hour / 12) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDeg}deg)`;

    if (secondDeg === 90) secondHand.style.transition = 'all 0s';
		else secondHand.style.transition = 'all 0.05s cubic-bezier(0.9, 0.54, 0.26, 1.68)';
		
		if (minsDeg === 90) minsHand.style.transition = 'all 0s';
		else minsHand.style.transition = 'all 0.1s cubic-bezier(0.9, 0.54, 0.26, 1.68)';
    
}

window.setInterval(setDate, 1000);
setDate();