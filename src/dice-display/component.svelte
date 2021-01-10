<script>
    import {
        Avatar,
        Button,
        Card,
        Text,
    } from "svelte-doric"

    import RollDisplay from "./roll-display.svelte"

    export let dice
    export let roll
</script>

<style>
    card-content[dice] {
        display: grid;
        grid-template-columns: min-content auto min-content;
        padding: 8px;
    }
    roll-info {
        padding-left: 4px;
    }
</style>

<Card>
    <card-content dice>
        <Avatar background="var(--primary)">
            {roll?.total ?? ""}
        </Avatar>
        <roll-info>
            <Text variant="header" block>
                {dice.string}
            </Text>
            {#if roll}
                <RollDisplay {roll} />
            {/if}
        </roll-info>
        <slot />
    </card-content>
</Card>
