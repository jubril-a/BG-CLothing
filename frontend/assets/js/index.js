const nSwitch = document.getElementsByClassName('nav-switch')[0];
const navigation = document.getElementById('navigation');

/*// remember toggle on login page
rSwitch.addEventListener('click', () => {
    active = rSwitch.classList.contains("active");
    
    if (active) {
        rSwitch.classList.remove("active");
    } else {
        rSwitch.classList.add("active");
    }
})*/

// navigation toggle
nSwitch.addEventListener('click', () => {
    collapsed = nSwitch.classList.contains("fa-bars");

    if (collapsed) {
        nSwitch.classList.remove('fa-bars');
        nSwitch.classList.add('fa-times');

        navigation.classList.add('expanded');
    } else {
        nSwitch.classList.remove('fa-times');
        nSwitch.classList.add('fa-bars');

        navigation.classList.remove('expanded');
    }
})



