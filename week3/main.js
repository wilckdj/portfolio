//For the ch7exercises.html -----------------


/*function doSomething(event) {
    console.log(`screen: (${event.screenX},${event.screenY}), page: (${event.pageX},${event.pageY}), client: (${event.screenX},${event.screenY})`)
}*/

//event.type: reporting the type of event that happened
//event.target: reporting the item that triggered the event
/* screenX/screenY shows pixes from left and top of screen
clientX/clientY shows pixels from top left of client
pageX/pageY shows pixes from where the even took place in the document. 
*/

//addEventListener('click', doSomething);


//---------

//mousedown is the downpress before the click, mouseup is the release before the click. 

const clickParagraph = document.getElementById('click');
clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));

//dblclick is only triggered by a double click, not a single click
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}
//Double click will always cause the click event to fire, so don't use both. 

//Mouseover is activated by hovering, looks like it is similar to css hover. 
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
//mouseover triggers whenever the mouse is moved, not just on or off of an element. 
mouseParagraph.addEventListener('mousemove', () => console.log('You Moved!'));


//keyboard triggers use the key-terms, keydown, keypress, keyup
//addEventListener('keydown', highlight);
//addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));
//   addEventListener('keypress', (event) => console.log(`You pressed the ${event.key} character`));
//addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));
//the arrow keys don't appear to trigger the keypress, same with shift, ctrl, alt. 

//event objects also contain inforamtion about whether a modifier key was held down when the key event occurred. 
addEventListener('keydown', (event) => {
    if (event.key === 'c' && event.ctrlKey) {
        console.log('Action canceled!');
    }
});

addEventListener('click', (event) => {
    if (event.shiftKey) {
        console.log('A Shifty Click!');
    }
});

//There are also touch events, for touchscreen interactions. use touchstart and touchend
addEventListener('touchend', () => console.log('Touch stopped'));
//touch events are: touchstart, touchend, touchmouve, touchenter, touchleave, touchcancel.
//Swiping is not part of the events, they are created by using touchstart, touchmove, and touchleave events.

//it is difficult for me to practice with touch events because I don't have a touchscreen on my laptop. 

//you can remove event listeners, in case something should only be done once, or should be locked. 
const onceParagraph = document.getElementById('once');
onceParagraph.addEventListener('click', remove);
function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'pink';
    onceParagraph.removeEventListener('click',remove);
}

//you can use event listeners to stop default behavior, but this should be done with caution. 
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click',(event) => {
    event.preventDefault();
    console.log('Broken Link!');
});
//each event object has a property called cancellable that returns false if it cannot be prevented. 

//if you click on an Element, you click on all the elements its nested inside of. 
//bubbling is when the event fires on the element clicked on first.
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');
/*ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul') );
liElement.addEventListener('click', (event) =>
console.log('Clicked on li') );*/

//capturing starts at the root and propagates downwards. 
/*ulElement.addEventListener('click', (event) =>
console.log('Clicked on ul'),true);
liElement.addEventListener('click', (event) =>
console.log('Clicked on li'),true);*/

//stopping the bubbling with .stopPropagation(), WARNING: This could stop other event listeners accidentally. 
/*liElement.addEventListener('click', (event) => {
    console.log('clicked on li');
    event.stopPropagation(); }, false);*/
//events can be delegated to children elements
ulElement.addEventListener('click',highlight);
