/*
* Extrae con map() los tags de los articulos retornados por el servicio,
* luego se aplana con .flat() el array resultante, ya que tiene arrays anidados.
* Una alternativa es utilizar .flatMap(), mapea y aplana.
*/
function agruparTagsArticulos(articles) {
    return [...articles].map(({ taxonomy }) => taxonomy.tags).flat()
}

/*
* Ordena los tags por la propiedad slug utilizando sort().
*/
function ordenarPorRepetidos(arrayTags) {
    let arrayTagOrdenado = [...arrayTags].sort((a, b) => {
        if (a.slug > b.slug) {
            return 1
        } else if (a.slug < b.slug) {
            return - 1
        }
        return 0
    })
    return arrayTagOrdenado
}

/*
* Cuenta y elimina los tags repetidos en una sola iteración utilizando bucle for.
* Una alternativa es usando reduce() pero es menos eficiente.
*/
function eliminarYContarTagsRepetidos(arrayTagOrdenado) {
    let almacenadorUnicos = [];
    let almacenadorVecesRepetidas = [];
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
    return [almacenadorUnicos, almacenadorVecesRepetidas]
}

/*
* Agrega a cada objeto de Articulo la propiedad count, que hace referencia a
* cuantas veces figuraba en el array original.
*/
function integrarTagsConCantidades(arrayTags, counts) {
    return [...arrayTags].map((tag, index) => ({ ...tag, counts: counts[index] }))
}

/*
* Ordena los tags por la propiedad counts (calculada anteriormente) utilizando sort() de manera descendente.
*/
function ordenarPorCantidad(arrayTags) {
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

/*
* Recibe array con todos los Articulos
* Realiza las siguientes acciones:
* 1- Agrupa los tags de todos los articulos.
* 2- Ordena los tags por repetidos.
* 3- Cuenta y elimina los tags los repetidos.
* 4- Integra la cantidad de repetidos en el objeto de tag que le corresponde.
* 5- Ordena los tags por cantidad.
* 6- Obtiene los primeros 10 tags
* Retorna array de tags a listar.
*/
export function calcularTagsAListar(articles) {
    const arrayTagsArticulos = agruparTagsArticulos(articles)
    const arrayTagPorRepetidos = ordenarPorRepetidos(arrayTagsArticulos)
    const objConTagsUnicos = eliminarYContarTagsRepetidos(arrayTagPorRepetidos)
    const arrayTagsYCantidades = integrarTagsConCantidades(objConTagsUnicos[0], objConTagsUnicos[1])
    const arrayPorCantidad = ordenarPorCantidad(arrayTagsYCantidades)
    const arrayTagsAListar = arrayPorCantidad.splice(0, 10)
    return arrayTagsAListar
}

/*
* Convierte fecha ingresada por parámetro al siguiente formato -> 1 de Julio de 2022.
* Retorna la misma.
*/
export function formatDate(date) {
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const fecha = new Date(date)
    return `${fecha.getDate()} de ${meses[fecha.getMonth()]} de ${fecha.getFullYear()}`
}