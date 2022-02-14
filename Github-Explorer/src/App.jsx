import { Counter } from '../public/components/Counter';
import { RepositoryList } from '../public/components/RepositoryList'
import './styles/style.css'

export function App(){
  return (
    <>
      <RepositoryList />
      <Counter />
    </>
  );
}