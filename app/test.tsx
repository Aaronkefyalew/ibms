import { useState } from "react"

const AdminPage = () => {
  // State for active section
  const [active, setActive] = useState("dashboard")

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      
      {/* 🔹 Sidebar Navigation */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h2 className="text-2xl font-bold mb-8">⚡ Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <button
            onClick={() => setActive("dashboard")}
            className={`text-left px-4 py-2 rounded-lg ${
              active === "dashboard" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            📊 Dashboard
          </button>
          <button
            onClick={() => setActive("users")}
            className={`text-left px-4 py-2 rounded-lg ${
              active === "users" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            👥 Users
          </button>
          <button
            onClick={() => setActive("reports")}
            className={`text-left px-4 py-2 rounded-lg ${
              active === "reports" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            📑 Reports
          </button>
          <button
            onClick={() => setActive("settings")}
            className={`text-left px-4 py-2 rounded-lg ${
              active === "settings" ? "bg-gray-700" : "hover:bg-gray-800"
            }`}
          >
            ⚙️ Settings
          </button>
        </nav>
      </aside>

      {/* 🔹 Main Content Area */}
      <main className="flex-1 p-8">
        {/* Top Bar */}
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold capitalize">{active}</h1>
          <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
            Logout
          </button>
        </header>

        {/* Section Content */}
        {active === "dashboard" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">📈 Site Visits</h2>
              <p className="text-gray-600">1,230 today</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-lg font-semibold">👥 New Users</h2>
              <p className="text-gray-600">45 this week</p>
            </div>

