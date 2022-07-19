/*
* Extrae con map() los tags de los articulos retornados por el servicio,
* Luego se aplana con .flat() el array resultante, ya que tiene arrays anidados
* Una alternativa es utilizar .flatMap(), mapea y aplana.
*/
export function agruparTagsArticulos(articles) {
    return [...articles].map(({ taxonomy }) => taxonomy.tags).flat()
}

export function ordenarPorRepetidos(arrayTags) {
    let arrayTagOrdenado = [...arrayTags].sort((a, b) => {
        if (a.slug > b.slug) {
            return 1
        } else if (a.slug < b.slug) {
            return - 1
        }
        return 0
    })
    return eliminarYContarTagsRepetidos(arrayTagOrdenado)
}

function eliminarYContarTagsRepetidos(arrayTagOrdenado) {
    let almacenadorVecesRepetidas = [];
    let almacenadorUnicos = [];
    let contador = 1;
    for (let index = 0; index < arrayTagOrdenado.length; index++) {
        if (arrayTagOrdenado[index + 1]?.slug === arrayTagOrdenado[index]?.slug) {
            contador++;
        } else {
            almacenadorUnicos.push(arrayTagOrdenado[index])
            almacenadorVecesRepetidas.push(contador)
            contador = 1;
        }
    }
    return integrarTagsConCantidades(almacenadorUnicos, almacenadorVecesRepetidas)
}

function integrarTagsConCantidades(arrayTags, counts) {
    return [...arrayTags].map((tag, index) => ({ ...tag, counts: counts[index] }))
}

export function ordenarPorCantidad(arrayTags) {
    let arrayTagOrdenadoPorCantidad = [...arrayTags].sort((a, b) => {
        if (a.counts > b.counts) {
            return -1
        } else if (a.counts < b.counts) {
            return 1
        }
        return 0
    })
    return arrayTagOrdenadoPorCantidad
}

export function formatDate(date) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const fecha = new Date(date)
    return `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
}