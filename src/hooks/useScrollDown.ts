import  { useEffect, useState } from "react";

export const useScrollDown = () => {
  const [scrollDown, setScrollDown] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop >= 150 && !scrollDown) {
        setScrollDown(true);
      }
      if (scrollDown && scrollTop < 150) {
        setScrollDown(false);
      }
    };
    document.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDown]);

  return scrollDown;
};
