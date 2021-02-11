console.log("CONNECTED");

// Repositories Array
const repositories = [];
// Deleted Repositories Array
const deletedRepositories = [];

// Packages Array
const packages = [];
// Deleted Packages Array
const deletedPackages = [];

// Projects Array
const projects = [];
// Deleted Projects Array
const deletedProjects = [];

const pinnedRepos = [
  {
  title: "my repo",
  aboutRepo: "this is my favorite repo",
  repoLink: "https://github.com/nathanmartin5937/sorting-hat" 
  }
];

const deletePinnedRepo = [

];

const printToDom = (divId, textToPrint) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = textToPrint;

};

const pinBuilder = (taco) => {
  let domString = "";
  taco.forEach((item, i) => {
      domString += `<div id=${i} class="card">
            <div class="card-body">
                  <p class="cardText">${item.title}</p>
                  <p class="cardText">${item.aboutRepo}</p>
                  <p class="cardText">${item.repoLink}</p>
                  <button type="button" id=${i} class="btn btn-primary" id="deleteBtn">Delete</button>
            </div>
          </div>`
  });

  printToDom("#pins", domString);
};

const handleBtnClick = (e) => {
  const btnId = e.target.id;
  if(btnId === "submitBtn") {
      document.getElementById("infoForm").style.visibility = "visible"
  }        
};

const pullForm = (e) => {
  e.preventDefault();

  const pinnedRepos = document.querySelector("#titleName").value;

  const Object = {
    title,
    aboutRepo,
    repoLink,
};

// // Delete Card Function
// const deleteCard = () => {

};
const clickEvents = function () {
  // document.querySelector("").addEventListener("click", deleteCard);
  // document.querySelector("#pins").addEventListener("click", pinBuilder);
  document.querySelector('form').addEventListener('submitBtn', pullForm);
  // document.querySelector("").addEventListener("click",);
};

const initialize = () => {
  clickEvents();
  pinBuilder(pinnedRepos);
};

initialize();