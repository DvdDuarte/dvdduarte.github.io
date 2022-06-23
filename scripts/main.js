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

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Welcome");
  // await delay(700);
  createText("Starting the server...");
  // await delay(1500);
  createText("You can run several commands. Type: 'help'");
  createCode("'help'", "To see all the commands");
  // await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "guest@DvdDuarte:";
  span1.textContent = "~";
  p.appendChild(span1);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-dollar-sign icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;

  if(value.toLowerCase() === "help"){
    trueValue(value);
    
    createCode("whois", "Who is DvdDuarte?");
    createCode("resume", "My Curriculum Vitæ. In english and in portuguese.");
    createCode("projects", "My github page with my projects. Follow me there!");
    createCode("social -a", "All my social networks.");
    createCode("clear", "Clean the terminal.");
    
  }
  
  else if(value.toLowerCase() === "whois"){
    trueValue(value);
    createImg("resources/photo.png");
    createText("DvdDuarte is a recently graduated software engineer from University of Minho.")
    createText("My real name Is David Duarte. I'm most passion about <span class='bright_green'>web3</span> and <span class='bright_green'>game development</span>.")
    createText("At the moment I'm learning <span class='bright_green'> Rust</span>. I'm also developing a personal project at the moment.")
  }
  else if(value.toLowerCase() === "resume"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte/CV' target='_blank'><i class='fab fa-github white'></i> Curriculum Vitæ</a>")
  }
  else if(value.toLowerCase() === "projects"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/University.md#projects' target='_blank'><i class='fab fa-github white'></i> Github Projects</a>")
  }
  else if(value.toLowerCase() === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte' target='_blank'><i class='fab fa-github white'></i> github.com/DvdDuarte</a>")
    createText("<a href='https://www.linkedin.com/in/dvdduarte/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dvdduarte</a>")
    createText("<a href='https://www.instagram.com/_dvd_duarte_/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/_dvd_duarte_</a>")
  }
  else if(value.toLowerCase() === "social"){
    trueValue(value);
    createText("Did you mean: social -a?")
  }
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-dollar-sign icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-dollar-sign icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createImg(path){

  var img = document.createElement("img");
  img.setAttribute("class","profilepic");
  img.setAttribute("src",path);
  img.setAttribute("alt","Profile Photo");
  app.appendChild(img);
}

function createWhoIs(){
  
}

open_terminal();