import { Animals } from './ClassAnimals.js'

const animals = new Animals()

const args = process.argv.slice(2)
let pattern = ''
let filteredResult = []

args.find((arg) => {
  switch (true) {
    case arg.startsWith('--filter='):
      pattern = arg.split('=')[1]
      filteredResult = animals.filter(pattern)

      if (filteredResult.length > 0) {
        console.log(JSON.stringify(filteredResult, null, 2))
      }
      break
    case arg === '--count':
      filteredResult = animals.count()

      if (filteredResult.length > 0) {
        console.log(JSON.stringify(filteredResult, null, 2))
      }
      break
    default:
      console.log(`Argument inconnu: ${arg}. Les arguments valides sont --filter=value et --count`)
      break
  }
})
