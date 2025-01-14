import ClientHome from './components/ClientHome'
import { getLatestProjects } from '../lib/github'


export default async function Home() {
  const projects = await getLatestProjects('qinisonhlakaniphoxulu')

  return <ClientHome projects={projects} />
}
