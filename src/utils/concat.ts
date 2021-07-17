export default function concatBuildings(buildings, existBuildings) {
  if (!buildings || !existBuildings) {
    return []
  }

  if (!existBuildings || !existBuildings.length) {
    return buildings
  }

  if (!buildings || !buildings.length) {
    return existBuildings
  }

  const newBuildings = existBuildings.slice()

  buildings.forEach((building) => {
    if (newBuildings.find((item) => item._id === building._id)) {
      return
    }

    newBuildings.push(building)
  })

  return newBuildings
}
