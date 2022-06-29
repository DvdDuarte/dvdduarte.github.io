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
    createCode("portfolio -uni", "Lists all my university projects");
    createCode("portfolio -personal", "List all my personal projects at the moment.");
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
    createText("Type: <span class='blue'>'man NAME'</span> Fill in NAME with the desired project name to see it's description.");
    createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/University.md#projects' target='_blank'><i class='fab fa-github'></i> University Projects </a>")
    createText("<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/Portfolio.md#portfolio' target='_blank'><i class='fa-regular fa-folder-open'></i> Personal Projects </a>")
  }
  else if(value.toLowerCase() === "portfolio -uni"){
    trueValue(value);
    createUniProjects();
  }
  else if(value.toLowerCase() === "portfolio -personal"){
    trueValue(value);
    createPersonalProjects();
  }
  else if(value.toLowerCase() === "social -a"){
    trueValue(value);
    createText("<a href='https://github.com/DvdDuarte' target='_blank'><i class='fab fa-github white'></i> github.com/DvdDuarte</a>");
    createText("<a href='https://www.linkedin.com/in/dvdduarte/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/dvdduarte</a>");
    createText("<a href='https://www.instagram.com/_dvd_duarte_/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/_dvd_duarte_</a>");
    createText("<a href='mailto:cdvdfduarte@gmail.com?Subject=[Portfolio] - Entrar em contacto' target='_blank'><i class='far fa-envelope'></i> cdvdfduarte@gmail.com</a>");
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
    createText("<a href='https://www.paypal.com/myaccount/transfer/homepage/preview'><i class='fas fa-money-bill'></i> Donate </a>")
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

function createUniProjects(){
  const div = document.createElement("div");
  div.innerHTML = `<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/University.md#projects' target='_blank'><i class='fab fa-github'></i> University Projects </a>
  <p>
    <h2 id="1st-year">1st Year</h2>
  </p>
  <table>
    <thead>
      <tr>
        <th style="text-align:center" class="bright_green">1st semester</th>
        <th style="text-align:left" class="pinkish_purple">Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center" class="paradise_sky"> LI1</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-LI1">Excite Bike</a></td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
        <tr>
        <th style="text-align:center" class="bright_green">2nd semester</th>
        <th style="text-align:left" class="pinkish_purple">Project</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td style="text-align:center" class="paradise_sky"> LI2</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-LI2">Rastros</a></td>
        </tr>
    </tbody>
  </table>
  <p>
    <h2 id="2nd-year">2nd Year</h2>
  </p>
  <table>
    <thead>
      <tr>
        <th style="text-align:center" class="bright_green">1st semester</th>
        <th style="text-align:left" class="pinkish_purple">Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center" class="paradise_sky"> CD</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-SHAFA-CD-20-21">Shafa</a></td>
      </tr>
    </tbody>
  </table>
  <table>
    <thead>
      <tr>
        <th style="text-align:center" class="bright_green">2nd semester</th>
        <th style="text-align:left" class="pinkish_purple">Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center" class="paradise_sky"> CP 20-21</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-CP-20-21">Algebra</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> LI3 20-21</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-LI3">Recommendations Management System</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> POO</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-POO-20-21">Football Manager</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> SO</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-SO-20-21">Audio Transformer</a></td>
      </tr>
    </tbody>
  </table>
  <p>
    <h2 id="3rd-year">3rd Year</h2>
  </p>
  <table>
    <thead>
      <tr>
        <th style="text-align:center" class="bright_green">1st semester</th>
        <th style="text-align:left" class="pinkish_purple">Project</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center" class="paradise_sky"> CC</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-CC-21-22">Folder Fast Sync</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> CP 21-11</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-CP-2021-2022">Hash & Merkel Trees</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> DSS</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-DSS-21-22">Management System for Electronic Equipment Repair Centers</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> IA</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-IA-21-22">Green Distribution</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> LI3 21-22</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-LI3-21-22">Repository Management System</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> LI4</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Where2Go">Where2Go & WayPhinder</a></td>
      </tr>
      <tr>
        <td style="text-align:center" class="paradise_sky"> SD</td>
        <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-SD-21-22">Flight booking system</a></td>
      </tr>
    </tbody>
  </table>
  <table>
      <thead>
        <tr>
          <th style="text-align:center" class="bright_green">2nd semester</th>
          <th style="text-align:left" class="pinkish_purple">Project</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="text-align:center" class="paradise_sky"> ADI</td>
          <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-ADI-21-22">Machine Learning</a></td>
        </tr>
        <tr>
          <td style="text-align:center" class="paradise_sky"> CG</td>
          <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-CG-21-22">OpenGL 3d Engine & Generator</a></td>
        </tr>
        <tr>
          <td style="text-align:center" class="paradise_sky"> IO</td>
          <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-IO-21-22">Euclidean distances & time cost matrices</a></td>
        </tr>
        <tr>
          <td style="text-align:center" class="paradise_sky"> PL</td>
          <td style="text-align:left"><a href="https://github.com/DvdDuarte/Projeto-PL-21-22">csv2json & LL(1) Recursive Descent Parser</a></td>
        </tr>
      </tbody>
    </table>
  `

  app.appendChild(div);
}

function createPersonalProjects(){
  const div = document.createElement("div");
  div.innerHTML = 
  `<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`
  // div.innerHTML = `<a href='https://github.com/DvdDuarte/DvdDuarte/blob/main/Portfolio.md#portfolio' target='_blank'><i class='fa fa-folder-open'></i> Personal Projects </a>
  // <p>
  //  <h2 id="2022" class="aquamarine" style="margin-left: 5%">2022</h2>
  // </p>
  // <table>
  //   <thead>
  //     <tr>
  //       <th style="text-align:center" class="bright_green">Project</th>
  //       <th style="text-align:left" class="pinkish_purple">Description</th>
  //     </tr>
  //   </thead>
  //   <tbody>
  //     <tr>
  //       <td style="text-align:center"><a href="https://github.com/DvdDuarte/SR240Z" class="paradise_sky">Discord Bot</a></td>
  //       <td style="text-align:left">A discord bot to moderate servers.</td>
  //     </tr>
  //     <tr>
  //       <td style="text-align:center"><a href="https://github.com/DvdDuarte/webscrapper" class="paradise_sky">Web Scrapper</a></td>
  //       <td style="text-align:left">A web scrapper in python to scrape .... website.</td>
  //     </tr>
  //   </tbody>
  // </table>
  // `

  app.appendChild(div);
}

function showBanner(){
  createCode("'help'", "To get help on the commands");
}

open_terminal();