import { Routes, Route } from "react-router-dom";

import Welcome from "./pages/Welcome";
import Name from "./pages/Name";
import MindMaze from "./minigames/MindMaze";
import Grade8Topics from "./pages/Grade8Topics";
import WhileIntro from "./pages/tasks/while/WhileIntro";
import TaskRouter from "./pages/tasks/while/TaskRouter";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/name" element={<Name />} />
      <Route path="/minigame" element={<MindMaze />} />
      <Route path="/grade8/topics" element={<Grade8Topics />} />
      <Route path="/grade8/while-intro" element={<WhileIntro />} />
      <Route path="/grade8/while/:step" element={<TaskRouter />} />
    </Routes>
  );
}