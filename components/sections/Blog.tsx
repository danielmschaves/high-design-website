"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PostCard from "@/components/blog/PostCard";
import { getAllPosts } from "@/lib/blog";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function BlogSection() {
  const featured = getAllPosts().slice(0, 3);

  return (
    <section
      className="bg-stone-50 overflow-hidden"
      style={{ padding: "var(--space-10) var(--gutter)" }}
    >
      <div className="max-w-content mx-auto">
        {/* Chapter header */}
        <motion.div
          className="hd-chapter"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="num">Blog · Artigos</div>
          <div>
            <h2>
              Conteúdo que
              <br />
              <em>orienta decisões</em>
            </h2>
            <p>
              Textos técnicos e didáticos sobre arquitetura, orçamento, terrenos e como escolher bem os profissionais que conduzirão o seu projeto.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {featured.map((post, i) => (
            <PostCard key={post.slug} post={post} variant="default" />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <Link href="/blog" className="hd-btn hd-btn--ghost">
            Ver todos os artigos <span className="arrow" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
