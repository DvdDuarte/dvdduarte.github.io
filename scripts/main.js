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
  createText("You can run several commands.");
  createText("Type: <span class='blue'>'help'</span> To get help on the commands");
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
  else if(value.toLowerCase() === "portfolio -uni 1"){
    trueValue(value);
    createUniProject1stYear();
  }
  else if(value.toLowerCase() === "portfolio -uni 1 1"){
    trueValue(value);
    createUniProject1stYear1stSem();
  }
  else if(value.toLowerCase() === "portfolio -uni 1 2"){
    trueValue(value);
    createUniProject1stYear2ndSem();
  }
  else if(value.toLowerCase() === "portfolio -uni 2"){
    trueValue(value);
    createUniProject2ndYear();
  }
  else if(value.toLowerCase() === "portfolio -uni 2 1"){
    trueValue(value);
    createUniProject2ndYear1stSem();
  }
  else if(value.toLowerCase() === "portfolio -uni 2 2"){
    trueValue(value);
    createUniProject2ndYear2ndSem();
  }
  else if(value.toLowerCase() === "portfolio -uni 3"){
    trueValue(value);
    createUniProject3rdYear();
  }
  else if(value.toLowerCase() === "portfolio -uni 3 1"){
    trueValue(value);
    createUniProject3rdYear1stSem();
  }
  else if(value.toLowerCase() === "portfolio -uni 3 2"){
    trueValue(value);
    createUniProject3rdYear2ndSem();
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
    document.querySelectorAll("table"). forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("img"). forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    showBanner();
  } 
  else if(value.toLowerCase() === "donate") {
    trueValue(value);
    createText("<a href='https://www.paypal.com/myaccount/transfer/homepage/preview'><i class='fas fa-money-bill'></i> Donate </a>")
  }
  else if(value.toLowerCase().includes("man")) {
    printMan(value);
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

function createImg(path, classe, name){

  var img = document.createElement("img");
  img.setAttribute("class", classe);
  img.setAttribute("src", path);
  img.setAttribute("align","left");
  img.setAttribute("alt", name);
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
  para.innerHTML = "DvdDuarte is a recently graduated software engineer from University of Minho.<br/> My real name Is David Duarte.<br/> I'm most passion about <span class='bright_green'>web3</span> and <span class='bright_green'>game development</span>.<br/>I am also a photographer hobbyist, here you can see my <a href=´https://www.instagram.com/_ruvid_photography_/´><span class='bright_yellow'>photos.</span></a></br>At the moment I'm learning <span class='bright_green'> Rust</span>. I'm also developing a personal project at the same time.";
  div.appendChild(img);
  div.appendChild(para);
  app.appendChild(div);
}

function createUniProjects(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 1</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI1">Excitebike</a></td>
    </tr>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 2</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI2">Rastros</a></td>
    </tr>
    <tr>
      <td class="years">2nd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Data Communication</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SHAFA-CD-20-21">Shafa</a></td>
    </tr>
    <tr>
      <td class="years">2nd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-20-21">Algebra</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3">Recommendations Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Object Oriented Programming</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-POO-20-21">Football Manager</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operating Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SO-20-21">Audio Transformer</a></td>
    </tr>
    <tr>
      <td class="years">3rd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Communications</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CC-21-22">Folder Fast Sync</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-2021-2022">Hash &amp; Merkel Trees</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Software Systems Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-DSS-21-22">Management System for Electronic Equipment Repair Centers</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Artificial Intelligence</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IA-21-22">Green Distribution</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3-21-22">Repository Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 4</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Where2Go">Where2Go &amp; WayPhinder</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Distributed Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SD-21-22">Flight Booking System</a></td>
    </tr>
    <tr>
      <td class="years">3rd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Smart Learning and Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-ADI-21-22">Machine Learning</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Graphics</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CG-21-22">OpenGL 3d Engine &amp; Generator</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operational investigation</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IO-21-22">Euclidean Distances &amp; Time Cost Matrices</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Language Processing</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-PL-21-22">csv2json &amp; LL(1) Recursive Descent Parser</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject1stYear(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 1</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI1">Excitebike</a></td>
    </tr>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 2</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI2">Rastros</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject1stYear1stSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 1</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI1">Excitebike</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject1stYear2ndSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">1st Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 2</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI2">Rastros</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject2ndYear(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">2nd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Data Communication</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SHAFA-CD-20-21">Shafa</a></td>
    </tr>
    <tr>
      <td class="years">2nd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-20-21">Algebra</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3">Recommendations Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Object Oriented Programming</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-POO-20-21">Football Manager</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operating Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SO-20-21">Audio Transformer</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject2ndYear1stSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">2nd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Data Communication</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SHAFA-CD-20-21">Shafa</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject2ndYear2ndSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
      <td class="years">2nd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-20-21">Algebra</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 20-21</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3">Recommendations Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Object Oriented Programming</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-POO-20-21">Football Manager</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operating Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SO-20-21">Audio Transformer</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject3rdYear(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">3rd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Communications</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CC-21-22">Folder Fast Sync</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-2021-2022">Hash &amp; Merkel Trees</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Software Systems Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-DSS-21-22">Management System for Electronic Equipment Repair Centers</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Artificial Intelligence</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IA-21-22">Green Distribution</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3-21-22">Repository Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 4</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Where2Go">Where2Go &amp; WayPhinder</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Distributed Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SD-21-22">Flight Booking System</a></td>
    </tr>
    <tr>
      <td class="years">3rd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Smart Learning and Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-ADI-21-22">Machine Learning</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Graphics</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CG-21-22">OpenGL 3d Engine &amp; Generator</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operational investigation</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IO-21-22">Euclidean Distances &amp; Time Cost Matrices</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Language Processing</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-PL-21-22">csv2json &amp; LL(1) Recursive Descent Parser</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject3rdYear1stSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="years">3rd Year</td>
      <td class="years">1st Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Communications</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CC-21-22">Folder Fast Sync</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Calculation of Programs 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CP-2021-2022">Hash &amp; Merkel Trees</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Software Systems Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-DSS-21-22">Management System for Electronic Equipment Repair Centers</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Artificial Intelligence</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IA-21-22">Green Distribution</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 3 21-22</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-LI3-21-22">Repository Management System</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Labs 4</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Where2Go">Where2Go &amp; WayPhinder</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Distributed Systems</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-SD-21-22">Flight Booking System</a></td>
    </tr>
  </tbody>rastrosue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
  `
  app.appendChild(div);
}

function createUniProject3rdYear2ndSem(){
  const div = document.createElement("div");
  div.innerHTML=`
  <div class="tg-wrap"><table class="tg">
  <thead>
    <tr>
      <th class="tg-j1i3">Subject</th>
      <th class="tg-j1i3">Project</th>
    </tr>
  </thead>
  <tbody>
      <td class="years">3rd Year</td>
      <td class="years">2nd Semester</td>
    </tr>
    <tr>
      <td class="tg-0pky">Smart Learning and Development</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-ADI-21-22">Machine Learning</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Computer Graphics</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-CG-21-22">OpenGL 3d Engine &amp; Generator</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Operational investigation</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-IO-21-22">Euclidean Distances &amp; Time Cost Matrices</a></td>
    </tr>
    <tr>
      <td class="tg-0pky">Language Processing</td>
      <td class="tg-0pky"><a href="https://github.com/DvdDuarte/Projeto-PL-21-22">csv2json &amp; LL(1) Recursive Descent Parser</a></td>
    </tr>
  </tbody>
  </table></div>
  <p>You can use <span class='blue'>'portfolio -uni YEAR'</span> to see only the projects of that year
  and </br> <span class='blue'>'portfolio -uni YEAR SEMESTER'</span> to see only the projects of that specific year and semester.
  </br> <span class="aquamarine">YEAR/SEMESTER</span> Year and semester are both numbers.
  </p>
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

function printMan(value){
  if(value.toLowerCase() === "man excitebike") {
    trueValue(value);
    createText(`<a href='https://github.com/DvdDuarte/Projeto-LI1' target='_blank'><i class='fab fa-github white'></i> Excitebike</a>`);
    createImg("resources/MenuPrincipal_excitebike.png","imgProjects","Excitebike Menu Principal");
    createText(`This project is a clone of the NES game Excitebike, it was developed in Haskell. During development, the Haskell Gloss library was used to present an interface for the player.
    This project has a problem in mechanics and physics as it is impossible to walk beyond the first house.
    </br>Project developed by <a href="https://github.com/DvdDuarte" target='_blank'><u>David Duarte</u></a> and <a href="https://github.com/stellaechild" target='_blank'><u>Maria Cunha</u></a>.`)
  }
  else if(value.toLowerCase() === "man rastros") {
    trueValue(value);
    createText(`<a href='https://github.com/DvdDuarte/Projeto-LI2' target='_blank'><i class='fab fa-github white'></i> Rastros</a>`);
    createText(`This project is an attempt to bring the Rastros board game to a CLI game, developed in C. The game has some minor bugs. 
    </br>I developed a bot, however it does the bare minimum, that is, it is very easy to win against it.
    </br>This project was mainly developed by <a href="https://github.com/DvdDuarte" target='_blank'><u>David Duarte</u></a>. It was also developed by <a href="https://github.com/a82884" target='_blank'><u>Carlos Oliveira</u></a> and <a href="https://github.com/a93236" target='_blank'><u>Rodrigo Guimarães</u></a>.`);

  }
  else if(value.toLowerCase() === "man shafa") {
    trueValue(value);
    createText(`<a href='https://github.com/DvdDuarte/Projeto-SHAFA-CD-20-21' target='_blank'><i class='fab fa-github white'></i> Shafa</a>`);
    createText(`This project is a file compressor developed in C. Something like WinRar, 7zip among others. This project has a problem in the decompression part, and the compression does not reduce the size of the final file much, which ends up making this project useless at the moment.
    </br>This project was developed by <a href="https://github.com/DvdDuarte" target='_blank'><u>David Duarte</u></a>, <a href="https://github.com/marshaia" target='_blank'><u>Joana Alves</u></a>, <a href="https://github.com/stellaechild" target='_blank'><u>Maria Cunha</u></a>, <a href="https://github.com/pedroarauj09" target='_blank'><u>Pedro Araújo</u></a>,
     <a href="https://github.com/rafareas" target='_blank'><u>Rafael Arêas</u></a>, <a href="https://github.com/sdasl03" target='_blank'><u>Samuel Lira</u></a>, <a href="https://github.com/VicShadow" target='_blank'><u>Vicente Moreira</u></a> and <a href="https://github.com/VitorLelis" target='_blank'><u>Vitor Lelis</u>v.`);

  }
  else if(value.toLowerCase() === "man algebra") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man recommendations management system") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man football manager") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man audio transformer") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man folder fast sync") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man hash & merkel trees") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man management system for eletronic equipment repair centers") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man green distribution") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man repository management system") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man where2go & wayphinder") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man flight booking system") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man machine learning") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man opengl 3d engine & generator") {
    trueValue(value);
    createText(``);

  }
  else if(value.toLowerCase() === "man euclidean distances & time cost matrices") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else if(value.toLowerCase() === "man csv2json & ll(1) recursive descent parser") {
    trueValue(value);
    createText(`<h2>
    <i class="fas fa-tools fa-beat"></i> Under Maintenance <i class="fas fa-tools fa-beat"></i>
   </h2>`);

  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function showBanner(){
  createCode("'help'", "To get help on the commands");
}

open_terminal();
