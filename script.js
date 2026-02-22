const addBtn = document.querySelector('.add-btn'); 
const input = document.querySelector('input');
const movieList = document.querySelector('.movie-list');

let movies = ['მიმინო', 'ნატვრის ხე', 'შერეკილები', "მონანიება", 'სიყვარული ყველას უნდა'];

function renderMovies() {
  movieList.innerHTML = '';
  movies.forEach((movie, index) => {
    const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = movie;
  const buttonDiv = document.createElement('div');
  buttonDiv.classList.add('buttons');
  //update button
  const updateBtn = document.createElement('button');
  updateBtn.textContent = 'Update';
  updateBtn.classList.add('update');
  //add event listener
  updateBtn.addEventListener('click', () => updateMovie(index));
  //delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete');
  deleteBtn.addEventListener('click', () => deleteMovie(index));
  buttonDiv.appendChild(updateBtn);
  buttonDiv.appendChild(deleteBtn);
  //add text and buttons
  li.appendChild(span);
  li.appendChild(buttonDiv);
  movieList.appendChild(li);
}) 
}
// Create
//add new movie
addBtn.addEventListener('click', () => {
  const newMovie = input.value.trim();
  if (newMovie === '') {
    alert('Please add new movie!');
    return;
  }
  movies.push(newMovie);
  input.value = '';
  renderMovies();
})
//update movie
function updateMovie(index) {
  const newName = prompt('Enter new movie name', movies[index]);

  if (newName && newName.trim() !== "") {
    movies[index] = newName.trim();
    renderMovies();
  }
}

//Delete
function deleteMovie(index) {
  movies.splice(index, 1);
  renderMovies();
}

renderMovies();