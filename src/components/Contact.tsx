import { motion, useScroll, useTransform } from "framer-motion";
import { Mail, MessageSquare, Send, User, AtSign, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const sectionRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success("Message sent successfully!", {
      description: "I'll get back to you as soon as possible.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-violet-950 via-purple-900 to-fuchsia-900 relative overflow-hidden">
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Let's Build Something <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your mobile app
            vision to life with Flutter
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            style={{ opacity }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl shadow-purple-500/20 overflow-hidden">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-2">
                  {/* Contact Info Side */}
                  <div className="p-8 md:p-12 bg-gradient-to-br from-purple-900/50 to-indigo-900/50 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl font-bold mb-6 text-white">Get in Touch</h3>
                      <p className="text-purple-200 mb-8">
                        I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                      </p>

                      <div className="space-y-6">
                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-3 rounded-lg bg-cyan-500/20">
                            <Mail className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-white">Email</h4>
                            <p className="text-purple-200">hello@flutterdev.com</p>
                          </div>
                        </motion.div>

                        <motion.div
                          className="flex items-start gap-4"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="p-3 rounded-lg bg-pink-500/20">
                            <MessageSquare className="w-6 h-6 text-pink-400" />
                          </div>
                          <div>
                            <h4 className="font-semibold mb-1 text-white">Let's Chat</h4>
                            <p className="text-purple-200">Available for freelance projects</p>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    <div className="mt-12">
                      <p className="text-sm text-purple-200 mb-4">
                        Follow me for more Flutter content
                      </p>
                      <div className="flex gap-3">
                        {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                          <motion.button
                            key={platform}
                            className="px-4 py-2 rounded-lg bg-white/10 hover:bg-cyan-500 hover:text-white transition-colors text-sm font-medium text-purple-100 border border-white/20"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            {platform}
                          </motion.button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Contact Form Side */}
                  <div className="p-8 md:p-12 bg-white/5">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-purple-100">Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
                          <Input
                            id="name"
                            placeholder="Your Name"
                            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-purple-100">Email</label>
                        <div className="relative">
                          <AtSign className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-purple-100">Message</label>
                        <div className="relative">
                          <MessageCircle className="absolute left-3 top-3 w-5 h-5 text-purple-300" />
                          <Textarea
                            id="message"
                            placeholder="Tell me about your project..."
                            className="pl-10 min-h-[120px] bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-cyan-400 focus:ring-cyan-400/20"
                            required
                          />
                        </div>
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 text-white font-semibold h-12 shadow-lg shadow-purple-500/30 transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          <>
                            Send Message <Send className="w-4 h-4 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
                  </div>
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
