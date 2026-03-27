let timer = document.getElementById("timer");
let time = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start()
{
    if(!isRunning)
    {
        startTime = Date.now() - elapsedTime ;
        time = setInterval(update,10);
        isRunning = true;
    }


}

function stop()
{
    if(isRunning)
    {
        clearInterval(time);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }


}

function reset()
{
    timer.textContent = '00:00:00:00'
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    clearInterval(time);
}

function update()
{
    const currtime = Date.now();
    elapsedTime = currtime - startTime;

    let hours = Math.floor(elapsedTime / (1000 * 60 * 60 ));
    let minutes = Math.floor(elapsedTime / (1000 * 60 ) % 60);
    let seconds = Math.floor(elapsedTime / 1000   % 60);
    let miliseconds = Math.floor(elapsedTime  % 1000 / 10 );

    hours = hours.toString().padStart(2 , "0 ");
    minutes = minutes.toString().padStart(2 , "0 ");
    seconds = seconds.toString().padStart(2 , "0 ");
    miliseconds = miliseconds.toString().padStart(2 , "0 ");


    timer.textContent = `${hours}:${minutes}:${seconds}:${miliseconds}`

}