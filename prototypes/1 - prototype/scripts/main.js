const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));

app.addEventListener("keypress", async function(event){
    if(event.key === "Enter"){
        await delay(150);
        getInputValue();
        removeInput();
        await delay(150);
        new_line();
    }
});

app.addEventListener("click",function(event){
    const input = document.querySelector("input");
    input.focus();
});

async function open_terminal(){
    create Text("Welcome to DvdDuarte Terminal!");
    await delay(500);
    create Text("Starting Server ...");
    await delay(800);
    // create Text("Type help to see all the diferent commands");
    createCode("help","To list all the commands");
    createCode("whois","Who is DvdDuarte");
    createCode("prokects","View all the projects");
    createCode("clear","Clear terminal");
    //Create more blocks for more commands

    await delay(500);
    new_line();
}

function new_line(){
    const p = document.createElement("p");
    const span = document.createElement("span");
    const spam = document.createElement("spam");

    p.setAttribute("class","path")
    p.textContent = "#dvdduarte";

    span.textContent = "sudo";
    spam.textContent = "guest@dvdduarte: ~$";

    p.appendChild(span);
    p.appendChild(spam);
    app.appendChild(p);
}