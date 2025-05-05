import PortfolioGrid from '@/components/PortfolioGrid';
import { getAllProjects } from '@/lib/projects';

export default async function Home() {
  const projects = await getAllProjects();
  return (
    <>
      <header>
        <h1>My Portfolio</h1>
        <p>
          ここにキャッチコピーや自己紹介文を記載します。デザイン、IoT、
          ロボティクスなど幅広いプロジェクトを紹介しています。
        </p>
      </header>

      <PortfolioGrid projects={projects} />
    </>
  );
}
