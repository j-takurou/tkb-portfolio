import Link from 'next/link';
import Image from 'next/image';
import { getAllProjects } from '@/lib/projects';

export default async function Home() {
  const projects = await getAllProjects();

  return (
    <>
      <header>
        <h1>My Portfolio</h1>
        <p>
          ここにキャッチコピーや自己紹介文を記載します。デザイン、IoT、ロボティクスなど幅広いプロジェクトを紹介しています。
        </p>
      </header>

      <section className="grid">
        {projects.map((p) => (
          <Link key={p.slug} href={`/projects/${p.slug}`} className="card">
            <Image
              src={p.thumbnail}
              alt={p.title}
              width={800}
              height={500}
              className=""
            />
            <div className="info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
