type Scientist = {
    name: string,
    age: string,
    henchmen: string,
    description: string
}

//Hämtar element från html
const scientistButton = document.querySelector(".scientistButton") as HTMLElement;
const addButton = document.querySelector(".addButton") as HTMLButtonElement;
const inputName = document.querySelector("#Name") as HTMLInputElement;
const inputAge = document.querySelector("#Age") as HTMLInputElement;
const inputHench = document.querySelector("#Hench") as HTMLInputElement;
const inputDesc = document.querySelector("#Desc") as HTMLTextAreaElement;
const buttonSection = document.querySelector(".buttons") as HTMLElement;

// Objekt med en array och en metod som lägger till scientists
let scientistDB: {
    scientist: Scientist[],
    addScientist: (n: string, a: string, h: string, d: string) => void,
} = {
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
    addScientist: function (name: string, age: string, henchmen: string, description: string): void {
        const n: Scientist = {
            name: name,
            age: age,
            henchmen: henchmen,
            description: description
        }
        this.scientist.push(n);
    },
}

//Lyssnare på ADD knappen
addButton.addEventListener("click", function(event){
    event.preventDefault();
    const newButton = document.createElement("button");
    newButton.innerHTML= `${inputName.value}`;
    buttonSection.append(newButton);

    scientistDB.addScientist(inputName.value, inputAge.value, inputHench.value, inputDesc.value);
    console.log(scientistDB.scientist);
})

//Lyssnare på alla scientist knappar. 
scientistButton.addEventListener("click", function(e){
    e.preventDefault();
    let artName = document.querySelector("#artName") as HTMLElement;
    let artAge = document.querySelector("#artAge") as HTMLElement;
    let artHench = document.querySelector("#artHench") as HTMLElement;
    let artDesc = document.querySelector("#artDesc") as HTMLElement;
    for(let i=0; i<scientistDB.scientist.length; i++){
        if(scientistButton.innerHTML === scientistDB.scientist[i].name){
            artName.innerHTML = `Name: ${scientistDB.scientist[i].name}`;
            artAge.innerHTML = `Age: ${scientistDB.scientist[i].age}`;
            artHench.innerHTML = `Amount of Henchmen: ${scientistDB.scientist[i].henchmen}`;
            artDesc.innerHTML = `Description: ${scientistDB.scientist[i].description}`;
        }
    }
})
