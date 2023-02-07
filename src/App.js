import './App.css';
import Accessories from './pages/accessories';
import Features from './pages/Features';
import Header from './pages/header';
import Intro from './pages/Intro';
import More from './pages/more';

function App() {
  return (
    <div className="App">
      <Header/>
      <Intro button={true} title='Apple Beats Features' disc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore doloremque temporibus nisi eligendi ea voluptate id? Quisquam eveniet voluptatibus ipsam natus cumque?'/>
      <Features/>
      <Intro button={false} title='Headphones Accessories' disc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore doloremque temporibus nisi eligendi ea voluptate id? Quisquam eveniet voluptatibus ipsam natus cumque?'/>
      <Accessories/>
      <Intro button={false} title='Beats Others Models' disc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum dolore doloremque temporibus nisi eligendi ea voluptate id? Quisquam eveniet voluptatibus ipsam natus cumque?'/>
      <More/>
    </div>
  );
}

export default App;
