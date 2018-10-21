import React from 'react'

const formatStoryline = film => {
  /** @namespace film.Storylines */
  if (!film.Storylines) return

  /** @namespace story.Type */
  /** @namespace story.Description */
  return (
    <div>
      {
        film.Storylines.map((story, index) => (
          <div key={index}>
            <strong>{story.Type}</strong>
            <br />
            {story.Description}
          </div>
        ))
      }
    </div>
  )
}

export default formatStoryline
