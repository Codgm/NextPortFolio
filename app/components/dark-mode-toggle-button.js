'use client';

import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import { BsSun, BsMoon } from 'react-icons/bs'; // 사용할 아이콘
import { motion, useAnimate } from 'framer-motion'; // 이 훅을 사용해서 구현한다.

const DarkModeToggleButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scope, animate] = useAnimate(); // animate 함수로 자바스크립트로 애니메이션 구현이 가능하고 scope는 움직일 ref를 넣는다.
  const buttonRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleThemeChange = async (newTheme) => {
    setTheme(newTheme);
    await animate([
      newTheme === 'light'
        ? [buttonRef.current, { rotate: -120 }]
        : [buttonRef.current, { rotate: 0 }],
    ]); // 해 아이콘은 -120도, 달 아이콘은 0을 줘서 회전하는 느낌을 준다.( 해는 돌려도 똑같은 형태이기 때문에, dark모드일 경우 되돌아가게 만들어주면 회전하게 된다.)
  };

  if (!mounted) return null;

  return (
    <div className="w-10 h-10 flex items-center justify-center">
      {theme !== 'dark' ? (
        <motion.div
          initial={{ opacity: 0, rotate: -120 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-gray-900 hover:text-orange-500 dark:hover:text-yellow-500 duration-300"
        >
          <button ref={buttonRef} onClick={() => handleThemeChange('dark')}>
            <BsSun size="25" />
          </button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05 }}
          className="text-gray-900 hover:text-orange-500 dark:text-yellow-800 dark:hover:text-yellow-500 duration-300"
        >
          <button ref={buttonRef} onClick={() => handleThemeChange('light')}>
            <BsMoon size="25" />
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default DarkModeToggleButton;
