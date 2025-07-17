<script>
    import Music from '../molecules/music.svelte';
</script>

<main>
    <section class="intro">
        <h2> Ilona van Oosbree </h2>
        <ul>
            <li> <b> Naam: </b> Ilona </li>
            <li> <b> Leeftijd: </b> 24 jaar </li>
            <li> <b> Woonplaats: </b> Regio Utrecht en Rotterdam </li>
            <li> <b> Opleiding: </b> HBO AD Frontend Design and Development </li>
        </ul>
        <ul> 
            <li> <b> Bedrijf: </b> Paer Studio </li>
            <li> <b> Functie: </b> Frontend Developer </li>
            <li> <b> Passies: </b> Programmeren </li>
        </ul>
        
        <!-- Nostalgic Music Player -->
        <div class="music-section">
            <Music />
        </div>
    </section>
</main>

<style>
    .intro {
        padding: 2rem;
        max-width: 800px;
        margin: 0 auto;
    }
    
    .music-section {
        margin-top: 3rem;
        text-align: center;
    }

    
    ul {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    li {
        margin-bottom: 0.5rem;
        font-size: 1.1rem;
    }
    
    h2 {
        color: #333;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }
</style>