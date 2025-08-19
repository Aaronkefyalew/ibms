const AdminPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h1>

      {/* Short Description */}
      <p className="text-gray-600 mb-8">
        Welcome to the admin panel. Manage system settings and users here.
      </p>

      {/* Placeholder Buttons */}
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Manage Users
        </button>
        <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
          View Reports
        </button>
        <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800">
          Settings
        </button>
      </div>
    </section>
  )
}

export default AdminPage
