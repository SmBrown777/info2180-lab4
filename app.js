document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("search");

    button.addEventListener("click", function () {

        alert("The button is working!");

        fetch("superheroes.php")
            .then(function (response){
                return response.text();
            })
            .then(function (data) {
                alert(data);
            })
            .catch(function (error){
                console.log("Error:", error);

            });
    })

})