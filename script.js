const urlCharacteres = "https://rickandmortyapi.com/api/character";
const urlLocations = "https://rickandmortyapi.com/api/location";
const urlEpisodes = "https://rickandmortyapi.com/api/episode";

const container = document.getElementById("container")


for (let b = 0; b < 7; b++) {
    listCharacter()
    function listCharacter() {
        let pagIndex = `https://rickandmortyapi.com/api/character?page=${b + 1}`
        // debugger
        character1()
        async function character1() {
            let response1 = await fetch(pagIndex);
            let data1 = await response1.json();
            let results1 = data1.results
            listCharacter1(results1)
        }
        function listCharacter1(data) {
            for (let a = 0; a < data.length; a++) {
                let name = data[a];
                let inputHTML =
                    `
                        <div class="cardPersonajes ${name.gender.trim()} ${name.species.trim()} ${name.status.trim()} ${name.origin.name.trim()}">
                            <p>${name.name.toUpperCase()}</p>
                            <img src="https://rickandmortyapi.com/api/character/avatar/${a + b * 20 + 1}.jpeg">
                            <div>
                                <div>
                                    <h4>Status</h4>
                                    <h5>${name.status}</h5>
                                </div>
                                <hr>
                                <div>
                                    <h4>Origin</h4>
                                    <h5>${name.origin.name}</h5>
                                </div>
                                <hr>
                                <div>
                                    <h4>Gender</h4>
                                    <h5>${name.gender}</h5>
                                </div>
                            </div>

                            <button type="button" class="btn btn-danger boton" data-bs-toggle="modal" data-bs-target="#exampleModal${a + b * 20 + 1}">
                            Saber más
                            </button>    
                        </div>

                        <div class="modal fade" id="exampleModal${a + b * 20 + 1}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header justify-content-center">
                                        <h1 class="modal-title fs-5" id="exampleModalLabel">${name.name.toUpperCase()}</h1>        
                                    </div>
                                    <div class="modal-body d-flex justify-content-evenly align-items-center">
                                        <img src="https://rickandmortyapi.com/api/character/avatar/${a + b * 20 + 1}.jpeg" width="100px" height="100px">
                                    </div>
                                    <div class="modal-footer d-flex flex-wrap justify-content-evenly align-items-start">
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Status</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.status}</h5>
                                        </div>
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Species</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.species}</h5>
                                        </div>
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Gender</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.gender}</h5>
                                        </div>
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Planet</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.origin.name}</h5>
                                        </div>
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Location</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.location.name}</h5>
                                        </div>
                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Episodes Appeared</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.episode.length}</h5>
                                        </div>

                                        <div style="width:20%;">
                                            <h4 class="text-center" style="font-size:13px ;">Type</h4>
                                            <h5 class="text-center" style="font-size:18px ;">${name.type}</h5>
                                        </div>                                                                                                                                                                                                                              
                                    </div>
                                    <div class="modal-footer justify-content-center">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                            `
                container.innerHTML += inputHTML
            }
        }
    }
}

setTimeout(() => {
    const genderHtml = document.getElementById("gender");
    const genderclase = document.querySelectorAll(".cardPersonajes")

    genderHtml.addEventListener("change", function () {
        const filtro = genderHtml.value;


        for (let c = 0; c < genderclase.length; c++) {
            // debugger
            let clases = Array.from(genderclase[c].classList);

            function algunoCumpleCondicion(datos, condicion) {
                return datos.some(condicion);
            }

            const resultado = algunoCumpleCondicion(clases, function (numero) {
                return numero === filtro;
            });


            console.log(resultado); // true

         

            if (resultado === true) {
                genderclase[c].style.display = "inline"
            } else {
                genderclase[c].style.display = "none"
            }
        }
    })
}, 2000);

setTimeout(() => {
    const statusHtml = document.getElementById("Status");
    const statusclase = document.querySelectorAll(".cardPersonajes")

    statusHtml.addEventListener("change", function () {
        const filtro = statusHtml.value;


        for (let c = 0; c < statusclase.length; c++) {
            // debugger
            let clases = Array.from(statusclase[c].classList);

            function algunoCumpleCondicion(datos, condicion) {
                return datos.some(condicion);
            }

            const resultado = algunoCumpleCondicion(clases, function (numero) {
                return numero === filtro;
            });


            console.log(resultado); // true

         

            if (resultado === true) {
                statusclase[c].style.display = "inline"
            } else {
                statusclase[c].style.display = "none"
            }
        }
    })
}, 2000);

// setTimeout(() => {
//     const statusHtml = document.getElementById("Origin");
//     const statusclase = document.querySelectorAll(".cardPersonajes")

//     statusHtml.addEventListener("change", function () {
//         const filtro = statusHtml.value;


//         for (let c = 0; c < statusclase.length; c++) {
//             // debugger
//             let clases = Array.from(statusclase[c].classList);

//             function algunoCumpleCondicion(datos, condicion) {
//                 return datos.some(condicion);
//             }

//             const resultado = algunoCumpleCondicion(clases, function (numero) {
//                 return numero === filtro;
//             });


//             console.log(resultado); // true

         

//             if (resultado === true) {
//                 statusclase[c].style.display = "inline"
//             } else {
//                 statusclase[c].style.display = "none"
//             }
//         }
//     })
// }, 2000);





