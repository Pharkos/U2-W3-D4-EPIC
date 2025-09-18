function getSearchUrl(query) {
  return `https://api.pexels.com/v1/search?query=${query}`;
}

const loadBtn = document.getElementById("loadImgsBtn");

loadBtn.addEventListener("click", () => {
  console.log("Load Images Clicked");

  fetch(getSearchUrl("football"), {
    headers: {
      Authorization: "04vZEuNKziXYGLx03T6m73kgODwcpH9M6w9d1oFB5RDoLfI8U3YGlWrs",
    },
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Couldn't Have a Data");
      }
    })
    .then((dataObj) => {
      console.log(dataObj);

      const photos = dataObj.photos;

      // Take Our Row

      const myRow = document.getElementById("photosRow");

      // Clear Old Cards

      myRow.innerHTML = "";

      // Creating New Cards

      photos.forEach((photo) => {
        const col = document.createElement("div");

        col.className = "col-md-4";

        col.innerHTML = `<div class="card mb-4 shadow-sm">
        <img src="${photo.src.medium}" class="bd-placeholder-img card-img-top"/>
        <div class="card-body">
          <h5 class="card-title">${photo.photographer}</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
              <button type="button" class="btn btn-sm btn-outline-secondary">Hide</button>
            </div>
            <small class="text-muted">${photo.id}</small>
          </div>
        </div>
      </div>`;

        myRow.appendChild(col);
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
