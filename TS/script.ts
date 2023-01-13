type Scientist = {
    name: string,
    age: number,
    henchmen: number,
    description: string
}

//Hämtar element från html
const addButton = document.querySelector(".addButton") as HTMLButtonElement;
const inputName = document.querySelector("#Name") as HTMLInputElement;
const inputAge = document.querySelector("#Age") as HTMLInputElement;
const inputHench = document.querySelector("#Hench") as HTMLInputElement;
const inputDesc = document.querySelector("#Desc") as HTMLTextAreaElement;
const buttonSection = document.querySelector(".buttons") as HTMLElement;



// Objekt med en array och en metod som lägger till scientists
let scientistDB: {
    scientist: Scientist[],
    addScientist: (n: string, a: number, h: number, d: string) => void,
} = {
    scientist: [
        {
            name: "Nizze",
            age: 5, 
            henchmen: 12,
            description: "Nizze is an evil scientist that detest humans.",
        },
        {
            name: "Zigge",
            age: 7, 
            henchmen: 10,
            description: "Zigge is an scientist that hates everyting and want a cure for stupidness.",
        },
        {
            name: "Wille",
            age: 6, 
            henchmen: 5,
            description: "Wille is a crazy scientist that hates animals.",
        },
    ],
    addScientist: function (name: string, age: number, henchmen: number, description: string): void {
        const n: Scientist = {
            name: name,
            age: age,
            henchmen: henchmen,
            description: description
        }
        this.scientist.push(n);
    },
}

//Forloop för att hämta värdena i den befintliga arryen och skapa knappar för dessa.
for(let i=0; i<scientistDB.scientist.length; i++){
    let arrayButton = document.createElement("button");
    arrayButton.innerHTML= `${scientistDB.scientist[i].name}`;
    buttonSection.append(arrayButton);
    arrayButton.addEventListener("click", function(e){
        e.preventDefault();
        let artName = document.querySelector("#artName") as HTMLElement;
        let artAge = document.querySelector("#artAge") as HTMLElement;
        let artHench = document.querySelector("#artHench") as HTMLElement;
        let artDesc = document.querySelector("#artDesc") as HTMLElement;
        for(let i=0; i<scientistDB.scientist.length; i++){
            if(arrayButton.innerHTML === scientistDB.scientist[i].name){
                artName.innerHTML = `Name: ${scientistDB.scientist[i].name}`;
                artAge.innerHTML = `Age: ${scientistDB.scientist[i].age}`;
                artHench.innerHTML = `Amount of Henchmen: ${scientistDB.scientist[i].henchmen}`;
                artDesc.innerHTML = `Description: ${scientistDB.scientist[i].description}`;
            }
        }
    })
}



//Lyssnare på ADD knappen plus skapa knappar och lyssnare på de nya knapparna
addButton.addEventListener("click", function(event){
    event.preventDefault();
    scientistDB.addScientist(inputName.value, inputAge.valueAsNumber, inputHench.valueAsNumber, inputDesc.value);
    console.log(inputAge.valueAsNumber);
    const newButton = document.createElement("button");
    newButton.innerHTML= `${inputName.value}`;
    buttonSection.append(newButton);
    newButton.addEventListener("click", function(e){
        e.preventDefault();
        let artName = document.querySelector("#artName") as HTMLElement;
        let artAge = document.querySelector("#artAge") as HTMLElement;
        let artHench = document.querySelector("#artHench") as HTMLElement;
        let artDesc = document.querySelector("#artDesc") as HTMLElement;
        for(let i=0; i<scientistDB.scientist.length; i++){
            if(newButton.innerHTML === scientistDB.scientist[i].name){
                artName.innerHTML = `Name: ${scientistDB.scientist[i].name}`;
                artAge.innerHTML = `Age: ${scientistDB.scientist[i].age}`;
                artHench.innerHTML = `Amount of Henchmen: ${scientistDB.scientist[i].henchmen}`;
                artDesc.innerHTML = `Description: ${scientistDB.scientist[i].description}`;
            }
        }
    })
    inputName.value = "";
    inputAge.value = "";
    inputHench.value = "";
    inputDesc.value = "Ex. Nizze is a crazy scientist that dosen´t like humans.";
})