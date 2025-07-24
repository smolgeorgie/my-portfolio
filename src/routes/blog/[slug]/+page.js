import { getBlogPost } from '$lib/blogUtils.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
    const post = getBlogPost(params.slug);
    
    if (!post) {
        throw error(404, 'Blog post not found');
    }
    
    return {
        post
    };
}
