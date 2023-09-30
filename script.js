const hour = document.getElementById('hour');
const minute = document.getElementById('minute');
const second = document.getElementById('second');
const start = document.getElementById('start');
const text = document.getElementById('text');
var total = 0

totalValue = () => {
    total = Number(hour.value) * 3600 + Number(minute.value) * 60 + Number(second.value);
}

Timer = () => {
    totalValue();
    total--;
    if (total >= 0) {
        var hr = Math.floor(total / 3600);
        var mt = Math.floor((total / 60) - (hr * 60));
        var sc = total - ((hr * 3600) + (mt * 60));
        hour.value = hr;
        minute.value = mt;
        second.value = sc;

    }
  
    else {
        text.innertext = "time left";
    }
    console.log(total);
    return; 
}




start.addEventListener('click', () => {
   setInterval = setInterval(Timer, 1000);
})