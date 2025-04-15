import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { LayoutGrid, Users, Calendar as CalendarIcon, Settings as SettingsIcon } from 'lucide-react';
import Board from './pages/Board';
import Team from './pages/Team';
import Calendar from './pages/Calendar';
import Settings from './pages/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50 flex">
        {/* Sidebar */}
        <nav className="w-16 md:w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h1 className="text-xl font-bold text-gray-800 hidden md:block">Project Hub</h1>
          </div>
          <div className="flex-1 p-4">
            <div className="space-y-2">
              <Link
                to="/"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                <LayoutGrid size={20} />
                <span className="hidden md:inline">Board</span>
              </Link>
              <Link
                to="/team"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                <Users size={20} />
                <span className="hidden md:inline">Team</span>
              </Link>
              <Link
                to="/calendar"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                <CalendarIcon size={20} />
                <span className="hidden md:inline">Calendar</span>
              </Link>
              <Link
                to="/settings"
                className="flex items-center space-x-3 text-gray-700 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                <SettingsIcon size={20} />
                <span className="hidden md:inline">Settings</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Board />} />
            <Route path="/team" element={<Team />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;