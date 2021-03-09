import fs from 'fs'
import path from 'path'

/**
 *
 * @param {String} dirPath
 * @param {Array} arrayOfFiles
 * @returns {Array} arrayOfFiles
 */
export const getFilesAndPath = (dirPath, arrayOfFiles) => {
  let files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach((file) =>
    fs.statSync(dirPath + '/' + file).isDirectory()
      ? (arrayOfFiles = getFilesAndPath(dirPath + '/' + file, arrayOfFiles))
      : arrayOfFiles.push(`${dirPath}${path.sep}${file}`)
  )

  return arrayOfFiles
}
