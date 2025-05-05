import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { getAllProjects, getProjectBySlug } from '@/lib/projects';

export async function generateStaticParams() {
  const projects = await getAllProjects();
  return projects.map(({ slug }) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return notFound();

  return (
    <article style={{ maxWidth: 800, margin: '0 auto', padding: '2rem 1rem' }}>
      <Image
        src={project.hero}
        alt={project.title}
        width={1200}
        height={600}
        style={{ borderRadius: 12, marginBottom: '1.5rem', width: '100%' }}
      />
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>{project.title}</h1>
      <MDXRemote source={project.body} />
    </article>
  );
}
