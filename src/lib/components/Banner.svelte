<script>
    import { IconLib } from "$lib/index.js"
    
    let viewMode = 'mobile'; 
    
    function toggleView() {
        viewMode = viewMode === 'mobile' ? 'desktop' : 'mobile';
    }
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
                <li> <button on:click={toggleView} class="view-toggle"> {viewMode === 'mobile' ? 'Desktop View' : 'Mobile View'} </button></li>
            </ul>
            <!-- <img src="/images/ilona.png" alt="Logo" class="logo"> -->
        </div>
        </article>
    </div>
    <div class="top-nav">
        <ul> 
            <li> <a href="#Home"> Home </a></li>
            <li> <a href="#Profile"> Mijn profiel </a></li>
            <li> <a href="#Work"> Mijn werk </a></li>
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
    border-radius: 3px;
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
        margin: 0;

        a {
            border-right: 2px solid black;
            padding-right: 1rem;
            text-decoration: none;
            color: black;
            cursor: pointer;
        }

        .view-toggle {
            background: none;
            border: none;
            border-right: 2px solid black;
            padding-right: 1rem;
            color: black;
            cursor: pointer;
            font-size: inherit;
            font-family: inherit;
            
            &:hover {
                text-decoration: underline;
            }
        }
    }
}

.top-nav {

    background: #6F98BA;
    background: linear-gradient(180deg,rgba(111, 152, 186, 1) 0%, rgba(159, 178, 201, 1) 19%, rgba(111, 152, 186, 1) 45%, rgba(111, 152, 186, 1) 96%);
    border-radius: 3px;
    ul {
        display: flex;
        gap: .5rem;
        list-style: none;
        padding: .4rem .4rem .4rem .8rem;
        margin-top: .2em;

        a {
            text-decoration: none;
            color: white;
            cursor: pointer;
            padding: .2rem .4rem;

            &:hover {
                box-shadow: inset 3px 18px 12px 0px rgba(0,0,0,0.1);
                border-radius: 2px;
            }
        }
    }
}
</style>