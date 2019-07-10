import React from 'react'

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

const Thumb = ({ file }) => {
  const url = file && blobUrl(file)
  return (<img src={url} alt='' />)
}

export default Thumb