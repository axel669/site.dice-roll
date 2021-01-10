<script>
    import {
        Text,
    } from "svelte-doric"

    export let roll

    $: rollString = roll.rollValues
        .map(
            roll => `[${roll.values.join(", ")}]`
        )
        .join(" + ")
    $: typeTotals = Object.entries(roll.typeTotals)
        .map(
            entry => `${entry[0]}: ${entry[1]}`
        )
</script>

<Text variant="secondary">
    {rollString}
    {#each typeTotals as type}
        <div>{type}</div>
    {/each}
</Text>
