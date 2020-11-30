const formContent = document.querySelector(".form-content");
const contentAdded = document.querySelector("#content-added");
const submit = document.getElementById("submit");

function loadPic() {
    var getCan = document.getElementById("can1");
    var getFile = document.getElementById("finput");
    var pic = new SimpleImage(getFile);
    
    console.log(getFile, getFile.value);

    pic.drawTo(getCan);
   
    alert('upload successfully!');
}

function saveData() {

    var title = document.getElementById('title');
    var description = document.getElementById('content');
    var image = document.getElementById('can1').getContext('2d').getImageData(0, 0, 201, 201);
    console.log(image);

    localStorage.setItem('data', JSON.stringify({
        title,
        description,
        image
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

    document.getElementById('can1').getContext('2d').putImageData(data.image, 0, 0);

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


//loadData();