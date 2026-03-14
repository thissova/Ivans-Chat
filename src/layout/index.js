import Background from './../components/Background/Background';
import Main from './Main/Main';
import Sidebar from './Sidebar/Sidebar';

function Layout() {
  let a = 10
  return (
    <main style={{ display: 'flex' }}>
      <Background />
      <Sidebar />
      <Main />
    </main>
  );
}

export default Layout;
