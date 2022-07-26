const getFileUrl = (path:string):string => {
  return new URL(path, import.meta.url).href
}

export default getFileUrl
