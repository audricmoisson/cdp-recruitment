import data from './data.js'

export class Animals {
  constructor() {
    this.data = data
  }

  filter(pattern) {
    const filteredData = []

    for (const country of data) {
      const filteredPeople = []

      for (const person of country.people) {
        const filteredAnimals = []

        for (const animal of person.animals) {
          if (animal.name.includes(pattern)) {
            filteredAnimals.push(animal)
          }
        }

        if (filteredAnimals.length > 0) {
          filteredPeople.push({ name: person.name, animals: filteredAnimals })
        }
      }

      if (filteredPeople.length > 0) {
        filteredData.push({ name: country.name, people: filteredPeople })
      }
    }

    return filteredData
  }

  count() {
    const countData = []

    for (const country of data) {
      const updatedPeople = []

      for (const person of country.people) {
        const updatedAnimals = []

        for (const animal of person.animals) {
          updatedAnimals.push({ name: `${animal.name}` })
        }

        updatedPeople.push({ name: `${person.name} [${person.animals.length}]`, animals: updatedAnimals })
      }

      countData.push({
        name: `${country.name} [${country.people.length}]`,
        people: updatedPeople,
      })
    }

    return countData
  }
}
