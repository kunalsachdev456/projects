const logDiv = document.getElementById('log');
const stateDiv = document.getElementById('state');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');

startBtn.addEventListener('click',()=>{
        document.addEventListener('keydown',handleDown);
        document.addEventListener('keyup',handleUp);
        startBtn.disabled = true;
        stopBtn.disabled = false;
    }
);

stopBtn.addEventListener('click',()=>{
    document.removeEventListener('keydown',handleDown);
    document.removeEventListener('keyup',handleUp);
    logDiv.textContent = "";
    stateDiv.textContent = "";
    startBtn.disabled =false;
    stopBtn.disabled = true;
});

function handleDown(key){
    logDiv.textContent = `Key ${key.key} pressed down`;
    stateDiv.textContent = 'Key down';
}
function handleUp(key){
    logDiv.textContent = `Key ${key.key} pressed up`;
    stateDiv.textContent = 'Key up';
}