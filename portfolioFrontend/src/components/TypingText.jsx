import React, { useState, useEffect } from "react";

const TypingText = ({
  texts,
  typingSpeed = 500,
  deletingSpeed = 500,
  delay = 2000,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = texts[loopIndex % texts.length];
    let timeout;

    if (isDeleting) {
      // deleting characters
      timeout = setTimeout(() => {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, deletingSpeed);
    } else {
      // typing characters
      if (charIndex < current.length) {
        timeout = setTimeout(() => {
          setText(current.substring(0, charIndex + 1));
          setCharIndex((prev) => prev + 1);
        }, typingSpeed);
      }
    }

    // if finished typing the word → wait "delay" before deleting
    if (!isDeleting && charIndex === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    }

    // if finished deleting → move to next word immediately
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLoopIndex((prev) => prev + 1);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    isDeleting,
    loopIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    delay,
  ]);

  return <span className="typing">{text}</span>;
};

export default TypingText;
