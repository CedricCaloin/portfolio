const checkboxes = document.querySelectorAll('.btn-check');
var tab = {"scolaire":true,"personnel":true,"informatique":true,"industriel":true}


checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (event) => {
        let projets = document.getElementById("listeProjets");
        if (event.target.checked === false) {
            tab[event.target.value] = false;
            for (let i=0; i<projets.children.length; i++) {
                if (!tab[projets.children[i].attributes["data-type"].value]
                    || !tab[projets.children[i].attributes["data-domaine"].value]) {
                    projets.children[i].style.display = "none";
                    // Si l'un des attributs est décoché, on le cache
                }
            }
        }
        else {
            tab[event.target.value] = true;
            for (let i=0; i<projets.children.length; i++) {
                if (tab[projets.children[i].attributes["data-type"].value]
                    && tab[projets.children[i].attributes["data-domaine"].value]) {
                    projets.children[i].style.display = "";
                    // Si les 2 attributs sont cochés, on l'affiche
                }
            }
        }

      console.log(`Checkbox ${event.target.value} : ${event.target.checked}`);
    });
  });