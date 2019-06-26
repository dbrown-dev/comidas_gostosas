import React from 'react'
import { Image } from 'semantic-ui-react'

const urls = new WeakMap()

const blobUrl = blob => {
  if (urls.has(blob)) {
    return urls.get(blob)
  } else {
    let url = URL.createObjectURL(blob)
    urls.set(blob, url)
    return url
  }
}

const Thumb = ({ file, size }) => {
  const url = file && blobUrl(file)
  return (<Image src={url} size={size} />)
}

export default Thumb