"use strict";
const addButton = document.querySelector(".addButton");
const inputName = document.querySelector("#Name");
const inputAge = document.querySelector("#Age");
const inputHench = document.querySelector("#Hench");
const inputDesc = document.querySelector("#Desc");
const buttonSection = document.querySelector(".buttons");
let scientistDB = {
    scientist: [
        {
            name: "Nizze",
            age: "5",
            henchmen: "12",
            description: "Nizze is an evil scientist that detest humans.",
        },
        {
            name: "Zigge",
            age: "7",
            henchmen: "10",
            description: "Zigge is an scientist that hates everyting and want a cure for stupidness.",
        },
        {
            name: "Wille",
            age: "6",
            henchmen: "5",
            description: "Wille is a crazy scientist that hates animals.",
        },
    ],
    addScientist: function (name, age, henchmen, description) {
        const n = {
            name: name,
            age: age,
            henchmen: henchmen,
            description: description
        };
        this.scientist.push(n);
    },
};
for (let i = 0; i < scientistDB.scientist.length; i++) {
    let arrayButton = document.createElement("button");
    arrayButton.innerHTML = `${scientistDB.scientist[i].name}`;
    buttonSection.append(arrayButton);
    arrayButton.addEventListener("click", function (e) {
        e.preventDefault();
        let artName = document.querySelector("#artName");
        let artAge = document.querySelector("#artAge");
        let artHench = document.querySelector("#artHench");
        let artDesc = document.querySelector("#artDesc");
        for (let i = 0; i < scientistDB.scientist.length; i++) {
            if (arrayButton.innerHTML === scientistDB.scientist[i].name) {
                artName.innerHTML = `Name: ${scientistDB.scientist[i].name}`;
                artAge.innerHTML = `Age: ${scientistDB.scientist[i].age}`;
                artHench.innerHTML = `Amount of Henchmen: ${scientistDB.scientist[i].henchmen}`;
                artDesc.innerHTML = `Description: ${scientistDB.scientist[i].description}`;
            }
        }
    });
}
addButton.addEventListener("click", function (event) {
    event.preventDefault();
    scientistDB.addScientist(inputName.value, inputAge.value, inputHench.value, inputDesc.value);
    console.log(scientistDB.scientist);
    const newButton = document.createElement("button");
    newButton.innerHTML = `${inputName.value}`;
    buttonSection.append(newButton);
    newButton.addEventListener("click", function (e) {
        e.preventDefault();
        let artName = document.querySelector("#artName");
        let artAge = document.querySelector("#artAge");
        let artHench = document.querySelector("#artHench");
        let artDesc = document.querySelector("#artDesc");
        for (let i = 0; i < scientistDB.scientist.length; i++) {
            if (newButton.innerHTML === scientistDB.scientist[i].name) {
                artName.innerHTML = `Name: ${scientistDB.scientist[i].name}`;
                artAge.innerHTML = `Age: ${scientistDB.scientist[i].age}`;
                artHench.innerHTML = `Amount of Henchmen: ${scientistDB.scientist[i].henchmen}`;
                artDesc.innerHTML = `Description: ${scientistDB.scientist[i].description}`;
            }
        }
    });
    inputName.value = "";
    inputAge.value = "";
    inputHench.value = "";
    inputDesc.value = "Ex. Nizze is a crazy scientist that dosen´t like humans.";
});
