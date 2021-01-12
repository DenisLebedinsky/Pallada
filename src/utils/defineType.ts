export const defineType = (name) => {
  if (!name) {
    return 'Unknown'
  }

  const extension = name.split('.').pop()

  if (extension === 'jpg' || extension === 'jpeg' || extension === 'png') {
    return 'Image'
  }

  if (extension === 'mp4') {
    return 'Video'
  }

  return 'Unknown'
}
