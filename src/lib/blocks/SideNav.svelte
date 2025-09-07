<div class="side-nav">
    <div class="logo-container">
        <img src="/images/ilona.jpg" alt="Logo" class="logo" width="150" height="150">
    </div>
    <ul>
        <li> <a href="mailto:ilonavanoosbree@live.nl?subject=Hello%20Ilona&body=I%20would%20like%20to%20get%20in%20touch."> Email </a></li>
        <li> <a href="#LinkedIn"> LinkedIn </a></li>
    </ul>
</div>

<style>
.side-nav {
    display: flex;
    flex-direction: column;
    background: #e9f3fc;
    border-radius: 8px 8px 1px 1px;
    padding: 0.6rem;
    align-items: center;
    text-align: center;
}

.logo-container {
    width: 100%;
    margin-bottom: 1.2em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo-container img {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
    max-width: 100%;
    max-height: 40vw;
    object-fit: cover;
}

ul {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: clamp(0.9rem, 2vw, 1.1rem);
    list-style: none;
    padding: 0;
    margin: 0;
}

ul li {
    width: 100%;
    margin-bottom: 0.5em;
}

ul a {
    width: 100%;
    text-decoration: none;
    color: black;
    display: block;
    padding: 0.3em 0.8em;
    border-radius: 4px;
    transition: background 0.2s;
    box-sizing: border-box;
}

ul a:hover {
    background: #d6e7fa;
}
</style>