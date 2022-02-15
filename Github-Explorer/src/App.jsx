import { Counter } from './components/Counter';
import { RepositoryList } from './components/RepositoryList'
import './styles/style.css'

export function App(){
  return (
    <>
    <RepositoryList />
    <Counter />
    </>
  );
}