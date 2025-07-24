<script>
    import { currentLanguage, translations } from "$lib/stores.js";
    import { getAllBlogPosts } from "$lib/blogUtils.js";
    
    $: t = translations[$currentLanguage];
    $: blogPosts = getAllBlogPosts();
</script>

<section class="work-wrapper">
    <h2>{t.mywork}</h2>
    <ul class="blog-posts-grid">
        {#each blogPosts as post (post.id)}
            <li class="blog-post-item">
                <article class="blog-post-card">
                    <a href="/blog/{post.id}" class="blog-post-link">
                        <img src={post.image} alt={post.title[$currentLanguage]} class="blog-post-image" />
                    </a>
                </article>
                <h3 class="blog-post-title">
                    <a href="/blog/{post.id}" class="title-link">{post.title[$currentLanguage]}</a>
                </h3>
                <time class="blog-post-date" datetime={post.date}>
                    {new Date(post.date).toLocaleDateString($currentLanguage === 'nl' ? 'nl-NL' : 'en-US')}
                </time>
            </li>
        {/each}
    </ul>
</section>

<style>
    .work-wrapper {
        max-width: 800px;
        padding: 0;
        outline: 2px solid #ccc;
        border-radius: 8px;
    }

    h2 {
        color: #333;
        padding-bottom: 0.5rem;
        margin-bottom: 1.5rem;
        background: #ffffff;
        background: linear-gradient(180deg,rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 19%, rgba(225, 237, 250, 1) 58%, rgba(233, 243, 252, 1) 96%);
        padding: 0.5rem 0.5rem 0.5rem 1rem;
        border-bottom: 1px solid #ccc;
        margin: 0;
    }

    .blog-posts-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        margin-top: 1rem;
        list-style: none;
        padding: 0 1rem 1rem 1rem;
        margin: 1rem 0 0 0;
    }

    .blog-post-item {
        display: flex;
        flex-direction: column;
    }

    .blog-post-card {
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        aspect-ratio: 1;
        margin-bottom: 0.5rem;
    }

    .blog-post-card:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .blog-post-link {
        text-decoration: none;
        color: inherit;
        display: block;
        height: 100%;
    }

    .blog-post-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }

    .blog-post-card:hover .blog-post-image {
        transform: scale(1.05);
    }

    .blog-post-title {
        font-size: 0.9rem;
        font-weight: 600;
        margin: 0 0 0.25rem 0;
        line-height: 1.2;
        text-align: center;
    }

    .title-link {
        text-decoration: none;
        color: #333;
        transition: color 0.2s ease;
    }

    .title-link:hover {
        color: #577ddb;
    }

    .blog-post-date {
        font-size: 0.65rem;
        color: #888;
        font-style: italic;
        margin: 0;
        text-align: center;
        display: block;
    }

    /* Mobile responsiveness */
    @media (max-width: 1200px) {
        .blog-posts-grid {
            gap: 0.8rem;
            padding: 0 0.8rem 0.8rem 0.8rem;
        }
        
        .blog-post-title {
            font-size: 0.85rem;
        }
        
        .blog-post-date {
            font-size: 0.6rem;
        }
    }

    @media (max-width: 1073px) {
        .blog-posts-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.8rem;
        }
    }

    @media (max-width: 1024px) {
        .blog-posts-grid {
            padding: 0 0.7rem 0.7rem 0.7rem;
        }
        
        h2 {
            padding: 0.4rem 0.4rem 0.4rem 0.8rem;
            font-size: 1.4rem;
        }
    }
    
    @media (max-width: 921px) {
        .blog-posts-grid {
            grid-template-columns: 1fr;
            gap: 0.8rem;
        }
    }

    @media (max-width: 900px) {
        .blog-posts-grid {
            padding: 0 0.6rem 0.6rem 0.6rem;
            gap: 0.6rem;
        }
        
        .blog-post-title {
            font-size: 0.8rem;
        }
        
        .blog-post-date {
            font-size: 0.55rem;
        }
        
        h2 {
            font-size: 1.3rem;
        }
    }

    @media (max-width: 768px) {
        .blog-posts-grid {
            padding: 0 1rem 1rem 1rem;
            gap: 1rem;
        }
        
        .blog-post-title {
            font-size: 0.9rem;
        }
        
        .blog-post-date {
            font-size: 0.65rem;
        }
        
        h2 {
            font-size: 1.5rem;
            padding: 0.5rem 0.5rem 0.5rem 1rem;
        }
    }
    
    @media (max-width: 480px) {
        .blog-posts-grid {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 0 0.8rem 0.8rem 0.8rem;
        }
        
        .blog-post-title {
            font-size: 0.85rem;
        }
        
        .blog-post-date {
            font-size: 0.6rem;
        }
        
        h2 {
            font-size: 1.3rem;
            padding: 0.4rem 0.4rem 0.4rem 0.8rem;
        }
    }
    
    @media (max-width: 320px) {
        .blog-posts-grid {
            grid-template-columns: 1fr;
            gap: 0.5rem;
            padding: 0 0.6rem 0.6rem 0.6rem;
        }
        
        .blog-post-title {
            font-size: 0.8rem;
        }
        
        .blog-post-date {
            font-size: 0.55rem;
        }
        
        h2 {
            font-size: 1.2rem;
            padding: 0.3rem 0.3rem 0.3rem 0.6rem;
        }
    }
</style>