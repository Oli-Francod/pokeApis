document.getElementById("idContainer");
const contenedor = document.querySelector(".Container")
  , errNum = async nombre=>{
    nombre.preventDefault();
    let pokmon = selector.value;
    contenedor.innerHTML = "";
    const renderFound = "<span>ERROR: Verifique el N° agregado</span>";
    if (!vacio(pokmon))
        return contenedor.innerHTML = renderFound;
    const tipo = await rend(pokmon);
    if (tipo == null || tipo == null)
        return contenedor.innerHTML = renderFound;
    pokeSize(tipo)
}, insertNum = ()=>{
    form.addEventListener("submit", errNum )
};


const vacio = nombre=>{
    if (nombre === "") {
     idContainer.innerHTML = "ERROR: Agregue un numero";
     return
 }
    return idContainer.innerHTML = "",!0
}
, rend = async nombre=>{
 const pokmon = "https://pokeapi.co/api/v2/pokemon/";
 try {
     return await (await fetch(pokmon + nombre)).json()
 } catch {
     idContainer.innerHTML = `ERROR: El pokemon ${nombre} no existe`;
     return
 }
}
, take = nombre=>{
 let pokmon = [];
 return nombre.forEach(renderFound=>{
     pokmon.push(renderFound.type.name)}), pokmon}

,  size = nombre=>Math.ceil(nombre * .3048)
,  pokeSize = ({name: nombre, weight: pokmon, sprites: renderFound, types: tipo, height: alt})=>contenedor.innerHTML = `
                        <div class="card">
                        <h2>${nombre.toUpperCase()}</h2>
                        <img src="${renderFound.other.dream_world.front_default || renderFound.front_default}" alt="">
                        <div class="ClassContainer">
                        <p>Tipos:</p>
                        ${take(tipo).join(", ")}
                        </div>
                        <p>Altura = ${size(alt)} mts</p>
                        <p>Peso = ${pokmon} kg</p>
                        </div>`
, form = document.querySelector(".form")
, selector = document.getElementById("selector");

(function() {
    const pokmon = document.createElement("link").relList;
    if (pokmon && pokmon.supports && pokmon.supports("modulepreload"))
        return;
    for (const alt of document.querySelectorAll('link[rel="modulepreload"]'))
        tipo(alt);
    new MutationObserver(e=>{
        for (const inicio of alt)
            if (inicio.type === "childList")
                for (const carga of inicio.addedNodes)
                    carga.tagName === "LINK" && carga.rel === "modulepreload" && tipo(carga)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function renderFound(e) {
        const inicio = {};
        return alt.integrity && (inicio.integrity = alt.integrity),
        alt.referrerPolicy && (inicio.referrerPolicy = alt.referrerPolicy),
        alt.crossOrigin === "use-credentials" ? inicio.credentials = "include" : alt.crossOrigin === "anonymous" ? inicio.credentials = "omit" : inicio.credentials = "same-origin",
        inicio
    }
    function tipo(e) {
        if (alt.ep)
            return;
        alt.ep = !0;
        const inicio = renderFound(alt);
        fetch(alt.href, inicio)
    }
}
)();
insertNum();