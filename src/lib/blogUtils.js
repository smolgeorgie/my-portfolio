// Automatically import all blog posts from the blog/[slug] folder
const blogModules = import.meta.glob('/src/routes/blog/[slug]/*.js', { eager: true });

export function getAllBlogPosts() {
    const posts = [];
    
    for (const path in blogModules) {
        const module = blogModules[path];
        if (module.blogPost) {
            posts.push(module.blogPost);
        }
    }
    
    // Sort by date (newest first)
    return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function getBlogPost(id) {
    const posts = getAllBlogPosts();
    return posts.find(post => post.id === id);
}
