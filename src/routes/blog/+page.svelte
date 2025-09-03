<script>
import { getAllBlogPosts } from '$lib/blogUtils.js';
import { currentLanguage } from '$lib/stores.js';

const posts = getAllBlogPosts();
</script>

<svelte:head>
    <title>Blogs - Ilona van Oosbree</title>
</svelte:head>

<div class="blogs-list-page">
    <h1>Blogs</h1>
    {#if posts.length === 0}
        <p>No blog posts found.</p>
    {:else}
        <ul class="blog-list">
            {#each posts as post}
                <li class="blog-list-item">
                    <a href={`/blog/${post.id}`} class="blog-link">
                        <img src={post.image} alt={post.title[$currentLanguage]} class="blog-thumb" />
                        <div>
                            <h2>{post.title[$currentLanguage]}</h2>
                            <p>{post.description[$currentLanguage]}</p>
                            <time>{new Date(post.date).toLocaleDateString($currentLanguage === 'nl' ? 'nl-NL' : 'en-US')}</time>
                        </div>
                    </a>
                </li>
            {/each}
        </ul>
    {/if}
</div>

<style>
.blogs-list-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    background: white;
    min-height: 100vh;
}
.blog-list {
    list-style: none;
    padding: 0;
}
.blog-list-item {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
}
.blog-link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
}
.blog-thumb {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
    margin-right: 1rem;
}
</style>
