import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// =============================
// Admin Dashboard Page Component
// =============================
const AdminPage = () => {
  return (
    // The entire page is wrapped in a <section> that:
    // - Uses flex column layout
    // - Covers full screen (size-full)
    // - Has a dark gradient background (black → gray)
    // - Applies white text as the default
    <section className="flex flex-col size-full bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      
      {/* ==========================
          Top Navigation Bar
          - Displays page title on the left
          - Includes a logout button on the right
          - Has a subtle border at the bottom
         ========================== */}
      <header className="flex justify-between items-center w-full px-8 py-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold tracking-wide">⚡ Admin Dashboard</h1>
        
        {/* Logout button with red theme (shadcn/ui Button) */}
        <Button variant="destructive" className="rounded-xl">
          Logout
        </Button>
      </header>

      {/* ==========================
          Main Content Area
          - Uses flexbox to center items
          - Provides padding around content
          - Restricts width to 6xl for readability
         ========================== */}
      <main className="flex-1 flex justify-center items-center p-8">
        <div className="w-full max-w-6xl">
          
          {/* Subtitle text describing the purpose of the page */}
          <p className="text-center text-gray-400 mb-10">
            Manage users, monitor activity, and configure system settings.
          </p>

          {/* ==========================
              Dashboard Cards Section
              - Uses responsive grid layout
              - 1 column on mobile, 2 on tablets, 3 on desktops
              - Each card highlights a feature area
             ========================== */}
