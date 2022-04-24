import logo from '../logo.svg'
import useWindowWidth from '../hooks/useWindowWidth';
import useHasMounted from '../hooks/useHasMounted';

const WindowWidth = () => {
  const width = useWindowWidth();
  const hasMountedFromHook = useHasMounted();

  console.log(hasMountedFromHook)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <div style={{margin:'4vh'}}>Resize the browser to see the width change</div>
        <div>Current width: {width+` `}px</div>
      </header>
    </div>)
};

export default WindowWidth;
