'use client'

import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import type { ActivityImage } from '@/data/activities'

type Props = {
  images: ActivityImage[]
}

export default function ActivityGallery({ images }: Props) {
  const [open, setOpen] = useState(false)
  const [index, setIndex] = useState(0)

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i)
              setOpen(true)
            }}
            className="w-full break-inside-avoid group rounded-sm overflow-hidden relative"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            {img.title && (
              <span className="absolute bottom-3 left-3 right-3 text-left text-white text-sm font-inter font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                {img.title}
              </span>
            )}
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={images.map((img) => ({ src: img.src, alt: img.alt, title: img.title }))}
      />
    </>
  )
}
