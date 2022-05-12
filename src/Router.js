import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile';
import About from './pages/WindowWidth';
import Links from './components/Links';
import Bank from './pages/Bank/Bank';
import Students from './pages/Students/Students';
import WindowWidth from './pages/WindowWidth';
import UseReducerHook1 from './pages/UseReducerHook1';
import UseReducerHook2 from './pages/UseReducerHook2';
import UserExample from './pages/UserExample/UserExample';
import ControlledInputs from './pages/ContorlledInputs/ControlledInputs';
import Users from './pages/API/Users(useAsync)';
import './redux/redux';

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
        {/* <Route path="/react" element={<Main />} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/windowWidth" element={<WindowWidth />} />
        <Route path="/useReducerHook1" element={<UseReducerHook1 />} />
        <Route path="/useReducerHook2" element={<UseReducerHook2 />} />
        <Route path="/userExample" element={<UserExample />} />
        <Route path="/controlledInputs" element={<ControlledInputs />} />
        <Route path="/bank" element={<Bank />} />
        <Route path="/students" element={<Students />} />
        {/* <Route path="/userExample" element={<UserExample />} /> */}
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/users" element={<Users />} />
        {/* <Route patj="/main" element={<Main />} /> */}
        {/* <Route path="/*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default Router;
