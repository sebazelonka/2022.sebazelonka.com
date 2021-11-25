<script>
	import { posts } from './index.json';
	import H1 from '../../lib/h1.svelte';

	// const slug = Object.keys(data)[0].split('.')[1].split('/')[1];
	// console.log(slug);
	console.log(posts);
</script>

<h1>Blog</h1>

{#each posts as { path, metadata: { title, date, tags } }, index}
	<a href={`blog/${path}`}>{title}</a>
	<p>{date}</p>
	<p>{title}</p>
	<p>{tags}</p>
	<p>{path}</p>
{/each}
