<script>
    import {scale as animation} from "svelte/transition"
    import {
        Adornment,
        Avatar,
        Card,
        Text,
    } from "svelte-doric"

    import DiceDisplay from "../dice-display/component.svelte"

    import {history} from "../store.js"
</script>

<style>
    history-container {
        display: grid;
        padding: 4px;
        gap: 4px;
    }
</style>

<history-container>
    {#each $history as roll (roll.id)}
        <DiceDisplay dice={roll} {roll} />
    {/each}
</history-container>
