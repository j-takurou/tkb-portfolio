'use client';

import { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import type { ProjectMeta } from '@/lib/projects';

type Props = { projects: ProjectMeta[] };

export default function PortfolioGrid({ projects }: Props) {
  const [open, setOpen] = useState<ProjectMeta | null>(null);

  return (
    <>
      <section className="grid">
        {projects.map((p) => (
          <article
            key={p.slug}
            className="card"
            onClick={() => setOpen(p)}
            role="button"
            aria-label={`${p.title} を詳しく見る`}
          >
            <Image src={p.thumbnail} alt={p.title} fill />
            <div className="info">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
            </div>
          </article>
        ))}
      </section>

      {/* モーダル */}
      {open && (
        <aside className="modal open" onClick={() => setOpen(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <Image
                src={open.hero}
                alt={open.title}
                width={1200}
                height={600}
              />
              <span
                className="close-btn"
                onClick={() => setOpen(null)}
              >
                ×
              </span>
            </div>
            <div className="modal-body">
              <h2>{open.title}</h2>
              <p>{open.description}</p>
              {/* TODO: もっと詳しいページへリンクしたい場合、飛ばすことも可能 */}
              {/* <p style={{ marginTop: '1rem' }}>
                <Link href={`/projects/${open.slug}`}>詳細ページへ →</Link>
              </p> */}
            </div>
          </div>
        </aside>
      )}
    </>
  );
}
