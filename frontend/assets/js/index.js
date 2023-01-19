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

// scrollbar functionality
const rightControl = document.getElementsByClassName('fa-greater-than');
const leftControl = document.getElementsByClassName('fa-less-than');
const obj = document.getElementsByClassName('products-wrapper');

Array.from(rightControl).forEach((control) => {
    control.addEventListener('click', () => {
        if (control.classList.contains('arrivals')) {
            obj[1].scrollLeft += 150;
        } else {
            obj[0].scrollLeft += 150;
        }
        
     })
 })

 Array.from(leftControl).forEach((control) => {
    control.addEventListener('click', () => {
        if (control.classList.contains('arrivals')) {
            obj[1].scrollLeft -= 150;
        } else {
            obj[0].scrollLeft -= 150;
        }
        
     })
 })

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



