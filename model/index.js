const inputSubstantivo = document.querySelector("#substantivo");
const spanSubstantivo = document.querySelectorAll(".substantivo-span");

const inputVerbo = document.querySelector("#verbo");
const spanVerbo = document.querySelector("#verbo-span");

const inputAdjetivo = document.querySelector("#adjetivo");
const spanAdjetivo = document.querySelector("#adjetivo-span");

const storyContainer = document.querySelector("#story-container");

function createStory() {
  storyContainer.classList.remove("hide-story");
  spanSubstantivo[0].innerHTML = inputSubstantivo.value;
  spanSubstantivo[1].innerHTML = inputSubstantivo.value;
  spanVerbo.innerHTML = inputVerbo.value;
  spanAdjetivo.innerHTML = inputAdjetivo.value;
}

createStoryButton = document.querySelector("#create-story");
createStoryButton.addEventListener("click", createStory);

// fazer isso primeiro
// const inputSubstantivo = document.querySelector("#substantivo");
// const spanSubstantivo = document.querySelectorAll(".substantivo-span");

// const storyContainer = document.querySelector("#story-container");

// function createStory() {
//   storyContainer.classList.remove("hide-story");
//   spanSubstantivo[0].innerHTML = inputSubstantivo.value;
//   spanSubstantivo[1].innerHTML = inputSubstantivo.value;
// }

// createStoryButton = document.querySelector("#create-story");
// createStoryButton.addEventListener("click", createStory);
