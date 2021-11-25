const data = import.meta.globEager('./*.md');

export const posts = [];

for (const el in data) {
	const path = el.replace('.md', '').replace('./', '');
	const metadata = data[el].metadata;
	posts.push({ path, metadata });
}
