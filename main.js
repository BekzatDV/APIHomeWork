const container = document.querySelector(".container");
const API = "https://www.omdbapi.com/?apikey=b6003d8a&s=All";

fetch(API)
  .then((res) => res.json())
  .then((data) =>
    data.Search.forEach((item) => {
      container.innerHTML += `
    <div class="block">
      <div>
        <img class="item__img" src=${item.Poster} alt="">
      </div>
      <div class="block__title" id="ig__title_1">
        ${item.Title}
      </div>
      <div class="block__title" id="ig__title_2">
        ${item.Year}
      </div>
    </div>
      `;
    })
  );
