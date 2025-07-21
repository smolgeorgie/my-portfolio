<script>
    import Music from '../molecules/Music.svelte';
</script>

<section class="intro-container">
    <h2> Feit </h2>
        <div class="intro">
        <Music />
        <ul>
            <li> <b> Naam: </b> Ilona </li>
            <li> <b> Leeftijd: </b> 24 </li>
            <li> <b> Woonplaats: </b> Amsterdam & Rotterdam </li>
        </ul>
        <ul> 
            <li> <b> Bedrijf: </b> Paer Studio </li>
            <li> <b> Functie: </b> Frontend Developer </li>
            <li> <b> MBO / HBO / Universiteit: </b> HBO Frontend Design and Development & MBO Marketing, Journalistiek en Communicatie </li>
            <li> <b> Scholen </b> Hogeschool van Amsterdam & MBO College Utrecht </li>
            <li> <b> Passies: </b> Programmeren, Designen, Fotografie </li>
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
        background: #e9f3fc;;
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        margin: 0;
    }
</style>