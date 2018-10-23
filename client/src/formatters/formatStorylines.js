const formatStoryline = film => {
  const { Storylines } = film
  if (!Storylines || !Storylines.length) return

  /** @namespace Storylines.Type */
  /** @namespace Storylines.Description */

  return (
    `${Storylines[0].Type}: ${Storylines[0].Description}`
  )
}

export default formatStoryline
