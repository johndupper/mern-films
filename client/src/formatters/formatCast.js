import React from 'react'

const formatCast = props => {
  const { Participants } = props
  if (!Participants) return

  /** @namespace p.RoleType */
  return (
    <div>
      <h4>Cast</h4>
      <ul>
        {
          Participants.map((p, i) => (
            <li key={i}>
              <strong>{p.RoleType}</strong>: {p.Name}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default formatCast
