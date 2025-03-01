setDateById('current-date');

const activityBtn = document.getElementsByClassName('activity-btn');

for(const activity of activityBtn){
    activity.addEventListener('click', function(event){
        alert('Board updated Successfully');
        this.setAttribute('disabled', true);
        const task = event.target.parentNode.parentNode.childNodes[3].innerText;
        const d = new Date();
        const time = d.toLocaleTimeString();
        const taskRemainingValue = getConvertedValueById('task-remaining');
        const taskCompletedValue = getConvertedValueById('task-done');
        setInnerTextById('task-remaining', taskRemainingValue - 1);  
        setInnerTextById('task-done', taskCompletedValue + 1);
        const activityContainer = document.getElementById('activity-container');
        const div = document.createElement('div');
        div.classList.add('bg-[#F4F7FF]','p-2', 'rounded', 'drop-shadow-lg', 'mb-2');
        div.innerHTML = `
        <p class="text-left">You have completed the task ${task} at ${time}</p>
        `
        activityContainer.appendChild(div); 

        checkTaskCompleted('task-remaining');
    });
}

function checkTaskCompleted(id){
    if(parseInt(document.getElementById(id).innerText) === 0){
        alert('Congratulations!!! You have completed all the current tasks');
        return;
    }
}

function getConvertedValueById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

function setInnerTextById(id,value){
    document.getElementById(id).innerText = value;
}

function setDateById(id){
    const d = new Date();
    document.getElementById(id).innerText = d.toDateString().replace(" ", " , \n");
}

function changeBg(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const backgroundColor = `rgb(${red},${green},${blue})`;
    document.body.style.backgroundColor = backgroundColor;
}



