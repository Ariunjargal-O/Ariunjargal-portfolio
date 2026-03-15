"use client";

import { motion } from "framer-motion";
import { useLanguage } from "context/LanguageContext";
import { useState, useEffect } from "react";
import { translations } from "@/lib/translations";

const loaderLocales = ["en", "ja","mn"] as const;

export default function Loader() {
  const { locale } = useLanguage();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % loaderLocales.length);
    }, 1000); // 2 секунд тутам хэл солигдоно

    return () => clearInterval(interval);
  }, []);

  const currentLocale = loaderLocales[index];
  const t = translations[currentLocale];

  return (
    <div className="flex flex-col items-center justify-center">
      <motion.div
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="text-primary flex gap-2 text-4xl">
            <h1>{t.loader.title}</h1>
            <h2>{t.loader.subtitle}</h2>
          </div>

          <motion.p
            key={currentLocale}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg"
          >
            {t.loader.wait}
          </motion.p>
        </div>
      </motion.div>

      <div className="relative w-24 h-24">
        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 0.8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        />

        <motion.div
          className="absolute inset-0 border-4 border-primary rounded-full"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: [0, 1, 1.2, 1], opacity: [0, 1, 0.8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
      </div>
    </div>
  );
}
