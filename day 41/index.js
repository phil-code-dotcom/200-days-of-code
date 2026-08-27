
function checkage() {
    let age = document.getElementById("age").value;
    let show = "";

    if (age >= 80) {
        show = "Healthy Person";
    } else if (age >= 60) {
        show = "Senior Citizen";
    } else if (age >= 20) {
        show = "Adult";
    } else if (age >= 12) {
        show = "Teenager";
    } else if (age >= 5) {
        show = "Child";
    } else {
        show = "Too Young";
    }

    let place = document.getElementById("show");
    place.innerHTML = `<p>${show}</p>`;
}