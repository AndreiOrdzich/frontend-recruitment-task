let body = document.querySelector('.body'); // The entire body of the document
let popupBg = document.querySelector('.popup-bg'); // Popup window background
let popup = document.querySelector('.popup'); // The window itself
let openPopupButtons = document.querySelectorAll('.button'); // Buttons to show the window
let closePopupButton = document.querySelector('.close-popup'); // Button to hide the window
let counter = document.querySelector('.counter'); // Number of clicks per button
const buttonReset = document.querySelector('.button-reset') // Counter reset button
var lockPaddingValue = window.innerWidth - document.querySelector('.main').offsetWidth + 'px'; // Scroll width calculation
// If you want to add a counter function to a new block, you need to add the variable counter[n] equal to 0, copy the block if(e.target.classList.contains("button1"), replace "button1" with "button[n]" .
let counter1 = 0; // First block counter
let counter2 = 0; // Second block counter


/*start Popup*/
openPopupButtons.forEach((button) => { // Loop through all buttons
    button.addEventListener('click', (e) => { // For each we hang an event handler on click
        buttonReset.setAttribute('style', 'display: none; transform: translate(-100%, 0%)'); // Prevent button from appearing
        /* Start script for firs block*/
        if(e.target.classList.contains("button1")){ // If the click happened on the button of the first block
                counter1++;
                 counter.innerHTML = counter1;
                 if (counter1 >= 5) {
                    buttonReset.setAttribute('style', 'opacity: 1; transform: translate(20px, 185%)');
                    buttonReset.addEventListener('click', () => {
                        counter1 = 0;
                        counter2 = 0;
                        buttonReset.setAttribute('style', 'opacity: 0; transform: translate(-100%, 0%)'); // Hide button
                        localStorage.clear();
                    })
                }
        }
        /* End script for firs block*/
        /* Start script for second block*/
        if(e.target.classList.contains("button2")){ // If the click happened on the button of the first block
                counter2++;
                counter.innerHTML = counter2;
                if (counter2 >= 5) {
                    buttonReset.setAttribute('style', 'opacity: 1; transform: translate(20px, 185%)');
                    buttonReset.addEventListener('click', () => {
                        counter1 = 0;
                        counter2 = 0;
                        buttonReset.setAttribute('style', 'opacity: 0; transform: translate(-100%, 0%)'); // Hide button
                        localStorage.clear();
                    })
                }
        }
        /* End script for second block*/
        e.preventDefault(); // Preventing Default Browser Behavior
        body.style.paddingRight = lockPaddingValue;
        popupBg.classList.add('active'); // Add class 'active' for background
        popup.classList.add('active'); //And for the window itself
        document.body.style.overflowY = "hidden"; // Remove the ability to scroll the document
    })
});

closePopupButton.addEventListener('click', () => { // We hang the handler on the cross
    popupBg.classList.remove('active'); // Removing the active class from the background
    popup.classList.remove('active'); // And from the window
    setTimeout(function() {
        body.style.overflowY = "visible"; // Return the ability to scroll the document
        body.style.paddingRight = '0px'; // Return zero padding for body
        counter.innerHTML = '0';
    }, 500);
})

document.addEventListener('click', (e) => { //  Hang the handler on the entire document
    if (e.target === popupBg) { // If the click target is the background, then:
        popupBg.classList.remove('active'); // Removing the active class from the background
        popup.classList.remove('active'); // And from the window
      
        setTimeout(function() {
            body.style.overflowY = "visible"; // Return the ability to scroll the document
            body.style.paddingRight = '0px'; // Return zero padding for body
        }, 500);
    }
});

/*end Popup*/

//local storage
function setLocalStorage() {
    localStorage.setItem('counter1', counter1);
    localStorage.setItem('counter2', counter2);

}

function getLocalStorage() {
    if (localStorage.getItem('counter1')) {
   counter1 = localStorage.getItem('counter1')
    }
    if (localStorage.getItem('counter2')) {
        counter2 = localStorage.getItem('counter2')
    }
}

// Calling local storage functions
window.addEventListener('load', getLocalStorage);
window.addEventListener('beforeunload', setLocalStorage);
// localStorage.clear();