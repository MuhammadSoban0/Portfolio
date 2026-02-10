import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useState, useEffect } from "react";
import React from "react";
import profileImage from "@/assets/profile.png";
 
import chateo_1 from "../../Projects_imgs/Chateo/Screenshot_20260205_123456.jpg";
import chateo_2 from "../../Projects_imgs/Chateo/Screenshot_20260205_123510.jpg";
import easy_1 from "../../Projects_imgs/Easy Credit Repairs/Screenshot_20260205_123249.jpg";
import easy_2 from "../../Projects_imgs/Easy Credit Repairs/Screenshot_20260205_123251.jpg";
import easy_3 from "../../Projects_imgs/Easy Credit Repairs/Screenshot_20260205_123256.jpg";
import easy_4 from "../../Projects_imgs/Easy Credit Repairs/Screenshot_20260205_123305.jpg";
import edm_1 from "../../Projects_imgs/Every Day Muslim/Screenshot_20260205_122933.jpg";
import trivia_1 from "../../Projects_imgs/Islamic Trivia/Screenshot_20260205_123414_Dev Islamic Trivia.jpg";
import trivia_2 from "../../Projects_imgs/Islamic Trivia/Screenshot_20260205_123419_Dev Islamic Trivia.jpg";
import trivia_3 from "../../Projects_imgs/Islamic Trivia/Screenshot_20260205_123423_Dev Islamic Trivia.jpg";
import trivia_4 from "../../Projects_imgs/Islamic Trivia/Screenshot_20260205_123432_Dev Islamic Trivia.jpg";
import trivia_5 from "../../Projects_imgs/Islamic Trivia/Screenshot_20260205_123439_Dev Islamic Trivia.jpg";
import num_1 from "../../Projects_imgs/Numerology WIzard/Screenshot_20260205_123217.jpg";
import num_2 from "../../Projects_imgs/Numerology WIzard/Screenshot_20260205_123220.jpg";
import num_3 from "../../Projects_imgs/Numerology WIzard/Screenshot_20260205_123228_Google Play Store.jpg";
import num_4 from "../../Projects_imgs/Numerology WIzard/Screenshot_20260205_123231.jpg";
import num_5 from "../../Projects_imgs/Numerology WIzard/Screenshot_20260205_123239.jpg";
import rbb_1 from "../../Projects_imgs/RBB App/Screenshot_20260205_123132.jpg";
import rbb_2 from "../../Projects_imgs/RBB App/Screenshot_20260205_123138.jpg";
import rbb_3 from "../../Projects_imgs/RBB App/Screenshot_20260205_123146.jpg";
import rbb_4 from "../../Projects_imgs/RBB App/Screenshot_20260205_123152.jpg";
import rbb_5 from "../../Projects_imgs/RBB App/Screenshot_20260205_123203.jpg";
import salon_1 from "../../Projects_imgs/Salonary/Screenshot_20260205_123339.jpg";
import salon_2 from "../../Projects_imgs/Salonary/Screenshot_20260205_123344.jpg";
import salon_3 from "../../Projects_imgs/Salonary/Screenshot_20260205_123348.jpg";
import salon_4 from "../../Projects_imgs/Salonary/Screenshot_20260205_123358.jpg";
import salon_5 from "../../Projects_imgs/Salonary/Screenshot_20260205_123403.jpg";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  links: {
    appStore: string;
    playStore: string;
  };
  cover: string;
  screenshots: string[];
  color: string;
  cardIndex?: number;
}

const ProjectCard = ({ title, description, tags, links, cover, screenshots, color, cardIndex = 0 }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [-10, 0, 10]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef<number | null>(null);
  useEffect(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (screenshots.length <= 1) return;
    const startDelay = Math.floor(Math.random() * 800);
    const stepInterval = 5000 + Math.floor(Math.random() * 4000);
    const start = window.setTimeout(() => {
      setCurrentIndex((i) => (i + 1) % screenshots.length);
      intervalRef.current = window.setInterval(() => {
        setCurrentIndex((i) => (i + 1) % screenshots.length);
      }, stepInterval);
    }, startDelay);
    return () => {
      clearTimeout(start);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [screenshots.length, cardIndex]);

  return (
    <motion.div
      ref={cardRef}
      style={{
        y,
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
        {/* Phone Notch */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-20"></div>

        {/* Screen Content */}
        <div className="relative w-full h-full bg-gray-800 overflow-hidden">
          <div className="absolute inset-0">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={screenshots[currentIndex]}
                alt={`${title} ${currentIndex + 1}`}
                className="w-full h-full object-cover opacity-100"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{
                  opacity: { duration: 0.6, ease: "easeInOut" },
                  x: { duration: 0.7, ease: "easeInOut" },
                }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent pointer-events-none z-10 rounded-[2rem]" />
          </div>

          <div className="absolute inset-x-0 bottom-0 z-10">
            <div className="rounded-3xl bg-black/40 backdrop-blur-xl border border-white/15 shadow-2xl p-4 sm:p-5 transition-colors duration-300 group-hover:bg-black/55">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-white">{title}</h3>
                </div>
                <p className="text-white/80 text-xs sm:text-sm mb-3 max-h-12 overflow-hidden">
                  {description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 rounded-full bg-white/10 text-white border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-2 items-center mt-2 pt-2 border-t border-white/10">
                  <Button
                    size="sm"
                    className="min-w-0 w-full bg-white/10 text-white hover:bg-white/20 border border-white/20 px-2 py-2 text-xs"
                    asChild
                  >
                    <a href={links.appStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      <Apple className="w-3.5 h-3.5" /> App Store
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="min-w-0 w-full bg-white/10 text-white hover:bg-white/20 border border-white/20 px-2 py-2 text-xs"
                    asChild
                  >
                    <a href={links.playStore} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-1.5">
                      <Play className="w-3.5 h-3.5" /> Google Play
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Reflection/Gloss Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none z-20 rounded-[2.5rem]" />
      </div>

      {/* Shadow/Glow */}
      <div
        className={`absolute -inset-4 bg-gradient-to-b ${color} opacity-20 blur-2xl -z-10 group-hover:opacity-40 transition-opacity duration-500`}
      />
    </motion.div>
  );
};

const projects = [
  {
    title: "RBB App",
    description: "Banking and finance app with account management and secure transactions.",
    tags: ["Flutter", "Security", "Finance"],
    links: { appStore: "#", playStore: "#" },
    cover: rbb_1,
    screenshots: [rbb_1, rbb_2, rbb_3, rbb_4, rbb_5],
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Salonary",
    description: "Salon management: appointments, staff, and inventory streamlined.",
    tags: ["Flutter", "Firebase", "Stripe"],
    links: { appStore: "#", playStore: "#" },
    cover: salon_1,
    screenshots: [salon_1, salon_2, salon_3, salon_4, salon_5],
    color: "from-pink-500 to-purple-600",
  },
  {
    title: "Every Day Muslim",
    description: "Prayer times, Qibla, and duas with a clean interface.",
    tags: ["Flutter", "REST API", "Location"],
    links: { appStore: "#", playStore: "#" },
    cover: edm_1,
    screenshots: [edm_1],
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Islamic Trivia",
    description: "Quiz app with categories and leaderboards.",
    tags: ["Flutter", "Firebase", "AdMob"],
    links: { appStore: "#", playStore: "#" },
    cover: trivia_1,
    screenshots: [trivia_1, trivia_2, trivia_3, trivia_4, trivia_5],
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "Numerology Wizard",
    description: "Numerology calculations and insights with shareable results.",
    tags: ["Flutter", "Charts", "Local DB"],
    links: { appStore: "#", playStore: "#" },
    cover: num_1,
    screenshots: [num_1, num_2, num_3, num_4, num_5],
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "Chateo",
    description: "Real-time chat with channels, media sharing, and notifications.",
    tags: ["Flutter", "Socket.io", "Push"],
    links: { appStore: "#", playStore: "#" },
    cover: chateo_1,
    screenshots: [chateo_1, chateo_2],
    color: "from-sky-500 to-blue-600",
  },
  {
    title: "Easy Credit Repairs",
    description: "Credit repair workflow with guidance and tracking.",
    tags: ["Flutter", "Forms", "Cloud"],
    links: { appStore: "#", playStore: "#" },
    cover: easy_1,
    screenshots: [easy_1, easy_2, easy_3, easy_4],
    color: "from-orange-500 to-amber-600",
  },
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />
      <motion.div
        style={{ y }}
        className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-6">
            <motion.img
              src={profileImage}
              alt="Muhammad Soban"
              className="w-20 h-20 rounded-full object-cover border-4 border-accent/20 shadow-2xl"
              initial={{ opacity: 0.9, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work in mobile and web development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} cardIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
