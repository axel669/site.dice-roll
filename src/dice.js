import {random, nRandom} from "./random.js"

const mapSum = (rolls, map = i => i) => rolls.reduce(
    (total, roll) => total + map(roll),
    0
)
const typeSum = rolls => rolls.reduce(
    (totals, roll) => {
        const {value, type} = roll

        if (type !== null) {
            if (totals[type] === undefined) {
                totals[type] = 0
            }
            totals[type] += value
        }
        return totals
    },
    {}
)

const dieRoll = (count, size, type = null) => ({
    roll: () => {
        const rolls = nRandom(count, 1, size + 1)
        return {
            value: mapSum(rolls),
            rolls,
            type,
        }
    },
    string: `${count}d${size}`
})
const bonus = (value, type = null) => ({
    roll: () => ({
        rolls: [value],
        value,
        type,
    }),
    string: `(${value})`
})

const diceRoll = (...dice) => {
    const string = dice
        .map(die => die.string)
        .join(" + ")
    return {
        string,
        roll: () => {
            const rolls = dice.map(
                die => die.roll()
            )

            return {
                total: mapSum(
                    rolls,
                    roll => roll.value
                ),
                typeTotals: typeSum(rolls),
                id: Date.now(),
                rollValues: rolls.map(
                    (info, index) => ({
                        string: dice[index].string,
                        values: info.rolls,
                        type: info.type
                    })
                ),
                string,
            }
        }
    }
}

export {dieRoll, bonus, diceRoll}
