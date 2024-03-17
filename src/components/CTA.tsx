"use client";

import { headerVariants } from "@animations/variants";
import { Variants, motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTA = () => {
  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div variants={headerVariants}>
        <section className="cta rounded-xl border border-amber-400/50 bg-white/5 p-4 backdrop-blur-sm">
          <p className="cta-text">
            Have a project in mind ? <br className="hidden sm:block" />
            Let's build something together!
          </p>
          <Link href="/contact" className="btn">
            Contact
          </Link>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default CTA;
