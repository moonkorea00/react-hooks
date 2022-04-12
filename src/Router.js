import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import About from './pages/About';
import Footer from './pages/footer';
import NotFound from './pages/NotFound';
import Links from './components/Links';
import Main from './Main';

function Router() {
  return (
    // react router dom은 컴포넌트를 제공한다
    // route 컴포넌트에 경로(path)와 컴포넌트를 설정한다
    // BrowserRouter로 Route들을 감싸준다
    // 브라우저에서 요청한 경로에 Route의 path가 **들어있으면** 해당 컴포넌트 렌더링
    // '/'는 매칭 알고리즘을 통해서 '/' 뒤에 오는 모든 것들을 렌더링
    // 따라서 "path="/" exact" props를 전달

    // path="*"로 설정시 일치하는 path가 없으면 not found 렌더링
    <BrowserRouter>
      <Links />
      <Routes>
        <Route path="/react" element={<Main />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/" exact element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
