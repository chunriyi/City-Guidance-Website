const formContent = document.querySelector(".form-content");
const contentAdded = document.querySelector("#content-added");
const submit = document.getElementById("submit");

function saveData() {

    var title = document.getElementById('title');
    var description = document.getElementById('content');

    localStorage.setItem('data', JSON.stringify({
        title,
        description
    }));

    formContent.style.display = "none";
    contentAdded.style.display = "block";
    contentAdded.innerHTML = `
        <h2>Title:</h2>
        <p>${title.value}</p>
        <h2>Description: </h2>
        <p>${description.value}</p>
    `;

    submit.innerHTML = "Edit";
}

function loadData() {
    // Gets data
    var data = localStorage.getItem('data');

    // Ends function if no data
    if (!data) return;

    // Parse from string to object
    data = JSON.parse(data);

    document.getElementById('title').value = data.title;
    document.getElementById('content').value = data.description;
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
    if(submit.innerHTML === "Post"){
        saveData()
    }else {
        formContent.style.display = "block";
        contentAdded.style.display = "none";
        submit.innerHTML = "Post";
    }
})
