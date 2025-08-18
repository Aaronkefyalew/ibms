const AdminPage = () => {
  return (
    <section className="flex-center size-full bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6">
      <div className="w-full max-w-4xl bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-10">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Admin Dashboard 🛠️
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Manage users, monitor activity, and configure system settings here.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">📊 Analytics</h2>
            <p className="text-sm text-gray-600">View usage and performance stats.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">👥 Users</h2>
            <p className="text-sm text-gray-600">Manage registered users and roles.</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-xl shadow hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-2">⚙️ Settings</h2>
            <p className="text-sm text-gray-600">Configure system preferences.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminPage
