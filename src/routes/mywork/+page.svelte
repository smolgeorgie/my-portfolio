<script>
	import { workPages } from "$lib/data/workPages.js";
</script>

<section class="work-wrapper">
	<h2>My Work</h2>
	<ul class="blog-posts-grid">
		{#each workPages as work}
			<li class="blog-post-item">
				<article class="blog-post-card">
					<a href={work.url} class="blog-post-link" target="_blank" rel="noopener noreferrer">
						<img src={work.image} alt={work.title.en} class="blog-post-image" />
					</a>
				</article>
				<h3 class="blog-post-title">
					<a href={work.url} class="title-link" target="_blank" rel="noopener noreferrer">{work.title.en}</a>
				</h3>
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
	margin: 0 auto;
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
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
	overflow: hidden;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	aspect-ratio: 1;
	margin-bottom: 0.5rem;
}

.blog-post-card:hover {
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(0,0,0,0.15);
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
</style>
