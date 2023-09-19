import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './routes/Home';
import Group from './routes/Group';
import Detail from './routes/Detail';
import Search from './routes/Search';
import Navbar from './components/Navbar';

function App() {
  return (
    <RecoilRoot>
      <Router>
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path={`/movie/:id`} element={<Detail />} />
          <Route path={`/page/:group/:page`} element={<Group />} />
          <Route path={`/search/:search`} element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </RecoilRoot>
  );
}

export default App;
