<script>
    import {
        AppStyle,
        Baseline as baseline,
        TronTheme as theme,

        Adornment,
        Button,
        TitleBar,
        Tabs,
        TabPanel,
        TabList,
        TabLabel,
    } from "svelte-doric"

    import StandardDice from "./standard-dice/component.svelte"
    import History from "./history/component.svelte"

    import DiceDisplay from "./dice-display/component.svelte"

    import {dieRoll, bonus, diceRoll} from "./dice.js"

    const dice = diceRoll(
        dieRoll(1, 6, "force"),
        dieRoll(1, 4, "force"),
        bonus(6, "force"),
        dieRoll(2, 4, "fire"),
    )
    const test = dice.roll()

    const roll = () => history.update(
        hist => [dice.roll(), ...hist]
    )

    let selectedTab = "standard"
</script>

<style>
    app-layout {
        display: grid;
        grid-template-areas:
            "."
            "panel"
            "label"
        ;
        grid-template-rows: min-content auto min-content;
        min-height: 100%;
    }

    tab-controls {
        position: sticky;
        bottom: 0px;
        z-index: 10;
        background-color: var(--background);
    }
</style>

<AppStyle {baseline} {theme} />

<app-layout>
    <TitleBar sticky>
        <title-text>
            D&D Dice Roller
        </title-text>
    </TitleBar>

    <Tabs bind:selectedTab>
        <tab-controls>
            <TabList>
                <TabLabel value="standard">
                    Standard
                </TabLabel>
                <TabLabel value="custom">
                    Custom
                </TabLabel>
                <TabLabel value="history">
                    History
                </TabLabel>
            </TabList>
        </tab-controls>

        <TabPanel value="standard">
            <StandardDice />
        </TabPanel>

        <TabPanel value="custom">
            Under Construction
        </TabPanel>

        <TabPanel value="history">
            <History />
        </TabPanel>
    </Tabs>
</app-layout>
