console.log("CONNECTED");

// Repositories Array
const repositories = [];
// Deleted Repositories Array
const deletedRepositories = [];

// Packages Array
const packages = ["VSC", "SQL", "BOOTSTRAP", "GitHub", "JavaScript", "HTML", "CSS"];
// Developer Array
const devArray = [];
// Deleted Developer Array
const deletedDevsArray = [];

// Projects Array
const projects = [];
// Deleted Projects Array
const deletedProjects = [];

// Print to DOM function
const printToDom = (divId, printText) => {
  const selectedDivId = document.querySelector(divId);
  selectedDivId.innerHTML = printText;
};
// ************* PACKAGES START *******************
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
                      <button type="button" class="btn btn-danger" id="${i}">Delete</button>
                    </div>
                  </div>`;
  })
  printToDom("#developers", domString);
};

const buttonClick = (e) => {
  let buttonId = (e.target.id);

  if (buttonId === "add-package") {
    document.querySelector("#form").innerHTML = `
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
      <button id="submitBut" type="button" class="btn btn-primary">Submit</button>
    </div>
  </form>`
  }
  document.querySelector("#submitBut").addEventListener("click", packageInfoCard)
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
};

const deletePackageCard = (deleteArray) => {
  let deletedDom = "";
  deleteArray.forEach((item, i) => {
    deletedDom += `
    <div id="expel-card" class="card mb-3" style="width: 18rem;" id=${i}>
      <div class="card-body">
        <h5>REMOVED!</h5>
        <h5 class="card-text">${item.name}</h5>
        <p class="card-text">${item.gitName}</p>
        <p class="card-text">${item.package}</p>
          <div class="h5 card-text text-dark">Developer Removed</div>
        </div>
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
        <br>
        <div id="packages">All Package Profiles have been deleted!</div>
    </div>`;
    printToDom("#packages", deletedD);
    deleteDisplay();
  }
  devCardBuilder(devArray);
  deletePackageCard(deletedDevsArray);
};
// ************* PACKAGES END *******************

// Card Information Form
const cardInfo = function (event) {
  event.preventDefault();

  const name = document.querySelector()

};

// Card Input Information Form
const cardForm = function () {
  let domString = "";

};

// Delete Card Function
const deleteCard = () => {

};

// Click Event Function that listens to the buttons (onClick)
const clickEvents = function () {
  // document.querySelector("#developers").addEventListener("click", deleteCard);
  // document.querySelector("").addEventListener("click",);
  document.querySelector("#add-package").addEventListener("click", buttonClick);
  document.querySelector("#developers").addEventListener("click", deletePackage);
};

// Initializes all other Functions to run
const initialize = () => {
  clickEvents();
};
// Invokes the Initialize Function
initialize();
