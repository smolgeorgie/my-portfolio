<script>
    import SideNav from '../blocks/SideNav.svelte';
    import Intro from '../blocks/Intro.svelte';
    import MyWork from '../blocks/MyWork.svelte';
    import { viewMode } from "$lib/stores.js";
</script>

<div class="page-wrapper">
    <section class="content-frame">
    <h1>Ilona van Oosbree</h1>
         <div class="content-container" class:desktop-on-mobile={$viewMode === 'desktop'}>
            <SideNav />
            <Intro />
            <MyWork />
        </div>
    </section>
</div>

<style>
    .page-wrapper {
        max-width: 1500px;
        margin: 0 auto;
        width: 100%;
        container-type: inline-size;
    }

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
        container-type: inline-size;
    }

    .content-container {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr;
        gap: 1rem;
        height: auto;
        padding: 1rem;
        box-sizing: border-box;
    }

    @container (max-width: 1200px) {
        .content-container {
            grid-template-columns: 0.8fr 2fr 2fr;
            gap: 0.8rem;
        }
    }

    @container (max-width: 1024px) {
        .content-container {
            grid-template-columns: 0.7fr 2fr 2fr;
            gap: 0.8rem;
        }
    }

    @container (max-width: 900px) {
        .content-container {
            grid-template-columns: 0.6fr 2fr 2fr;
            gap: 0.6rem;
        }
        
        h1 {
            font-size: 1.8rem;
            margin: 0.5rem 0 0.5rem 1rem;
        }
    }

    @container (max-width: 768px) {
        .content-container {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            height: auto;
            gap: 1rem;
        }
        
        h1 {
            font-size: 1.6rem;
            margin: 0.5rem 0 0.5rem 0.8rem;
        }
        
        /* Desktop view on mobile when toggled */
        .content-container.desktop-on-mobile {
            grid-template-columns: 0.6fr 2fr 2fr;
            grid-template-rows: none;
            font-size: 0.8rem;
            overflow-x: auto;
            height: auto;
            gap: 0.5rem;
        }
    }

    @container (max-width: 480px) {
        .content-frame {
            margin: 0.5rem;
        }
        
        .content-container {
            padding: 0.5rem;
        }
        
        h1 {
            font-size: 1.4rem;
            margin: 0.3rem 0 0.3rem 0.5rem;
        }
    }
</style>