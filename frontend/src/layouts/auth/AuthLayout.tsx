import { motion } from "framer-motion";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="h-dvh w-dvw flex flex-col items-center justify-center bg-primary">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-20"
      >
        <Link
          to="/"
          className="text-slate-300 text-sm hover:text-white transition-colors duration-200"
        >
          ← Back to Home
        </Link>
      </motion.div>
      <Outlet />
    </div>
  );
}
