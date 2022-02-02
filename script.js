const html = document.documentElement
const body = document.body
const mainBox = document.querySelector('.mainBox');

html.style.cssText = 'height: 100vh;'
body.style.cssText = 'height: 100vh; margin: 0px;'
mainBox.style.cssText = 'display: flex; flex: 1 0 auto; height: 100%; aspect-ratio: 1/1; flex-wrap: wrap;'

function createChildContainer() {
    for (i = 0; i < 16; i++) {
        let childContainer = document.createElement('div')
        childContainer.classList.add(`childContainer`);
        childContainer.style.cssText = 'display: flex; flex: 1 1 100%;'
        for(j = 0; j < 16; j++) {
            let childBox = document.createElement('div');
            childBox.classList.add(`child`);
            childBox.style.cssText = 'flex: 1 0 6.25%; min-width: 1px; border: 0.5px solid black;'
            childContainer.append(childBox);
        }
        mainBox.append(childContainer);
    }
}
createChildContainer()
