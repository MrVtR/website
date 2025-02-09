// "use client";

// import { useTheme } from "next-themes";
// import { SunIcon } from "@heroicons/react/24/outline";

// const ThemeSwitch = () => {
//   //   const [mounted, setMounted] = useState(false);
//   //   const { resolvedTheme, setTheme } = useTheme();
//   const { theme, setTheme } = useTheme();
//   // useEffect only runs on the client, so now we can safely show the UI
//   //   useEffect(() => {
//   //     setMounted(true);
//   //   }, []);

//   //   if (!mounted) {
//   //     return null;
//   //   }

//   return (
//     <div className="inline-flex items-center">
//       <SunIcon className="mr-2 h-4 w-4" />
//       <select
//         name="themeSwitch"
//         value={theme}
//         onChange={e => setTheme(e.target.value)}>
//         <option value="system">Sistema</option>
//         <option value="dark">Escuro</option>
//         <option value="light">Claro</option>
//       </select>
//     </div>
//   );
// };

// export default ThemeSwitch;

"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-full bg-gray-200 p-2 transition-colors duration-300 dark:bg-gray-800">
      <motion.div
        key={isDark ? "sun" : "moon"}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3 }}>
        {isDark ? (
          <SunIcon className="h-6 w-6 text-yellow-500" />
        ) : (
          <MoonIcon className="h-6 w-6 text-gray-700" />
        )}
      </motion.div>
    </button>
  );
};

export default ThemeSwitch;
