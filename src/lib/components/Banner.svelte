<script>
    import { IconLib } from "$lib/index.js"
</script>

<nav> 
    <div class="banner">
        <article class="banner-content">
            <IconLib name="logo" size="2rem" />
        <div class="banner-links">
            <ul>
                <li> <a href="#Name"> Ilona </a></li>
                <li> <a href="#Status"> Online </a></li>
                <li> <a href="#Theme"> Verander thema </a></li>
            </ul>
            <img src="/images/ilona.png" alt="Logo" class="logo">
        </div>
        </article>
    </div>
    <div class="top-nav">
        <ul> 
            <li> <a href="#Home"> Home </a></li>
            <li> <a href="#Profile"> Mijn profiel </a></li>
            <li> <a href="#Work"> Mijn werk [amount] </a></li>
            <li> <a href="#Foto"> Foto </a></li>
            <li> <a href="#Blogs"> Blogs </a></li>
        </ul>
    </div>
</nav>
    

<style> 

nav {
    margin: 0;
    padding: 0;
}

.banner-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    background: #FED994;
    background: linear-gradient(179deg,rgba(254, 217, 148, 1) 1%, rgba(252, 221, 159, 1) 33%, rgba(255, 199, 94, 1) 95%, rgba(254, 217, 148, 1) 100%);
    border-radius: 5px;
    border: 1px solid #d3b275bc;
}

.banner-links {
    display: flex;
    align-items: center;
    gap: 1rem;

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;

        a {
            border-right: 2px solid black;
            padding-right: 1rem;
            text-decoration: none;
            color: black;
            cursor: pointer;
        }
    }
}
</style>