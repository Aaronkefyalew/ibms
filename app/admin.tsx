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
