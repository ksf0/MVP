export const getRandom = (array) => {
  const random = Math.floor(array.length * Math.random())
  return random
}

export default {
  getRandom,
}
