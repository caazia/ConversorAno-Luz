
function converterAnoLuz()
 {
    let valorAnoLuz = document.getElementById('campo').value;
    valorAnoLuz = valorAnoLuz.replace(",", ".");

    const valorKm = 9461000000000;

    let valorAnoLuzKm = valorAnoLuz * valorKm;
    valorAnoLuzKm = valorAnoLuzKm.toFixed(2)

    alert(
        "O valor de " + valorAnoLuz + " Ano-luz em Quilomêtros(Km) é: \n" + valorAnoLuzKm);

 }

let form = document.getElementById('formulario');
let campo = document.getElementById('campo');

form.addEventListener('submit', function(e) {
   
    converterAnoLuz();
    e.preventDefault();
});


