<script>
    import { IconLib } from "$lib/index.js"
    import { viewMode, currentLanguage, translations } from "$lib/stores.js"
    
    function toggleView() {
        viewMode.update(mode => mode === 'mobile' ? 'desktop' : 'mobile');
    }
    
    function toggleLanguage() {
        currentLanguage.update(lang => lang === 'nl' ? 'en' : 'nl');
    }
    
    $: t = translations[$currentLanguage];
</script>

<nav> 
    <div class="nav-wrapper">
        <div class="banner">
            <article class="banner-content">
                <IconLib name="logo" size="2rem" />
            <div class="banner-links">
                <ul>
                    <li> <a href="#Name"> {t.name} </a></li>
                    <li> <a href="#Status"> {t.status} </a></li>
                    <li> <a href="#Theme"> {t.changeTheme} </a></li>
                    <li> <button on:click={toggleLanguage} class="view-toggle"> {t.changeLanguage} </button></li>
                    <li> <button on:click={toggleView} class="view-toggle"> {$viewMode === 'mobile' ? 'Desktop View' : 'Mobile View'} </button></li>
                </ul>
                <img src="/images/ilona.jpg" alt="Logo" class="logo" height="40" width="40">
            </div>
            </article>
        </div>
        <div class="top-nav">
            <ul> 
                <li> <a href="#Home"> {t.home} </a></li>
                <li> <a href="#Profile"> {t.profile} </a></li>
                <li> <a href="#Work"> {t.work} </a></li>
                <li> <a href="#Foto"> {t.photo} </a></li>
                <li> <a href="#Blogs"> {t.blogs} </a></li>
            </ul>
        </div>
    </div>
</nav>
    

<style> 

nav {
    margin: 0;
    padding: 0;
    margin-top: 0.5rem;
}

.nav-wrapper {
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    padding: 0 0.5rem;
}

.banner-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 1rem;
    background: #FED994;
    background: linear-gradient(179deg,rgba(254, 217, 148, 1) 1%, rgba(252, 221, 159, 1) 33%, rgba(255, 199, 94, 1) 95%, rgba(254, 217, 148, 1) 100%);
    border-radius: 3px;
    border: 1px solid #d3b275bc;
    min-height: 50px;
}

.banner-links {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;

    ul {
        display: flex;
        gap: 1rem;
        list-style: none;
        margin: 0;
        flex-wrap: wrap;

        li {
            white-space: nowrap;
        }

        a {
            font-size: 10px;
            border-right: 1px solid black;
            padding-right: 1rem;
            text-decoration: none;
            color: black;
            cursor: pointer;
        }

        .view-toggle {
            background: none;
            border: none;
            border-right: 1px solid black;
            padding-right: 1rem;
            color: black;
            cursor: pointer;
            font-size: 10px;
            font-family: inherit;
            
            &:hover {
                text-decoration: underline;
            }
        }

        li:last-child a,
        li:last-child .view-toggle {
            border-right: none;
            padding-right: 0;
        }
    }

    .logo {
        border-radius: 50%;
        flex-shrink: 0;
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
        flex-wrap: wrap;

        a {
            text-decoration: none;
            color: white;
            cursor: pointer;
            padding: .2rem .4rem;
            font-size: clamp(10px, 2vw, 14px);
            white-space: nowrap;

            &:hover {
                box-shadow: inset 3px 18px 12px 0px rgba(0,0,0,0.1);
                border-radius: 2px;
            }
        }
    }
}

/* Responsive Design */
@media (max-width: 895px) {
    .banner-links .logo {
        display: none;
    }
}

@media (max-width: 768px) {
    .nav-wrapper {
        padding: 0 0.25rem;
    }

    .banner-content {
        padding: 0.5rem;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }

    .banner-links {
        width: 100%;
        justify-content: center;
        gap: 2.5rem;
        
        ul {
            gap: 0.5rem;
        }
    }

    .top-nav ul {
        justify-content: center;
        padding: .4rem;
        gap: .25rem;

        a {
            font-size: clamp(13px, 2vw, 18px);
        }
    }
}

@media (max-width: 480px) {
    .banner-content {
        padding: 0.25rem;
    }

    .banner-links {
        align-items: flex-start;
        width: 100%;
        gap: 0.25rem;
        
        ul {
            gap: 0.25rem;
            width: 100%;
        }
    }


}
</style>