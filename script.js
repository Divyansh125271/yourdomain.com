document.getElementById('openform').addEventListener('click',function(){
    document.getElementById('popupForm').style.display = 'block';
});
function closeForm() {
    document.getElementById("popupForm").style.display = "none";
}
const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    function formSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        fetch("https://getform.io/f/amdpkvmb", {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        })
        .then(response => console.log(response))
        .catch(error => console.log(error))
    }
function show() {
    document.getElementById('image')
        .style.display = "block";
    document.getElementById('btnID')
        .style.display = "none";
}

const links= document.querySelectorAll(".text-link");
const img = document.querySelectorAll('.image-container');

links.forEach( (link,index) => {
    link.addEventListener('mouseover',() =>
    {
        img.forEach((img) => {
            img.style.opacity='0';
        });
        img[index].style.opacity= 1;
    });
});


