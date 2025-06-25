
function updateTime() {
    const timer = document.getElementById('root');
    const now = new Date();
    const indiantime = now.toLocaleTimeString();
    timer.innerHTML = indiantime;


   timer.style.fontSize ='50px';
   timer.style.display='flex';
   timer.style.height ='100vh';
   timer.style.justifyContent='center';
   timer.style.alignItems='center';

}

setInterval(updateTime,1000);



