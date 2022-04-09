import useWindowWidth from './hooks/useWindowWidth';
import logo from './logo.svg';
import useHasMounted from './hooks/useHasMounted';
import './Main.css';

function React() {
  const width = useWindowWidth();
  const hasMountedFromHook = useHasMounted();

  console.log(hasMountedFromHook)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{margin:'4vh'}}>Resize the browser to see the width change</div>
        <div>This is the current width: {width+` `}px</div>
      </header>
    </div>
  );
}

export default React;
