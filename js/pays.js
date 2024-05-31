(function () {
    // URL de l'API REST de WordPress
    console.log("Rest API");
    let bouton_categorie = document.querySelectorAll(".bouton_categorie");

    function rechercherParPays(pays) {
        var url = `https://gftnth00.mywhc.ca/tim48/wp-json/wp/v2/posts?search=${pays}`;

        // Effectuer la requête HTTP en utilisant fetch()
        fetch(url)
            .then(function (response) {
                // Vérifier si la réponse est OK (statut HTTP 200)
                if (!response.ok) {
                    throw new Error(
                        "La requête a échoué avec le statut " + response.status
                    );
                }

                // Analyser la réponse JSON
                return response.json();
            })
            .then(function (data) {
                // La variable "data" contient la réponse JSON
                console.log(data);
                let restapi = document.querySelector(".contenu__restapi")
                restapi.innerHTML = ''; // Vide le contenu précédent

                // Maintenant, vous pouvez traiter les données comme vous le souhaitez
                // Par exemple, extraire les titres des articles comme dans l'exemple précédent
                data.forEach(function (article) {
                    let titre = article.title.rendered;
                    let contenu = article.content.rendered;
                    // contenu = contenu.substr(0, 200) + "..."
                    if (article.meta && article.meta.ville_avoisinante) {
                        console.log('ville:', article.meta);
                    }
                    console.log(titre);
                    let carte = document.createElement("div");
                    carte.classList.add("restapi__carte");
                    carte.innerHTML = `
                        <img src="https://via.placeholder.com/150" alt="Placeholder">
                        <div>
                            <h2>${titre}</h2>
                            <p>${contenu}</p>
                        </div>
                    `;
                    restapi.appendChild(carte);
                });
            })
            .catch(function (error) {
                // Gérer les erreurs
                console.error("Erreur lors de la récupération des données :", error);
            });
    }

    // Appel de la fonction pour charger la première catégorie par défaut
    rechercherParPays(bouton_categorie[0].textContent.trim());

    for (const elm of bouton_categorie) {
        elm.addEventListener('click', function (e) {
            let pays = elm.textContent.trim();
            rechercherParPays(pays);
        })
    }
})();
