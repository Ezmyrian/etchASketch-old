const mainBox = document.querySelector('.mainBox');
const gridBox = document.querySelector('.gridBox');
const legend = document.querySelector('.legend');

window.addEventListener('resize', windowResize);

function windowResize() {
    let windowHeight = window.innerHeight
    let legendHeight = legend.offsetHeight + 5;  //5 to account for margin on bottom of legend.
    mainBox.style.cssText = `max-height: ${windowHeight}px;`
    gridBox.style.cssText = `max-height: ${windowHeight - legendHeight}px;`
}
windowResize()

function createChildContainer(numBoxes = 16) {
    for (i = 0; i < numBoxes; i++) {
        let childContainer = document.createElement('div')
        childContainer.classList.add(`childContainer`);
        childContainer.style.cssText = `display: flex; flex: 1 1 100%;`
        function number(numBoxes) {
            for(j = 0; j < numBoxes; j++) {
                let childBox = document.createElement('div');
                childBox.classList.add(`child`);
                childBox.style.cssText = `flex: 1 0 ${Math.floor(100 / numBoxes)}%; min-width: 1px; border: 0.5px solid black;`
                childContainer.append(childBox);
            }
        }
        number(numBoxes)
        gridBox.append(childContainer);
    }
}
createChildContainer()

function addBackgroundListener() {
    let childDiv = document.querySelectorAll('.child');
    let numBox = document.querySelectorAll('.child').length
    numBox = Math.sqrt(numBox);
    childDiv.forEach((childBox) => {
        childBox.addEventListener('mouseenter', () => {
            childBox.style.cssText = `background-color: black; flex: 1 0 ${Math.floor(100 / numBox)}%; min-width: 1px; border: 0.5px solid black;`
        })
    })
}
addBackgroundListener()

const button = document.querySelector('button');
button.addEventListener('click', () => reset());


function reset() {
    const gridBox = document.querySelector('.gridBox');
    while (gridBox.lastElementChild) {
        gridBox.removeChild(gridBox.lastElementChild);
    }
    let numBoxes = prompt('How many boxes per side would you like?', 'default: 16, max: 100');
    createChildContainer(numBoxes)
    addBackgroundListener()
}






/*
if (childBox.classList.contains(colored)) {
            let shade = this.getAttribute('filter');
            shade = shade.substr(12, 3);
            shade = Number(shade);
            shade -= 10;
            shade = shade + '%';
            this.setAttribute('filter', shade);
        }
        else {
            this.classList.add('colored');
            this.style.cssText = `background-color: ${'#' + Math.floor(math.random()*16777215).toString(16).padStart(6, 0)}; filter: brightness(100%);`
        }
*/
/*
('mouseover', function() {
    if (classList.contains(colored)) {
        let shade = this.getAttribute('filter');
        shade = shade.substr(12, 3);
        shade = Number(shade);
        shade -= 10;
        shade = shade + '%';
        this.setAttribute('filter', shade);
    }
    else {
        this.classList.add('colored');
        this.style.cssText = `background-color: ${'#' + Math.floor(math.random()*16777215).toString(16).padStart(6, 0)}; filter: brightness(100%);`
    }
})
*/


/*
let childBox = document.createElement('div');
                let jString = toString(j);
                console.log(jString);
                let iString = `${i}`
                console.log(iString);
                let iJString = iString + jString;
                console.log(iJString);
                childBox.classList.add(`child${iString + jString.padStart(2, 0)}`);
*/