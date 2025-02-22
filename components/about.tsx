"use client";

import React from "react";
import SectionHeading from "./sectionHeading";
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
        I moved to Australia from Nepal when I was seven, and the one consistent memory I have from that time is <span className="italic">my favourite subject</span> being <span className="underline">mathematics</span>. Over the years, this progressed into an <span className="italic">overall passion</span> for <span className="font-bold">problem solving</span>, from my childhood obsession with <span className="font-bold">puzzles</span> and <span className="font-bold">brain games</span>, to taking on the <span className="underline">two hardest maths classes</span> in my final years of high school.
        </p>
        <p className="mb-3">
        Naturally, this passion led me to seek <span className="italic">greater challenges</span> at university, and after some trial and error, I found my <span className="font-bold">perfect match</span>: <span className="underline">Computer Science</span>. Within my studies, I’ve worked on exciting and stimulating projects utilising <span className="font-bold italic">object oriented programming</span>, and <span className="font-bold italic">user interface design</span>. Beyond the classroom, I’ve ventured to many hackathons and challenges, tackling modern day problems with innovative and <span className="underline">award winning solutions</span>!
        </p>
        <p>
        <span className="italic">In my spare time</span>, I enjoy playing video games with my friends, reading exciting fantasy novels and doing arts and crafts with my little brother. I’ve currently playing <span className="italic">The Last of Us II</span>, and I’ve just finished reading <span className="italic">If You Could See the Sun</span> by Ann Liang.
        </p>
    </motion.section>
  );
}
