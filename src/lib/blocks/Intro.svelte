<script>
    import Music from '../molecules/Music.svelte';
</script>

<main>
    <section class="intro">
        <h2> Feit </h2>
        <Music />
        <ul>
            <li> <b> Naam: </b> Ilona </li>
            <li> <b> Leeftijd: </b> 24 </li>
            <li> <b> Woonplaats: </b> Regio Utrecht en Rotterdam </li>
            <li> <b> Opleiding: </b> HBO AD Frontend Design and Development </li>
            <li> <b> Connectie: </b> [ilonavanoosbree linkedin] </li>
        </ul>
        <ul> 
            <li> <b> Bedrijf: </b> Paer Studio </li>
            <li> <b> Functie: </b> Frontend Developer </li>
            <li> <b> Passies: </b> Programmeren </li>
        </ul>
        

    </section>
</main>

<style>
    .intro {
        padding: .1rem 1rem .1rem 1rem;
        max-width: 800px;
        margin: 0 auto;
        outline: 2px solid #ccc;
        border-radius: 8px;
    }
    
    ul {
        list-style: none;
        padding: 0;
        margin-bottom: 2rem;
    }
    
    li {
        margin-bottom: 0.2rem;
        font-size: 1.1rem;
    }
    
    h2 {
        color: #333;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
    }
</style>