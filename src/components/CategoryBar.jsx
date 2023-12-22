import React from 'react';
import '../style/category.css'

const keywords = [
  'All',
  'CUKUR',
  'FENERBAHCE',
  'TBMM',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
]

const CategoryBar = () => {
  return (
    <div className='category-main'>
      <div className='categories'>
          {
            keywords.map((v,i) => (
              <button key={i}>
                  {v}
              </button>
            ))
          }
      </div>
    </div>
  )
}

export default CategoryBar
