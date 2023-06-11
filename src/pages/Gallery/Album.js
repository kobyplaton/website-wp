import React from 'react'
import { PhotoAlbum } from 'react-photo-album'

function Album() {

    const photos = [
        {
          src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          width: 200,
          height: 200
        },
        {
          src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          width: 200,
          height: 200
        },
        {
          src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          width: 200,
          height: 200
        },
        {
          src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          width: 200,
          height: 200
        },
        {
          src: 'https://source.unsplash.com/2ShvY8Lf6l0/800x599',
          width: 200,
          height: 200
        },
      ]

  return (
    <PhotoAlbum photos={photos} layout='rows' />
  )
}

export default Album