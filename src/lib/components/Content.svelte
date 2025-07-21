<script>
    import SideNav from '../blocks/SideNav.svelte';
    import Intro from '../blocks/Intro.svelte';
    import MyWork from '../blocks/MyWork.svelte';
    import { viewMode } from "$lib/stores.js";
</script>

<section class="content-frame">
<h1>Ilona van Oosbree</h1>
     <div class="content-container" class:desktop-on-mobile={$viewMode === 'desktop'}>
        <SideNav />
        <Intro />
        <MyWork />
    </div>
</section>

<style>
    h1{
        text-align: left;
        padding: 0;
        margin: 0.5rem 0 0.5rem 1.5rem;
        font-size: 2rem;
        font-weight: lighter;
        color: #577ddb;
    }

    .content-frame {
        border: 1px solid #ccc;
        border-radius: 3px;
        margin: 1rem;
    }

    .content-container {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        gap: 1rem;
        height: 100vh;
        padding: 1rem;
        box-sizing: border-box;
    }

    @media (max-width: 768px) {
        .content-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            height: auto;
        }
        
        /* Desktop view on mobile when toggled */
        .content-container.desktop-on-mobile {
            grid-template-columns: 1fr 2fr 2fr;
            grid-template-rows: none;
            font-size: 0.8rem;
            overflow-x: auto;
            height: 100vh;
        }
    }
</style>