console.log("CONNECTED");

<<<<<<< HEAD
// Print to DOM function
const printToDom = (divId, printText) => {
  const selectedDivId = document.querySelector(divId);
  selectedDivId.innerHTML = printText;
};
// ************* PACKAGES START *******************
// Packages Array
const packages = ["VSC", "SQL", "BOOTSTRAP", "GitHub", "JavaScript", "HTML", "CSS"];
// Developer Array
const devArray = [];
// Deleted Developer Array
const deletedDevsArray = [];

// Developer Packages Card Builder
const devCardBuilder = (dArray) => {
  let domString = "";
  // For Loop
  dArray.forEach((item, i) => {
    domString += `<div class="card my-2" style="width: 18rem;" id=${i}>
                    <div class="card-body">
                      <h5 ${item.name} class="card-text">Name: ${item.name}</h5>
                      <p class="card-text">Profile: ${item.gitName}</p>
                      <p class="card-text">Package: ${item.package}</p>
                      <div id="html-icon"><img src="./images/html-bracket.png" alt="HTML Icon"></div>
                      <button type="button" class="btn btn-danger" id="${i}" style="padding: 5px;">Delete</button>
                    </div>
                  </div>`;
  })
  printToDom("#developers", domString);
};

const buttonClick = (e) => {
  let buttonId = (e.target.id);

  if (buttonId === "add-package") {
    document.querySelector("#form-package").innerHTML = `
  <form id="inputForm">
    <div class="card-body">
      <h5 class="card-title">New Developer</h5>
      <div>Name</div>
      <input type="text" class="form-control" id="devName"></input>
      <div>GitHub Profile</div>
      <input type="text" class="form-control" id="gitName"></input>
      <div>Software Package</div>
      <input type="text" class="form-control" id="packName"></input>
      <div class="text">Add Form</div>
      <button id="subBut" type="button" class="btn btn-primary">Submit</button>
    </div>
  </form>`
  }
  document.querySelector("#subBut").addEventListener("click", packageInfoCard)
};

const packageInfoCard = (event) => {
  event.preventDefault();

  const name = document.querySelector("#devName").value;
  const gitName = document.querySelector("#gitName").value;
  const package = document.querySelector("#packName").value;
  const packageIds = devArray.map(dev => dev.id).sort((a, b) => a - b);
  const id = packageIds.length ? packageIds[(packageIds.length - 1)] + 1 : 1;

  const packageObj = {
    name,
    gitName,
    package,
    id,
  };
  devArray.push(packageObj);
  devCardBuilder(devArray);
  document.querySelector("#inputForm").reset();
};

const deletePackageCard = (deleteArray) => {
  let deletedDom = "";
  deleteArray.forEach((item, i) => {
    deletedDom += `
    <div id="delete-card" class="card my-2" style="width: 18rem;" id=${i}>
      <div class="card-body">
        <h5>DELETED!</h5>
        <h5 class="card-text">${item.name}</h5>
        <p class="card-text">${item.gitName}</p>
        <p class="card-text">${item.package}</p>
        <div class="h5 card-text text-dark">Profile Removed</div>
      </div>
      <img id="no-sign" src="./images/no-sign.jpg" alt="No Sign">
    </div>`;
  })
  printToDom("#deletedDevs", deletedDom);
};

const deleteDisplay = () => {
  document.querySelector(".jumbotron").style.display = "none";
  document.querySelector(".card-body").style.display = "none";
};

const deletePackage = function (e) {
  const targetType = (e.target.type);
  const targetId = (e.target.id);

  if (targetType === "button") {
    const deleteDevID = devArray.findIndex((dev) => dev.id === targetId);
    let deleteDeveloper = devArray.splice(deleteDevID, 1);
    deletedDevsArray.push(...deleteDeveloper)
  }
  if (devArray.length === 0) {
    const deletedD = `
      <div class="card-body">
        <div id="api-icon"><img src="./images/API.png" alt="API Icon"></div>
        <br>
        <div id="packages">All Package Profiles have been deleted!</div>
    </div>`;
    printToDom("#zero-devs", deletedD);
    deleteDisplay();
  }
  devCardBuilder(devArray);
  deletePackageCard(deletedDevsArray);
=======
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
  
>>>>>>> main
};
const packageEvents = () => {
  document.querySelector("#add-package").addEventListener("click", buttonClick);
  document.querySelector("#developers").addEventListener("click", deletePackage);
};
// ************* PACKAGES END *******************

// *************************START OVERVIEW PAGE***********************
const pinnedRepos = [];

const pinBuilder = () => {
  let domString = "";
  pinnedRepos.forEach((item, i) => {
    domString += `<div id="${i}" class="card">
            <div class="card-body">
                  <p class="cardText">${item.title}</p>
                  <p class="cardText">${item.aboutRepo}</p>
                  <p class="cardText">${item.repoLink}</p>
                  <button type="button" id="${i}" class="btn btn-primary" id="deleteBtn">Delete</button>
            </div>
          </div>`
  });

  printToDom("#pins", domString);
};

<<<<<<< HEAD
const handleBtnClick = (e) => {
  const btnId = e.target.id;
};

=======
>>>>>>> main
const pullForm = (e) => {
  e.preventDefault();

  const title = document.querySelector("#title").value;
  const aboutRepo = document.querySelector('#aboutRepo').value;
  const repoLink = document.querySelector('#repoLink').value;

  const objects = {
    title,
    aboutRepo,
    repoLink,
  };

  pinnedRepos.push(objects);
  pinBuilder(pinnedRepos);
  document.querySelector('form').reset();
};

const cardRemoval = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;

  if (targetType === "button") {
    pinnedRepos.splice(targetId, 1);
  }

  pinBuilder(pinnedRepos);
};
<<<<<<< HEAD
// Click Event Function that listens to the buttons (onClick)
const clickEvents = () => {
=======

const pinnedEvents = () => {
>>>>>>> main
  document.querySelector("#infoForm").addEventListener("submit", pullForm);
  document.querySelector("#pins").addEventListener("click", cardRemoval);
};
// ************************END OVERVIEW PAGE************************ 



// ************************END OVERVIEW PAGE************************ 

const pageFinder = () => {
  const pageFile = location.pathname.split("/").slice(-1);

  if (pageFile[0] === "index.html") {
    pinBuilder();
    pinnedEvents();
  } else if (pageFile[0] === "repo.html") {
    createRepoCard();
    // getFormInfo();
    repoEvents();
  } else if (pageFile[0] === "packages.html") {
    devCardBuilder();
    packageEvents();
  } else if (pageFile[0] === "projects.html") {

  } else {
    pinBuilder();
    pinnedEvents();
  }
}

const initialize = () => {
<<<<<<< HEAD
  // clickEvents();
  packageEvents();
=======
  pageFinder();
>>>>>>> main
};
// Invokes the Initialize Function
initialize();
