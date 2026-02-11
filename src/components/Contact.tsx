import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageSquare, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

const Contact = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);


  return (
    <section id="contact" ref={sectionRef} className="py-12 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 relative overflow-hidden">
      {/* Background decoration with parallax */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="absolute bottom-20 left-10 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your mobile app
            vision to life with Flutter
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl shadow-purple-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1">
                  {/* Contact Info Side */}
                  <div className="p-6 md:p-8 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-white">Get in Touch</h3>
                      <p className="text-purple-200 mb-6 text-sm">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                      </p>

                      <div className="space-y-6">
                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2.5 rounded-lg bg-cyan-500/20">
                            <Mail className="w-5 h-5 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-white text-sm">Email</h4>
                            <a
                              href="mailto:sobahannan654@gmail.com"
                              className="text-purple-200 text-sm hover:text-white hover:underline underline-offset-2"
                            >
                              sobahannan654@gmail.com
                            </a>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-2.5 rounded-lg bg-pink-500/20">
                            <MessageSquare className="w-5 h-5 text-pink-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-white text-sm">Let's Chat</h4>
                            <p className="text-purple-200 text-sm">Available for freelance projects</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <p className="text-xs text-purple-200 mb-3">
                        Follow me for more Flutter content
                      </p>
                      <div className="flex gap-3">
                        <motion.a
                          href="https://github.com/MuhammadSoban0"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#24292e] hover:bg-[#24292e]/90 text-white transition-colors text-xs font-medium border border-transparent flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" /> GitHub
                        </motion.a>
                        <motion.a
                          href="https://www.linkedin.com/in/muhammad-soban-856bab2a0?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded-lg bg-[#0A66C2] hover:bg-[#0A66C2]/90 text-white transition-colors text-xs font-medium border border-transparent flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Linkedin className="w-4 h-4" /> LinkedIn
                        </motion.a>
                      </div>
                    </div>
                  </div>

                  {/* Removed direct message form */}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
