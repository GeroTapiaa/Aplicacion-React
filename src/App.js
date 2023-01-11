
import './App.css';
import { SideBar } from './components/SideBar';
import { ContentWrapped } from './components/ContentWrapped';

function App() {
  return (
    <div id='wrapper'>
      <SideBar/>
      <ContentWrapped/>
    </div>
  );
}

export default App;
