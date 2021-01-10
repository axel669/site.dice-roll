<script>
    import {
        Avatar,
        Button,
        Card,
        Text,
    } from "svelte-doric"

    import DiceDisplay from "../dice-display/component.svelte"

    import {history} from "../store.js"

    export let dice

    const transition = (node, options) => {
        return {
            delay: 0,
            duration: 500,
            css: (t, u) => (`
                transform: rotateX(${t * 360}deg);
            `)
        }
    }

    let last = null
    // $: (dice, last = null)

    const roll = () => {
        last = dice.roll()
        history.update(
            hist => [last, ...hist]
        )
    }
</script>

{#key last?.id || 0}
    <div in:transition>
        <DiceDisplay {dice} roll={last}>
            <Button on:tap={roll} color="secondary">
                Roll
            </Button>
        </DiceDisplay>
    </div>
{/key}
