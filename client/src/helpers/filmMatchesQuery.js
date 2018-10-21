const filmMatchesQuery = (film, query) => {
  const { TitleName, ReleaseYear, Genres } = film
  const q = new RegExp(query, 'i')

  if (TitleName.match(q)) return film
  if (ReleaseYear.toString().match(q)) return film

  const genres = Genres.filter(g => g.match(q))
  if (genres.length) return film
}

export default filmMatchesQuery
