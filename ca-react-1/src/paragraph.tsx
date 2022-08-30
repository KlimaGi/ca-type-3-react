import React from 'react';

// propsu aprasymas su typeScript
type ManoPropsas = {
  content: string,
  author?: string,
  children?: React.ReactNode
}

// grieztas rasymas leidzia zinoti daugiau apie koda be kitu failu

// jeigu nevykdo jokio kodo, nereikia '{return ...}', uztenka '=> ()'
const Paragraph: React.FC<ManoPropsas> = ({ content, author, children }) => {
  console.log('children', children);
  return (
    <>
      <p>{content}</p>
      {author &&
        <small>
          <strong>{author}</strong>
        </small>
      }
    </>

  )
}


export default Paragraph;