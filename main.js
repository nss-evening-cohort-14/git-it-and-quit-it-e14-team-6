console.log("CONNECTED");

// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// ************* PACKAGES START *******************
const package = [
  {
    name: "Martin",
    gitName: "fimoefive",
    package: "HTML",
    id: 0,
  },
  {
    name: "Nathan M.",
    gitName: "nathanmartin5937",
    package: "HTML",
    id: 1,
  },
  {
    name: "Nathan K.",
    gitName: "nashvegasnate",
    package: "CSS",
    id: 2,
  },
];
// Developer Array
const devArray = [];
// Deleted Developer Array
const deletedDevsArray = [];

// Developer Packages Card Builder
const devCardBuilder = () => {
  let packageString = "";
  // For Loop
  devArray.forEach((item, i) => {
    packageString +=
      `<div class="card my-2" style="width: 18rem;" id=${i}>
        <div class="card-body">
          <h5 ${item.name} class="card-text">Name: ${item.name}</h5>
          <p class="card-text">Profile: ${item.gitName}</p>
          <p class="card-text">Package: ${item.package}</p>
          <div id="html-icon"><img src="./images/html-bracket.png" alt="HTML Icon"></div>
          <button type="button" class="btn btn-danger" id="${i}" style="padding: 5px;">Delete</button>
        </div>
      </div>`;
  })
  printToDom("#developers", packageString);
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
};
const packageEvents = () => {
  document.querySelector("#add-package").addEventListener("click", buttonClick);
  document.querySelector("#developers").addEventListener("click", deletePackage);
};
// ************* PACKAGES END *******************

// **************** REPOS START *********************
const newRepo = [];

const deletedRepos = [];

// FUNCTION TO CREATE REPO CARD
const createRepoCard = () => {
  let domString = '';
  newRepo.forEach((item, i) => {
    domString += `<div class="card m-3" style="width: 75%; display: flex; border-style:inset; 
                    border-color:rgb(52, 124, 207); id=${i}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.desc}</p>
                      <button type="button" id="${i}" class="btn btn-danger">Delete Repo</button>
                    </div>
                  </div>`;
  })
  printToDom("#repos", domString);
};

// FUNCTION TO RETRIEVE INFO FOR NEW REPO CARD
const getFormInfo = (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const desc = document.querySelector("#desc").value;

  const obj = {
    name,
    desc,
  }

  newRepo.push(obj);

  createRepoCard(newRepo);
  document.querySelector("#newRepoForm").reset();
};
// FUNCTION TO DELETE REPOS
const delRepo = (e) => {
  const targetType = e.target.type;
  const targetId = e.target.id;
  if (targetType === 'button') {

    newRepo.splice(targetId, 1);
  }
  createRepoCard(newRepo);
};
const repoEvents = () => {
  document.querySelector("#newRepoForm").addEventListener("submit", getFormInfo);
  document.querySelector("#repos").addEventListener("click", delRepo);
};
// ********************* REPOS END **************************

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

const pinnedEvents = () => {
  document.querySelector("#infoForm").addEventListener("submit", pullForm);
  document.querySelector("#pins").addEventListener("click", cardRemoval);
};
// ************************END OVERVIEW PAGE************************ 

const profileCard = () => {
  let profileString = `
<div class="cardProfile" style="display:block; float: left; width: 18rem;">
    <img src="https://static.thenounproject.com/png/630729-200.png" class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">Profile</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Name:</li>
      <li class="list-group-item">About:</li>
      <li class="list-group-item">GitHub: </li>
      <li class="list-group-item">Email: </li>
    </ul>
  </div>`;
  printToDom("#profile", profileString);
};

const pageFinder = () => {
  const pageFile = location.pathname.split("/").slice(-1);

  if (pageFile[0] === "index.html") {
    pinBuilder();
    pinnedEvents();
    profileCard();
  } else if (pageFile[0] === "repo.html") {
    createRepoCard();
    profileCard();
    repoEvents();
  } else if (pageFile[0] === "packages.html") {
    devCardBuilder();
    packageEvents();
    profileCard();

  } else if (pageFile[0] === "projects.html") {
    profileCard();
  } else {
    pinBuilder();
    pinnedEvents();
    profileCard();
  }
}

const initialize = () => {
  pageFinder();
};
// Invokes the Initialize Function
initialize();
