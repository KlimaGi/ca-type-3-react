import React from 'react';

// propsu aprasymas su typeScript
type ManoPropsas = {
  content: string
  author?: string
}

// grieztas rasymas leidzia zinoti daugiau apie koda be kitu failu

// jeigu nevykdo jokio kodo, nereikia '{return ...}', uztenka '=> ()'
const Paragraph: React.FC<ManoPropsas> = ({ content, author }) => (
  <>
    <p>{content}</p>
    {author &&
      <small>
        <strong>{author}</strong>
      </small>
    }
  </>

)


export default Paragraph;