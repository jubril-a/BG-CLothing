const rSwitch = document.getElementsByClassName('switch')[0];

rSwitch.addEventListener('click', () => {
    active = rSwitch.classList.contains("active");
    
    if (active) {
        rSwitch.classList.remove("active");
    } else {
        rSwitch.classList.add("active");
    }
})

