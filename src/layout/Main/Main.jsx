import { Route, Routes } from 'react-router-dom';
import AboutPage from '../../pages/AboutPage/AboutPage';
import FriendsPage from '../../pages/FriendsPage/FriendsPage';
import SettingsPage from '../../pages/SettingsPage/SettingsPage';

const Main = () => {
  return (
    <Routes>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/chats" element={<FriendsPage />} />
      <Route path="/friends" element={<FriendsPage />} />
      <Route path="/settings" element={<SettingsPage />} />
    </Routes>
  );
};

export default Main;
