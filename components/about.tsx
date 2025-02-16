"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a person who always looking for new things for my job and excited
        to learn and embrace emerging technology. Deep knowledge of techniques
        and a strong understanding of web frameworks are my superior strength. I
        am especially efficient in communication and versatile in giving
        presentations and technical demos
      </p>

      <p>
        <span className="italic font-medium">Bottom line</span>: With high
        responsibility and the youth, I am quite an invaluable IT partner for
        whoever being with me
      </p>
    </motion.section>
  );
}
