const mainBox = document.querySelector('.mainBox');
const gridBox = document.querySelector('.gridBox');
const legend = document.querySelector('.legend');
const gridCounter = document.querySelector('.gridCounter');

window.addEventListener('resize', windowResize);

function windowResize() {
    let windowHeight = window.innerHeight
    let legendHeight = legend.offsetHeight;
    mainBox.style.cssText = `max-height: ${windowHeight}px;`
    gridBox.style.cssText = `max-height: ${windowHeight - legendHeight}px;`
}
windowResize()

function createChildContainer(numBoxes = 16) {
    let gridCounterText = document.createTextNode(`Grid Size: ${numBoxes}`);
    gridCounter.append(gridCounterText);  

    for (i = 0; i < numBoxes; i++) {
        let childContainer = document.createElement('div')
        childContainer.classList.add(`childContainer`);
        childContainer.style.cssText = `display: flex; flex: 1 1 100%;`
        function number(numBoxes) {
            for(j = 0; j < numBoxes; j++) {
                let childBox = document.createElement('div');
                childBox.classList.add(`child`);
                childBox.style.cssText = `flex: 1 0 ${Math.floor(100 / numBoxes)}%; min-width: 1px; border: 1px solid black;`
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
    let numBox = document.querySelectorAll('.child').length;
    numBox = Math.sqrt(numBox);
    childDiv.forEach((childBox) => {
        childBox.addEventListener('mouseenter', () => {
            if (!childBox.classList.contains('colored')) {
                let randomHue = Math.floor(Math.random() * 360 + 1);
                let randomColor = 'hsl(' + randomHue + ', 100%, 50%)';
                childBox.style.cssText = `background-color: ${randomColor}; flex: 1 0 ${Math.floor(100 / numBox)}%; min-width: 1px; border: 1px solid black;`
                childBox.classList.add('colored');
                childBox.setAttribute(`data-hue`, `${randomHue}`);
                childBox.setAttribute(`data-lightness`, 50);
            }
            else {
                let color = childBox.dataset.hue;
                let lightness = childBox.dataset.lightness;
                if (lightness == 0) {
                    return;
                }
                else {
                    let darker = lightness - 5;
                    let newColor = `hsl(` + color + `, 100%, ` + darker + `%)`;
                    childBox.setAttribute(`data-lightness`, darker);
                    childBox.style.cssText = `background-color: ${newColor}; flex: 1 0 ${Math.floor(100 / numBox)}%; min-width: 1px; border: 1px solid black;`
                }
            }
        })
    })

}
addBackgroundListener()

const button = document.querySelector('button');
button.addEventListener('click', () => reset());


function reset() {
    

    let numBoxes = prompt('How many boxes per side would you like? \nDefault: 16, Max: 100');
    numBoxes = Number(numBoxes);
    if (numBoxes != numBoxes) {
        alert('Enter a number');
        return
    }
    else {
        const gridBox = document.querySelector('.gridBox');
            while (gridBox.lastElementChild) {
                gridBox.removeChild(gridBox.lastElementChild);
            }
        gridCounter.removeChild(gridCounter.firstChild);
        numBoxes = Math.floor(numBoxes);
        if (numBoxes < 16) {
            numBoxes = 16;
            createChildContainer(numBoxes)
        }
        else if (numBoxes > 100) {
            numBoxes = 100;
            createChildContainer(numBoxes)
        }
        else createChildContainer(numBoxes)
    }

    addBackgroundListener()
}
