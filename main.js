let alarm = document.getElementById('btn');
let tone = new Audio('alaramtone.wav');
alarm.addEventListener('click',function(){

    let val = document.getElementById('tst1');
    alarmValue = tst1.value;
    //console.log(alarmValue);
    let time = new Date(alarmValue);
    //console.log(time); 
    let currentDate = new Date();
    let diff = time - currentDate;
        if(diff>=0){
            //setTimeout function is used to execute the function after waiting for a specified amount of time.so i kept rinf alaram in that function
            setTimeout(()=>{
                tone.play();
            },diff);
            //here we are saying to print matched statement after diff seconds
        }
});