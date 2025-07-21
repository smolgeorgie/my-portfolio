<script>
    import Music from '../molecules/Music.svelte';
    import { currentLanguage, translations } from "$lib/stores.js";
    
    $: t = translations[$currentLanguage];
</script>

<section class="intro-container">
    <h2> {t.facts} </h2>
        <div class="intro">
        <Music />
        <ul>
            <li> <img src="/gifs/smiley_hollandyell.gif" alt="Smiley Holland YelL emoji" class="smiley"> </li>
            <li> <b> {t.name_label} </b> {t.name} </li>
            <li> <b> {t.age} </b> 24 </li>
            <li> <b> {t.location} </b> {t.amsterdam_rotterdam} </li>
        </ul>
        <ul> 
            <li> <b> {t.company} </b> {t.paer_studio} </li>
            <li> <b> {t.position} </b> {t.frontend_developer} </li>
            <li> <b> {t.education} </b> {t.education_full} </li>
            <li> <b> {t.schools} </b> {t.schools_full} </li>
            <li> <b> {t.passions} </b> {t.passions_list} </li>
        </ul>
        </div>
</section>

<style>

    .intro-container {
        max-width: 800px;
        padding: 0;
        outline: 2px solid #ccc;
        border-radius: 8px;
    }
    .intro {
        border-radius: 8px;
        padding: 0 1rem 1rem 1rem;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }

    ul:first-of-type {
        padding-bottom: 1.5rem;
        border-bottom: 1px solid #7dc382;
    }
    
    li {
        margin-bottom: 0.2rem;
        font-size: 16px;
    }
    
    h2 {
        color: #333;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
        background: #ffffff;
        background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 19%, rgba(225, 237, 250, 1) 58%, rgba(233, 243, 252, 1) 96%);
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border-bottom: 1px solid #ccc;
        margin: 0;
    }
</style>