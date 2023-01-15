import { Box } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {
  Comments,
  Groups,
  GroupPost,
  Login,
  Register,
  Dashboard,
} from "./views";
import ChatPage from "./components/Chat/pages/ChatPage";

import { useAuthContext } from "./hooks/useAuthContext";
function App() {
  const { user } = useAuthContext();

  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path={`/`} element={<Dashboard />} />
        <Route path={`/chats`} element={<ChatPage />} />
        <Route path={`/groups`} element={<Groups />} />
        <Route path={`/group/:id/posts`} element={<GroupPost />} />
        <Route path={`/post/:id`} element={user ? <Comments /> : <Login />} />
        <Route
          path={`/register`}
          element={!user ? <Register /> : <Dashboard />}
        />
        <Route path={`/login`} element={!user ? <Login /> : <Dashboard />} />
      </Routes>
    </Box>
  );
}

export default App;
