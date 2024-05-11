import { describe, expect, test } from 'vitest'
import { Animals } from '../src/ClassAnimals.js'

describe('ClassAnimals', () => {
  const animals = new Animals()

  test('filter animals by pattern', () => {
    const filteredResult = animals.filter('ry')

    const filteredResultMock = JSON.parse(
      '[{"name":"Uzuzozne","people":[{"name":"Lillie Abbott","animals":[{"name":"John Dory"}]}]},{"name":"Satanwi","people":[{"name":"Anthony Bruno","animals":[{"name":"Oryx"}]}]}]'
    )

    expect(JSON.parse(JSON.stringify(filteredResult))).toEqual(filteredResultMock)
  })

  test('count animals', () => {
    const countResult = animals.count()

    const matchNamePeople = countResult[0].name.match(/\[(\d+)\]/)
    const numberPeople = Number(matchNamePeople[1])
    const peopleNumber = countResult[0].people.length

    const matchNameAnimal = countResult[0].people[0].name.match(/\[(\d+)\]/)
    const numberAnimal = Number(matchNameAnimal[1])
    const animalsNumber = countResult[0].people[0].animals.length

    expect(numberPeople).toEqual(peopleNumber)
    expect(numberAnimal).toEqual(animalsNumber)
  })
})
