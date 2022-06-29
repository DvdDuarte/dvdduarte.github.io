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
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands.");
  createText("Type: <span class='blue'>'help'</span> To get help on the commands");
  await delay(500);
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

  if(value.toLowerCase() === "help" || value.toLowerCase() === "help -p1"){
    trueValue(value);
    createCode("whois", "Who is DvdDuarte?");
    createCode("education", "My education.");
    createCode("resume", "My Curriculum Vitæ. In english and in portuguese.");
    createCode("skills", "What are my skills?");
    createCode("languages", "What languages do i know?");
    createCode("clear", "Clean the terminal.");
    createCode("help -p2", "See all the commands in the second page");
  } 
  else if(value.toLowerCase() === "help -p2"){
    trueValue(value);
    createCode("portfolio","All my projects!")
    createCode("social -a", "All my social networks.");
    createCode("donate", "Help me donating any sum you wish! :)")
    // Create more commands here
  
  } 
  else if(value.toLowerCase() === "whois"){
    trueValue(value);
    createWhoIs();
  } 
  else if(value.toLowerCase() === "education"){
    trueValue(value);
    createText("Put education here");
  } 
  else if(value.toLowerCase() === "resume"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte/CV' target='_blank'><i class='fab fa-github white'></i> Curriculum Vitæ</a>")
  } 
  else if(value.toLowerCase() === "skills"){
    trueValue(value);
    createCode("Programming","C, C++, Java, Javascript, Python, Rust, Haskell, Prolog");
    createCode("Web Dev", "Html, CSS");
    createCode("Technologies", "Git, Docker, Visual Studio (Code), Intellij, Unix, MySQL, Visual Paradigm, Knime, Matlab, Windows");
    createCode("Technologies from the User Perspective", " Office 365, Google Apps, Windows, Facebook, Instagram");
  } 
  else if(value.toLowerCase() === "languages"){
    trueValue(value);
    createCode("Portuguese","Native Speaker");
    createCode("English", "B1/B2 (self-rated)");
    createCode("Spanish", "A1/A2 (self-rated)");
  } 
  else if(value.toLowerCase() === "portfolio"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/University.md#projects' target='_blank'><i class='fab fa-github'></i> University Projects </a>")
    createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/Portfolio.md#portfolio' target='_blank'><i class='fa fa-folder-open'></i> Personal Projects </a>")
    // createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/Portfolio.md#portfolio' target='_blank'><i class='fab fa-book-journal-whills'></i> Personal Projects </a>")
  }
  else if(value.toLowerCase() === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte' target='_blank'><i class='fab fa-github white'></i> github.com/DvdDuarte</a>");
    createText("<a href='https://www.linkedin.com/in/dvdduarte/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dvdduarte</a>");
    createText("<a href='https://www.instagram.com/_dvd_duarte_/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/_dvd_duarte_</a>");
    createText("<a href='mailto:cdvdfduarte@gmail.com?Subject=[Portfolio] - Entrar em contacto' target='_blank'><i class='fa fa-envelope white'></i> cdvdfduarte@gmail.com</a>");
  } 
  else if(value.toLowerCase() === "social"){
    trueValue(value);
    createText("Did you mean: social -a?")
  } 
  else if(value.toLowerCase() === "clear"){
    document.querySelectorAll("img"). forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    showBanner();
  } 
  else if(value.toLowerCase() === "donate") {
    trueValue(value);
    createText("<a href='https://www.paypal.com/myaccount/transfer/homepage/preview'><i class='fa fa-money-bill'></i> Donate </a>")
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
  img.setAttribute("align","left");
  img.setAttribute("alt","Profile Photo");
  app.appendChild(img);
}

function createWhoIs(){
  const div = document.createElement("div");
  var img = document.createElement("img");
  img.setAttribute("class","profilepic");
  img.setAttribute("src", "resources/photo.png");
  img.setAttribute("align", "left");
  img.setAttribute("alt", "Profile Photo");
  const para = document.createElement("p");
  para.setAttribute("align","left");
  para.setAttribute("class","parawhois");
  para.innerHTML = "DvdDuarte is a recently graduated software engineer from University of Minho.<br/> My real name Is David Duarte.<br/> I'm most passion about <span class='bright_green'>web3</span> and <span class='bright_green'>game development</span>.<br/>At the moment I'm learning <span class='bright_green'> Rust</span>. I'm also developing a personal project at the same time.";
  div.appendChild(img);
  div.appendChild(para);
  app.appendChild(div);
}

function showBanner(){
  createCode("'help'", "To get help on the commands");
}

open_terminal();