import { Outlet } from "react-router-dom";
import BackToTopButton from "../common/BackToTopButton.jsx";
import Navbar from "./Navbar.jsx";
import BottomAvailabilityBanner from "./BottomAvailabilityBanner.jsx";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-portfolio-black bg-radialGlow text-portfolio-white">
      <Navbar />

      <main className="pb-28 sm:pb-24">
        <Outlet />
      </main>

      <BackToTopButton />
      <BottomAvailabilityBanner />
    </div>
  );
}