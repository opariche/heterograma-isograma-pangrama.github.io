
// Función para detectar Heterogramas
function esHeterograma(cadena) {
    cadena = cadena.toLowerCase();
    for (let i = 0; i < cadena.length; i++) {
        if (cadena.lastIndexOf(cadena[i]) !== i && cadena[i] !== " ") {
            return false;
        }
    }
    return true;
}
console.log(esHeterograma('oscar'));

// Función para detectar isogramas
function esIsograma(cadena) {
    cadena = cadena.toLowerCase().replace(/[\s-]/g,'');
    const rep = {};
    for(let i = 0; i < cadena.length; i++){
        const char = cadena.charAt(i);

        if(rep[char]){
            rep[char]++;
        }else{
            rep[char] = 1;
        }
    }

    const valeus = Object.values(rep);

    return valeus.every((val) => val === valeus[0]);
    
}

console.log(esIsograma('aabb'));

// Función para detectar pangramas
function esPangrama(cadena) {
    cadena = cadena.toLowerCase().replace(/[^a-z]/g, "");
    let letras = {};
    for (let i = 0; i < cadena.length; i++) {
        letras[cadena[i]] = true;
    }
    return Object.keys(letras).length === 26;
}

console.log(esPangrama('Extraño pan de col y kiwi se quemó bajo fugaz vaho'));