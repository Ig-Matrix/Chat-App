const messageOneCont = document.querySelector(".messageOneCont");
const messageTwoCont = document.querySelector(".messageTwoCont");

const username1 = document.querySelector("#userA");
const messageOne = document.querySelector("#messageOne");
const username2 = document.querySelector("#userB");
const messageTwo = document.querySelector("#messageTwo");

const btn1 = document.querySelector(".btn-1");
const btn2 = document.querySelector(".btn-2");

btn1.addEventListener("click", (e) => {
    e.preventDefault();
    if (username1.value && messageOne.value) {
        updateLocalStorage1(username1.value, messageOne.value);
    }
    username1.value = "";
    messageOne.value = "";
});

btn2.addEventListener("click", (e) => {
    e.preventDefault();
    if (username2.value && messageTwo.value) {
        updateLocalStorage2(username2.value, messageTwo.value);
    }
    username2.value = "";
    messageTwo.value = "";
});

function loadFromLocalStorage1() {
    const savedItemsOne = JSON.parse(localStorage.getItem("key1")) || [];
    savedItemsOne.forEach((item) => {
        displayChatOne(item.usernameA, item.messageA);
    });
}

loadFromLocalStorage1();

function loadFromLocalStorage2() {
    const savedItemsTwo = JSON.parse(localStorage.getItem("key2")) || [];
    savedItemsTwo.forEach((item) => {
        displayChatTwo(item.usernameB, item.messageB);
    });
}

loadFromLocalStorage2();

function updateLocalStorage1(usernameA, messageA) {
    const itemsToSave = JSON.parse(localStorage.getItem("key1")) || [];
    itemsToSave.push({ usernameA, messageA });
    localStorage.setItem("key1", JSON.stringify(itemsToSave));
    displayChatOne(usernameA, messageA);
}

function updateLocalStorage2(usernameB, messageB) {
    const itemsToSave = JSON.parse(localStorage.getItem("key2")) || [];
    itemsToSave.push({ usernameB, messageB });
    localStorage.setItem("key2", JSON.stringify(itemsToSave));
    displayChatTwo(usernameB, messageB);
}

function displayChatOne(nameOne, mess1) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${nameOne}</span>: <span>${mess1}</span>`;
    messageTwoCont.append(li);
}

function displayChatTwo(name2, message2) {
    const li = document.createElement("li");
    li.innerHTML = `<span>${name2}</span>: <span>${message2}</span>`;
    messageOneCont.append(li);
}



