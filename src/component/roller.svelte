<script>
    import {
        Button,
        Card,
    } from "svelte-doric"

    import {random} from "../random.js"
    import {history} from "../store.js"
    import {dieRoll, diceRoll} from "../dice.js"

    export let size
    export let count

    // let lastRoll = ""
    $: dice = diceRoll(
        dieRoll($count, size)
    )
    const roll = () => {
        const roll = dice.roll()
        history.update(
            hist => [roll, ...hist]
        )
    }
</script>

<Button variant="outline" color="secondary" on:tap={roll}>
    {$count}d{size}
</Button>
