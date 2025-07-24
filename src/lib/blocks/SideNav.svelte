
<div class="side-nav">
    <div class="logo-container">
        <img src="/images/ilona.jpg" alt="Logo" class="logo" width="150" height="150">
    </div>
    <ul>
        <li> <a href="#Email"> Email </a></li>
        <li> <a href="#LinkedIn"> LinkedIn </a></li>
    </ul>
</div>

<style> 
    .side-nav {

        display: flex;
        flex-direction: column;
        background: #e9f3fc;
        border-radius: 8px 8px 1px 1px;
        box-shadow: 0px 2px 2px 2px rgba(0,0,0,0.1);
        padding: 1rem;

        ul {

            list-style: none;
            padding: 0;

            a {
                text-decoration: none;
                color: black;
                display: block;
            }
        }
    }

    .logo-container {

        img {
            width: 250px;
            height: 250px;
            object-fit: cover;
            box-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.282);
        }
    }

    @media (max-width: 1200px) {
        .logo-container img {
            width: 220px;
            height: 220px;
        }
        
        .side-nav {
            padding: 0.8rem;
        }
    }

    @media (max-width: 1024px) {
        .logo-container img {
            width: 200px;
            height: 200px;
        }
        
        .side-nav {
            padding: 0.7rem;
        }
    }

    @media (max-width: 900px) {
        .logo-container img {
            width: 180px;
            height: 180px;
        }
        
        .side-nav {
            padding: 0.6rem;
        }
        
        .side-nav ul {
            font-size: 0.9rem;
        }
    }

    @media (max-width: 768px) { 
        .side-nav {
            align-items: center;
            text-align: center;
            padding: 1rem;
        }
        
        .logo-container {
            order: -1; /* Ensures the logo stays at the top */
            margin-bottom: 1rem;
            
            img {
                width: 150px;
                height: 150px;
            }
        }
        
        ul {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 1rem;
            
            li {
                margin-bottom: 0.5rem;
            }
        }
    }

    @media (max-width: 480px) {
        .side-nav {
            padding: 0.8rem;
        }
        
        .logo-container {
            margin-bottom: 0.8rem;
            
            img {
                width: 120px;
                height: 120px;
            }
        }
        
        ul {
            font-size: 0.9rem;
        }
    }
</style>