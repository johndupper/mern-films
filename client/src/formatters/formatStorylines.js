import React from 'react'

const formatStoryline = film => {
  /** @namespace film.Storylines */
  if (!film.Storylines) return

  /** @namespace story.Type */
  /** @namespace story.Description */
  return (
    <div style={{ fontSize: '1.5rem' }}>
      <p>{film.Storylines[0].Description}</p>
    </div>
  )
}

export default formatStoryline
