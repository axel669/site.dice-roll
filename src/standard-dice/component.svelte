<script>
    import {
        Button,
        Icon,
    } from "svelte-doric"
    import {writable} from "svelte/store"

    import Dice from "../dice-roller/component.svelte"
    import {dieRoll, diceRoll, bonus} from "../dice.js"

    const count = writable(1)
    count.inc = () =>
        count.update(count => count + 1)
    count.dec = () =>
        count.update(count => Math.max(count - 1, 1))

    const bonusValue = writable(0)
    bonusValue.inc = () =>
        bonusValue.update(b => b + 1)
    bonusValue.dec = () =>
        bonusValue.update(b => b - 1)

    const dieTypes = [4, 6, 8, 10, 12, 20, 100]
    $: diceOptions = dieTypes.map(
        size => {
            const parts = [dieRoll($count, size)]

            if ($bonusValue !== 0) {
                parts.push(
                    bonus($bonusValue)
                )
            }

            return diceRoll(...parts)
        }
    )
</script>

<style>
    dice-list {
        display: grid;
        grid-template-columns: 1fr;
        gap: 4px;
        padding: 4px;
    }

    count-controls {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
    }
    [bordered] {
        border: 1px solid var(--text-normal);
    }
    numeric-area {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    mod-controls {
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding: 4px;
        gap: 4px;
    }
</style>

<mod-controls>
    <count-controls bordered>
        <Button on:tap={count.dec}>
            <Icon name="remove" />
        </Button>
        <numeric-area>
            {$count}dX
        </numeric-area>
        <Button on:tap={count.inc}>
            <Icon name="add" />
        </Button>
    </count-controls>
    <count-controls bordered>
        <Button on:tap={bonusValue.dec}>
            <Icon name="remove" />
        </Button>
        <numeric-area>
            {$bonusValue < 0
                ? $bonusValue :
                `+${$bonusValue}`
            }
        </numeric-area>
        <Button on:tap={bonusValue.inc}>
            <Icon name="add" />
        </Button>
    </count-controls>
</mod-controls>

<dice-list>
    {#each diceOptions as dice}
        <Dice {dice} />
    {/each}
</dice-list>
