function DisplayTime(){
    let Date = new Date();
    let h = Date.getHours();
    let m = Date.getMinutes();
    let s = Date.getSeconds();
    let session = " ";

    if(h>=12){
        session.innerHTML = 'PM';
    }else{
        session.innerHTML = 'AM';
    }
    if(h>12){
        h = h-12;
    }

    h = (h<10) ? '0'+ h : h;
    m = (m<10) ? '0'+ m : m;
    s = (s<10) ? '0'+ s : s;

    var Time =  h + " : " + m + " : " + s +" "+ session;
    document.getElementById('clock').innerText = Time;
    document.getElementById('clock').textContent = Time;

    setTimeout( DisplayTime , 1000);
}
DisplayTime();