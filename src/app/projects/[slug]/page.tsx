// app/projects/[slug]/page.tsx
import { notFound } from 'next/navigation';
import Navbar2 from '@/app/Components/nav2';
import WebAppProjects from '@/app/Components/Projects/web-app';
import CliProjects from '@/app/Components/Projects/typescript'; 
import StreamlitAppProjects from '@/app/Components/Projects/streamlit';
import AgentsProjects from '@/app/Components/Projects/openai-agents';

interface PageProps {
  params: { slug: string };
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = params;

  let content;

  switch (slug) {
    case 'cli-based':
    case 'cli-based':
        content = <CliProjects />; 
        break;
      case 'web-app':
        content = <WebAppProjects />;
        break;
    case 'streamlit':
      content = <StreamlitAppProjects/>;
      break;
    case 'openai-sdk':
      content = <AgentsProjects/>;
      break;
    default:
      notFound();
  }

  return (
    <>
      <Navbar2 />
      {content}
    </>
  );
}
