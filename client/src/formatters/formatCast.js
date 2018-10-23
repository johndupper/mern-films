import React from 'react'

// "pure" function
const alphabetize = (a, b) => a.RoleType.localeCompare(b.RoleType)

const formatCast = film => {
  const { Participants } = film
  if (!Participants || !Participants.length) return

  Participants.sort(alphabetize)

  /** @namespace p.RoleType */

  return (
    <div>
      <h4>Cast</h4>
      <ul>
        {
          Participants.map((p, i) => (
            <li key={i}>
              <strong>{ p.RoleType }</strong>: { p.Name }
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default formatCast
