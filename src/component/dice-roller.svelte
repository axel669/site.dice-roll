<script>
    import {writable} from "svelte/store"

    import {
        Button,
        Card,
        Icon,
    } from "svelte-doric"
    import Roller from "./roller.svelte"

    const count = writable(1)
    const inc = () => count.update(count => count + 1)
    const dec = () => count.update(
        count => Math.max(1, count - 1)
    )
</script>

<style>
    dice-area {
        position: sticky;
        bottom: 0px;
        background: var(--background);
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: 40px;
        gap: 4px;
        padding: 4px;
        padding-bottom: 16px;
        border-top: 2px solid var(--text-normal);
    }

    count-area {
        grid-column: span 4;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 4px;
    }
    count-display {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: var(--text-size-title);
    }
</style>

<dice-area>
    <count-area>
        <Button variant="outline" color="primary" on:tap={dec}>
            <Icon name="remove" />
        </Button>
        <count-display>
            {$count}
        </count-display>
        <Button variant="outline" color="primary" on:tap={inc}>
            <Icon name="add" />
        </Button>
    </count-area>
    <Roller {count} size={4} />
    <Roller {count} size={6} />
    <Roller {count} size={8} />
    <Roller {count} size={10} />
    <Roller {count} size={12} />
    <Roller {count} size={20} />
    <Roller {count} size={100} />
</dice-area>
