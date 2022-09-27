
const toSplit = (str: string): string[] => {
	return str.split("")
}

const toNumber = (str: string): number => {
	return Number(str)
}

const getLength = (str: string): number => {
	return str.length
}


const randomNumberBetween1And10 = (): number => {
    const min = 1
const max = 10
    const result = Math.floor(Math.random() * (max - min + 1)) + min

    return result
}


interface IUser {
    id: string,
    name: string,
    age: number
}

const users: IUser[] = [
    {
        id: "1",
        name: "Alice",
        age: 20
    },
    {
        id: "2",
        name: "Bob",
        age: 18
    },
    {
        id: "3",
        name: "Astrodev",
        age: 50
    }
]


const calcAverage = (list: number[]): number => {
    let totalSum = 0
    
    for (let n of list) {
        totalSum += n
    }

    const average = Math.ceil(totalSum / list.length)

    return average
}