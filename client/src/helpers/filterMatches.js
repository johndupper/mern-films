// reusable, testable "pure function"
const isMatch = (value, query) => value.match(query)

const filterMatches = (allFilms, query) => {
  const q = new RegExp(query, 'i')

  return allFilms.filter(film => {
    const {
      TitleName, ReleaseYear, Genres,
      OtherNames, Participants, Awards
    } = film

    if (isMatch(TitleName, q)) return film
    if (isMatch(ReleaseYear.toString(), q)) return film

    // perform nested iterations as last resort

    const titles = OtherNames.filter(n => (
      n.TitleNameSortable.match(q) || n.TitleName.match(q)
    ))
    if (titles.length) return film

    const genres = Genres.filter(g => isMatch(g, q))
    if (genres.length) return film

    const people = Participants.filter(p => isMatch(p.Name, q))
    if (people.length) return film

    const awards = Awards.filter(a => isMatch(a.Award, q))
    return awards.length ? film : false
  })
}

export default filterMatches
