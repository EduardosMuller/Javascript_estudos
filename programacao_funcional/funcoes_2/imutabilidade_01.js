function ordenar(array) {
  return [...array].sort((a, b) => a - b)
}

// const nums = Object.freeze([3, 1, 7, 9, 6, 5])
const nums = [3, 1, 7, 9, 6, 5]

const numsOrdernados = ordenar(nums)

console.log(numsOrdernados)
console.log(nums)

const parteNums = nums.slice(2)

console.log(parteNums, nums)