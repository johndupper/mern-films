import React from 'react'

// "pure" function
const alphabetize = (a, b) => a.Award.localeCompare(b.Award)

const formatAwards = film => {
  const { Awards } = film
  if (!Awards || !Awards.length) return

  Awards.sort(alphabetize)

  /** @namespace a.AwardWon */
  /** @namespace a.Award */
  /** @namespace a.AwardCompany */

  return (
    <div>
      <h4>Awards</h4>
      <ul>
        {
          Awards.map((a, i) => (
            <li key={i}>
              { a.AwardWon ? 'Winner: ' : 'Nominated: ' }
              <strong>{ a.Award }</strong> ({ a.AwardCompany })
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default formatAwards
