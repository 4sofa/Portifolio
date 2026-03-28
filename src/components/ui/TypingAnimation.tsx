"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  phrases: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  showCursor?: boolean;
  delay?: number;
}

export function TypingAnimation({
  phrases,
  className,
  typingSpeed = 60,
  deletingSpeed = 30,
  pauseDuration = 2000,
  showCursor = true,
  delay = 0,
}: TypingAnimationProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const phrase = phrases[currentPhraseIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < phrase.length) {
          setCurrentText(phrase.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(phrase.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phrases, currentPhraseIndex, typingSpeed, deletingSpeed, pauseDuration, hasStarted]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span aria-hidden="true">
        &#8203;{currentText}
      </span>
      <span className="sr-only">{phrases[currentPhraseIndex]}</span>
      {showCursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 0.6,
            repeatType: "reverse",
          }}
          className="ml-1 inline-block h-[1.1em] w-[2px] bg-primary"
        />
      )}
    </span>
  );
}
