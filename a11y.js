const accessibilityBtn = document.createElement('button');
accessibilityBtn.id = 'accessibility-btn';
accessibilityBtn.textContent = ''; // Set text content to empty string
accessibilityBtn.style.position = 'fixed';
accessibilityBtn.style.bottom = '70px';
accessibilityBtn.style.left = '20px';
accessibilityBtn.style.backgroundColor = '#007bff';
accessibilityBtn.style.color = '#ffffff';
accessibilityBtn.style.padding = '10px 15px';
accessibilityBtn.style.borderRadius = '5px';
accessibilityBtn.style.cursor = 'pointer';
accessibilityBtn.style.zIndex = '1000';

const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.innerHTML = '<path d="M50 .8c5.7 0 10.4 4.7 10.4 10.4S55.7 21.6 50 21.6s-10.4-4.7-10.4-10.4S44.3.8 50 .8zM92.2 32l-21.9 2.3c-2.6.3-4.6 2.5-4.6 5.2V94c0 2.9-2.3 5.2-5.2 5.2H60c-2.7 0-4.9-2.1-5.2-4.7l-2.2-24.7c-.1-1.5-1.4-2.5-2.8-2.4-1.3 .1-2.2 1.1-2.4 2.4l-2.2 24.7c-.2 2.7-2.5 4.7-5.2 4.7h-.5c-2.9 0-5.2-2.3-5.2-5.2V39.4c0-2.7-2-4.9-4.6-5.2L7.8 32c-2.6-.3-4.6-2.5-4.6-5.2v-.5c0-2.6 2.1-4.7 4.7-4.7h .5c19.3 1.8 33.2 2.8 41.7 2.8s22.4-.9 41.7-2.8c2.6-.2 4.9 1.6 5.2 4.3v1c-.1 2.6-2 .8 -3 .8z"></path>';
svg.setAttribute('viewBox', '0 0 100 100');
svg.setAttribute('fill', 'currentColor');
svg.setAttribute('width', '1.5em');
svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
svg.querySelector('path').setAttribute('title', 'Accessibility Tools');

accessibilityBtn.appendChild(svg);

document.body.appendChild(accessibilityBtn);


const accessibilityMenu = document.createElement('div');
accessibilityMenu.id = 'accessibility-menu';
accessibilityMenu.style.position = 'absolute';
accessibilityMenu.style.top = `${accessibilityBtn.offsetTop + accessibilityBtn.offsetHeight}px`;
accessibilityMenu.style.left = accessibilityBtn.style.left;
accessibilityMenu.style.backgroundColor = '#fff';
accessibilityMenu.style.border = '1px solid #ccc';
accessibilityMenu.style.borderRadius = '5px';
accessibilityMenu.classList.add('hidden');
accessibilityMenu.style.padding = '10px';

const accessibilityOptions = ['Make Font Larger', 'Make Font Smaller', 'Set Grayscale', 'Set Negative Colors', 'Change Font to OpenDyslexic', 'Reset', "Add this button to your homepage"];
accessibilityOptions.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.style.display = 'block'; // Display each button on a new line
    button.style.marginBottom = '5px'; // Add spacing between buttons
    button.style.color = '#000';
    button.style.backgroundColor = 'transparent';
    button.style.border = 'none';
    button.style.textAlign = 'left';
    button.style.width = '100%';
    button.style.padding = '10px';
    button.style.cursor = 'pointer';
    accessibilityMenu.appendChild(button);
});

document.body.appendChild(accessibilityMenu);


accessibilityBtn.onclick = function() {
    accessibilityMenu.classList.toggle('hidden');
};


document.querySelectorAll('#accessibility-menu button').forEach((button, index) => {
    button.onclick = function() {
        switch (index) {
            case 0:
                document.body.style.fontSize = '2em';
                break;
            case 1:
                document.body.style.fontSize = '0.8em';
                break;
            case 2:
                document.body.style.filter = 'grayscale(100%)';
                break;
            case 3:
                document.body.style.filter = 'invert(100%)';
                break;
            case 4:
                document.body.classList.add('opendyslexic');
                break;
            case 5:
                document.body.style.fontSize = '1.2em';
                document.body.style.filter = 'grayscale(0%)';
                document.body.style.filter = 'invert(0%)';
                document.body.classList.remove('opendyslexic');
                break;
            case 6:
                window.open("https://github.com/td00/a11y");
        }
    };
});
