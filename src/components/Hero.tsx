import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.png";

const Hero = () => {
  // Text reveal animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Simplified background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-golden/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-4 inline-block">
              <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-bold tracking-wider border border-accent/20">
                FLUTTER DEVELOPER
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
              variants={itemVariants}
            >
              Hi, I'm <span className="text-gradient">Muhammad Soban</span>
              <br />
              <span className="text-4xl md:text-6xl text-foreground/80">
                Crafting Mobile Magic
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={itemVariants}
            >
              Transforming ideas into elegant, high-performance mobile applications
              with Flutter. Specialized in creating intuitive user experiences across
              diverse domains.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center lg:justify-start pb-8 lg:pb-0"
              variants={itemVariants}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-navy font-bold px-8 h-12 rounded-full shadow-glow hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent/50 text-foreground hover:bg-accent/10 hover:border-accent h-12 rounded-full px-8 hover:scale-105 transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6 justify-center lg:justify-start mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="https://github.com/MuhammadSoban0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "hsl(var(--accent))" }}
                className="text-muted-foreground transition-colors"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/muhammad-soban-856bab2a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, color: "hsl(var(--accent))" }}
                className="text-muted-foreground transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              <motion.a
                href="mailto:sobahannan654@gmail.com"
                whileHover={{ y: -5, color: "hsl(var(--accent))" }}
                className="text-muted-foreground transition-colors"
              >
                <Mail className="w-6 h-6" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            className="flex-1 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              delay: 0.2
            }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full p-2 border-2 border-white/10 bg-white/5 backdrop-blur-sm">
                <motion.img
                  src={profileImage}
                  alt="Flutter Developer Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-accent/20 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Simplified floating elements */}
              <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-xl">
                <span className="text-2xl">💙</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <div className="p-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-accent/20 transition-colors">
            <ArrowDown className="w-6 h-6 text-accent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
