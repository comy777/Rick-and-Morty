import { Charactere } from "../interfaces/responseApi"

export const getFavorites = () => {
  try {
    const favorites = localStorage.getItem('favorites')
    return favorites ? JSON.parse(favorites) : []
  } catch (error) {
    console.log(error)
  }
}

export const saveFavorite = (characters: Charactere[]) => {
  try {
    localStorage.setItem('favorites', JSON.stringify(characters))
  } catch (error) {
    console.log(error)
  }
}

export const validateCharacter = (characters: Charactere[], character: Charactere, validate: Boolean) => {
  const { id } = character
  let newData = characters
  let bandera = false
  characters.forEach((item) => {
    if (item.id === id) bandera = true
  })
  if (!bandera && !validate) newData.push(character)
  if (bandera && !validate) newData = newData.filter((item) => item.id !== id)
  return { newData, bandera }
}