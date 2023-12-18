let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySource = myImage.getAttribute("src");
    if (mySource === 'images/ul_panorama.jpg') {
        myImage.setAttribute('src', "images/ul_petrograd_1916.jpg");
    } else {
        myImage.setAttribute('src', 'images/ul_panorama.jpg');
    }
};

let myButton = document.querySelector('button');
let myHeader = document.querySelector('h1');

function SetUserName() {
    let myName = prompt('Введите пожалуйста своё имя');
    localStorage.setItem('name', myName);
    myHeader.textContent = 'Ульянка приветствует тебя, ' + myName;
}

if (!localStorage.getItem('name')) {
    SetUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeader.textContent = 'Ульянка приветствует тебя, ' + storedName;
}

myButton.onclick = function () {
    SetUserName();
}

