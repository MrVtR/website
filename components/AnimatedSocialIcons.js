"use client";
import { motion, useAnimation } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { useEffect } from "react";

const AnimatedSocialIcons = ({
  icons_list_url,
  iconSize = 50,
  pulseSpeed = 2,
  hoverScale = 1.2,
  className = "",
  gridColumns = 3,
}) => {
  const controls = useAnimation();

  // Synchronized pulse animation
  useEffect(() => {
    let isMounted = true;

    const startAnimation = async () => {
      while (isMounted) {
        await controls.start({
          scale: [1, 1.15, 1],
          transition: {
            duration: pulseSpeed,
            ease: "easeInOut",
          },
        });
      }
    };

    startAnimation();

    return () => {
      isMounted = false; // Cleanup for component unmount
    };
  }, [controls, pulseSpeed]);

  return (
    <div
      className={`grid gap-5 ${className}`}
      style={{
        marginTop: "20px",
        gridTemplateColumns: `repeat(${gridColumns}, minmax(0, 1fr))`,
      }}
    >
      {icons_list_url.map((item, index) => (
        <motion.div
          key={`${item.url}-${index}`}
          animate={controls}
          whileHover={{
            scale: hoverScale,
            transition: {
              type: "spring",
              stiffness: 400,
              damping: 10,
            },
          }}
          className="flex items-center justify-center"
        >
          <SocialIcon
            network={item.name}
            url={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: iconSize,
              width: iconSize,
              transformOrigin: "center",
              cursor: "pointer",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSocialIcons;
