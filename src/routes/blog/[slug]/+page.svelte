<script>
    import { currentLanguage } from '$lib/stores.js';
    import Banner from '$lib/components/Banner.svelte';
    export let data;
    
    $: post = data.post;
</script>

<svelte:head>
    <title>{post.title[$currentLanguage]} - Ilona van Oosbree</title>
</svelte:head>

<Banner />

<div class="blog-post-page">
    <div class="blog-header">
        <img src={post.image} alt={post.title[$currentLanguage]} class="blog-hero-image" />
        <div class="blog-meta">
            <time class="blog-date">{new Date(post.date).toLocaleDateString($currentLanguage === 'nl' ? 'nl-NL' : 'en-US')}</time>
        </div>
    </div>
    
    <article class="blog-content">
        {@html post.content[$currentLanguage]}
    </article>
    
    <div class="blog-navigation">
        <a href="/" class="back-link">← Back to portfolio</a>
    </div>
</div>

<style>
    .blog-post-page {
        max-width: 800px;
        margin: 0 auto;
        padding: 2rem;
        background: white;
        min-height: 100vh;
    }
    
    .blog-header {
        margin-bottom: 2rem;
    }
    
    .blog-hero-image {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .blog-meta {
        text-align: center;
    }
    
    .blog-date {
        color: #666;
        font-style: italic;
        font-size: 0.9rem;
    }
    
    .blog-content {
        line-height: 1.6;
        color: #333;
    }
    
    .blog-content :global(h1) {
        color: #577ddb;
        margin-bottom: 1rem;
    }
    
    .blog-content :global(h2) {
        color: #333;
        margin-top: 2rem;
        margin-bottom: 1rem;
        border-bottom: 2px solid #e9f3fc;
        padding-bottom: 0.5rem;
    }
    
    .blog-content :global(p) {
        margin-bottom: 1rem;
    }
    
    .blog-content :global(ul) {
        margin: 1rem 0;
        padding-left: 2rem;
    }
    
    .blog-content :global(li) {
        margin-bottom: 0.5rem;
    }
    
    .blog-content :global(img) {
        display: block;
        margin: 2rem auto;
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }
    
    .blog-navigation {
        margin-top: 3rem;
        padding-top: 2rem;
        border-top: 1px solid #eee;
        max-width: 800px;
        margin: 3rem auto 0 auto;
        padding: 2rem 1rem 0 1rem;
    }
    
    .back-link {
        color: #577ddb;
        text-decoration: none;
        font-weight: 500;
    }
    
    .back-link:hover {
        text-decoration: underline;
    }
    
    @media (max-width: 768px) {
        .blog-post-page {
            padding: 1rem;
        }
        
        .blog-hero-image {
            height: 200px;
        }
    }
</style>
