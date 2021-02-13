console.log("CONNECTED");

// Print to DOM function
const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;
};

// **************** REPOS START *********************
const newRepo = [];

const deletedRepos = [];

// FUNCTION TO CREATE REPO CARD
const createRepoCard = () => {
  let domString = '';
  newRepo.forEach((item, i) => {
    domString += `<div class="card m-2" style="width: 18rem; id=${i}">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <p class="card-text">${item.desc}</p>
                      <button type="button" id="${i}" class="btn btn-danger">Delete Repo</button>
                    </div>
                  </div>`;
  })
  printToDom("#repos", domString);
};

const handleButtonClick = (e) => {
  const name = document.querySelector("#name").value;
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

      document.querySelector("form").reset();
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

// Delete Card Function
const deleteCard = () => {
};

// ********************* REPOS END **************************

// Click Event Function that listens to the buttons (onClick)
const clickEvents = () => {
  document.querySelector("#infoForm").addEventListener("submit", getFormInfo);
  document.querySelector("#repos").addEventListener("click", delRepo);
};


// Initializes all other Functions to run
const init = () => {
  clickEvents();
  createRepoCard();
  };

  init();
// Invokes the Initialize Function
// initialize();
