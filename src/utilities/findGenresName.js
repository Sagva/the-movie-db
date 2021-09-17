export const findGengeName = (genreList, id) => {
    const foundGenre = genreList.filter(genre => genre.id === +id)
    return foundGenre[0].name
}