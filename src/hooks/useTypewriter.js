import { useState, useEffect } from 'react';

export function useTypewriter(words, typeSpeed = 100, deleteSpeed = 50, delay = 2000) {
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!words || words.length === 0) return;
    
    let timer;
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      // Typing character
      if (currentText.length < currentWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        }, typeSpeed);
      } else {
        // Word completed, pause before deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      }
    } else {
      // Deleting character
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        // Word cleared, switch to next word
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, delay]);

  return currentText;
}
