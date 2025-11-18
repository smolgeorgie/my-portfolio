<script>
    import Banner from "$lib/components/Banner.svelte";
	import { workPages } from "$lib/data/workPages.js";
</script>

<Banner />
<section class="work-wrapper">
	<h2>My Work</h2>
	<ul class="blog-posts-grid">
		{#each workPages as work}
			<li class="blog-post-item">
				<article class="blog-post-card">
					<a href={work.blogPost ? `/blog/${work.blogPost}` : work.url} class="blog-post-link" target={work.url ? "_blank" : undefined} rel={work.url ? "noopener noreferrer" : undefined}>
						<img src={work.image} alt={work.title.en} class="blog-post-image" />
					</a>
				</article>
				<h3 class="blog-post-title">
					<a href={work.blogPost ? `/blog/${work.blogPost}` : work.url} class="title-link" target={work.url ? "_blank" : undefined} rel={work.url ? "noopener noreferrer" : undefined}>{work.title.en}</a>
				</h3>
				{#if work.tag}
					<span class="blog-post-tag">{work.tag}</span>
				{/if}
			</li>
		{/each}
	</ul>
</section>

<style>
.work-wrapper {
	max-width: 90%;
	padding: 0;
	outline: 2px solid #ccc;
	border-radius: 8px;
	margin: 1rem auto;
}
@media (min-width: 1600px) {
	.work-wrapper {
		max-width: 1450px;
	}
}

h2 {
	color: #333;
	padding-bottom: 0.5rem;
	margin-bottom: 1.5rem;
	background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgba(225,237,250,1) 58%,rgba(233,243,252,1) 96%);
	padding: 0.5rem 0.5rem 0.5rem 1rem;
	border-bottom: 1px solid #ccc;
	margin: 0;
}

.blog-posts-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
	list-style: none;
	padding: 0 1rem 1rem 1rem;
	margin: 1rem 0 0 0;
	justify-content: start;
}

.blog-post-item {
	display: flex;
	flex-direction: column;
}

.blog-post-card {
	background: white;
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	aspect-ratio: 1;
	margin-bottom: 0.5rem;
	width: 100%;
	height: 0;
	padding-bottom: 100%;
	position: relative;
}

.blog-post-card:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.blog-post-link {
	text-decoration: none;
	color: inherit;
	display: block;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.blog-post-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	transition: transform 0.3s ease;
	display: block;
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

/* Tag style */
.blog-post-tag {
	display: inline-block;
	align-self: center;
	margin-top: 0.25rem;
	padding: 0.2em 0.8em;
	font-size: 0.75rem;
	font-weight: 500;
	color: #3560a9;
	background: #e7f0fa;
	border-radius: 999px;
	letter-spacing: 0.03em;
}
</style>
