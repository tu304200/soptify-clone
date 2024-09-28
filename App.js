import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import DetailSong from "./components/DetailSong";
import ListSongs from "./components/ListSongs";
import { Songs } from "./context";
import DataSongs from './data/songs.json';
import Playing from './components/Playing';
function App() {
  return (
    <div className="App ">
      <Songs.Provider value={{ DataSongs}}>
        <Navbar/>
      <div className="grid grid-cols-3 bg-slate-700 h-screen-navbar-player overflow-hidden">
     
     
       {/* <div class="col-span-1 p-3 bg-slate-700"></div> */}

         {/* {span1} */}
        <DetailSong/>
        {/* span2  */}

        <ListSongs/>

      </div>
      <Playing/>
      </Songs.Provider>
    </div>
  );
}

export default App;
