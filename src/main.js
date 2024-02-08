const filterContainer = document.querySelector('.filter-buttons');
const exerciseCardList = document.querySelector('.exercise-cards');
const BASE_URL = 'https://energyflow.b.goit.study/api';

filterContainer.addEventListener('click', handleFilter);

getExercises('Muscles').then(renderExerciseCards);

async function handleFilter(evt) {
  const { filter } = evt.target.dataset;

  if (!filter) return;

  await getExercises(filter).then(renderExerciseCards);

  const prevBtn = filterContainer.querySelector('.active');
  const nextBtn = evt.target;

  prevBtn.disabled = false;
  nextBtn.disabled = true;

  prevBtn.classList.remove('active');
  nextBtn.classList.add('active');
}

async function getExercises(filter) {
  return fetch(`${BASE_URL}/filters?filter=${filter}&page=1&limit=12`)
    .then(resp => resp.json())
    .then(data => data.results);
}

function renderExerciseCards(exercises) {
  exerciseCardList.innerHTML = exercises.map(buildExerciseCard);
}

function buildExerciseCard({ name, filter, imgUrl }) {
  return `
    <li class="exercise-card">
      <img src="${imgUrl}" alt="${name}">
      <h4>${name}</h4>
      <h6>${filter}</h6>
    </li>
  `;
}
