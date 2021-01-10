<script>
    import {scale as animation} from "svelte/transition"
    import {
        Adornment,
        Avatar,
        Card,
        Text,
    } from "svelte-doric"

    import {history} from "../store.js"
</script>

<style>
    history-container {
        display: block;
    }
    div {
        margin: 4px;
    }

    card-content[history] {
        display: grid;
        grid-template-columns: min-content auto;
        grid-template-areas: "start-adornment content";
    }
</style>

<history-container>
    {#each $history as roll (roll.id)}
        <div transition:animation>
            <Card>
                <card-content history>
                    <Adornment position="start">
                        <Avatar background="var(--primary)">
                            {roll.total}
                        </Avatar>
                    </Adornment>
                    <roll-values>
                        <Text block variant="header" color="secondary">
                            {roll.string}
                        </Text>
                        {#each Object.entries(roll.typeTotals) as [type, total]}
                            <Text block>
                                {type}: {total}
                            </Text>
                        {/each}
                    </roll-values>
                </card-content>
            </Card>
        </div>
    {/each}
</history-container>
