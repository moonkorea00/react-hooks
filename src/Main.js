import useWindowWidth from './hooks/useWindowWidth';
import logo from './logo.svg';
import useHasMounted from './hooks/useHasMounted';
import './Main.css';
import Example6 from './components/Example6'
import UseRefHook from './components/UseRefHook';
import UseMemoHook from './components/UseMemoHook';
import UseReducerHook1 from './components/UseReducerHook1';
import UseReducerHook2 from './components/UseReducerHook2'
function React() {
  const width = useWindowWidth();
  const hasMountedFromHook = useHasMounted();

  console.log(hasMountedFromHook)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Example6 />
        <UseReducerHook1 />
        <UseReducerHook2/>
        <UseMemoHook />
        <UseRefHook />
        <div style={{margin:'4vh'}}>Resize the browser to see the width change</div>
        <div>Current width: {width+` `}px</div>
      </header>
    </div>
  );
}

export default React;
