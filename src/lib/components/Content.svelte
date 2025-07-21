<script>
    import SideNav from '../blocks/SideNav.svelte';
    import Intro from '../blocks/Intro.svelte';
    import MyWork from '../blocks/MyWork.svelte';
</script>

<div class="content-container">
    <SideNav />
    <Intro />
    <MyWork />
</div>

<style>
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
    }
</style>