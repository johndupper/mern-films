import React from 'react'

const formatAwards = film => {
  if (!film.Awards || !film.Awards.length) return

  /** @namespace award.AwardWon */
  /** @namespace award.Award */
  /** @namespace award.AwardCompany */
  return (
    <div>
      <h3 style={{ 'text-align': 'center' }}>Awards</h3>
      <ul>
        {
          film.Awards.map((award, index) => (
            <li key={index}>
              {award.AwardWon ? 'Winner: ' : 'Nominated: '}
              <strong>{award.Award}</strong> ({award.AwardCompany})
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default formatAwards
