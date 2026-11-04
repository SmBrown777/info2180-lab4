document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("searchButton");
    const input = document.getElementById("search");
    const result = document.getElementById("result");

    button.addEventListener("click", function () {

        const query = input.value;

        fetch("superheroes.php?query=" + encodeURIComponent(query))
            .then(function (response){
                return response.text();
            })
            .then(function (data) {
                result.innerHTML = data;
            })
            .catch(function (error){
                console.log("Error:", error);

            });
    });

});