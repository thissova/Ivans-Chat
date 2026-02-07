import { Route, Routes } from 'react-router-dom';

function Main() {
  return (
    <Routes>
      <Route path="/about" element={''} />
      <Route path="/chats" element={''} />
      <Route path="/friends" element={''} />
      <Route path="/settings" element={''} />
    </Routes>
  );
}

export default Main;
