
<div class="side-nav">
    <div class="logo-container">
        <img src="/images/ilona1.jpg" alt="Logo" class="logo" width="150" height="150">
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
        }
    }

    @media (max-width: 768px) { 
        .side-nav {
            align-items: center;
            text-align: center;
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
            
            li {
                margin-bottom: 0.5rem;
            }
        }
    }
</style>