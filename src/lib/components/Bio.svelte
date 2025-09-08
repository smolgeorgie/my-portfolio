<script>
    import { currentLanguage, translations } from "$lib/stores.js";

    $: t = translations[$currentLanguage];
</script>

<section class="bio-container">
    <h2> {t.whowhatwhere} </h2>
    <div class="description-bio">
        <p> {t.bio} </p>
        </div>
</section>
        

<style> 
    .bio-container {
        max-width: 100%;
        padding: 0;
        outline: 2px solid #ccc;
        border-radius: 8px 8px 0 0;
        box-sizing: border-box;
    }

    .description-bio {
        border-radius: 8px;
        padding: 0 1rem 1rem 1rem;
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