const random = (low, high) => {
    const range = high - low

    const base = Math.floor(
        Math.random() * range
    )

    return base + low
}
const nRandom = (count, low, high) => Array.from(
    {length: count},
    () => random(low, high)
)

export {random, nRandom}
