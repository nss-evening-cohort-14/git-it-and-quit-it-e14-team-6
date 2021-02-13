console.log("CONNECTED");

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
  
};

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
  pageFinder();
};

initialize();