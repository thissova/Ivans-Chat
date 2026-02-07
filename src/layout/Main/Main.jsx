import { Route, Routes } from 'react-router-dom';

const Main = () => {
  return (
    <Routes>
      <Route path="/about" element={''} />
      <Route path="/chats" element={''} />
      <Route path="/news" element={''} />
      <Route path="/settings" element={''} />
    </Routes>
  );
}

export default Main;