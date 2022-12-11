interface Person {
    firstname: string,
    lastname: string,
    age: number,
    city?: string // city är en frivillig parameter alltså måste inte användas
                  // Visas med ? efter egenskapen
}

export { Person }