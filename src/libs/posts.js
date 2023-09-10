import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Define the directory where the blog posts are stored.
const postsDirectory = path.join(process.cwd(), 'src', 'pages', 'blog');

export const getPostMeta = slug => {
  // Remove the .mdx extension from the slug if it exists.
  const realSlug = slug.replace(/\.mdx$/, '');

  // Construct the full path to the MDX file.
  const filePath = path.join(postsDirectory, `${realSlug}.mdx`);

  let fileContent;

  // Try to read the content of the MDX file.
  try {
    fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error);
    return null;  // Return null if there's an error reading the file.
  }

  // Parse the frontmatter from the MDX file content.
  const { data } = matter(fileContent);

  // Construct the metadata object for the post.
  const meta = {
    ...data,
    slug: realSlug,
  };

  return meta;
};

export const getAllPostsMeta = () => {
  let slugs;

  // Try to read the filenames in the posts directory.
  try {
    slugs = fs.readdirSync(postsDirectory).filter(filename => filename.endsWith('.mdx'));
  } catch (error) {
    console.error(`Error reading directory ${postsDirectory}:`, error);
    return [];  // Return an empty array if there's an error reading the directory.
  }

  // Get the metadata for each post.
  const posts = slugs.map(slug => getPostMeta(slug)).filter(post => post !== null);

  return posts;
};
