export const getRandom = (array) => {
  const random = Math.floor(array.length * Math.random())
  console.log(random)
  return array[random]
}

export default {
  getRandom,
}
