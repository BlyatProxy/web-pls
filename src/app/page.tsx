"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { LinkPreview } from "@/components/ui/link-preview";
import { motion, useScroll, useTransform } from "framer-motion";
import WordPullUp from "@/components/ui/word-pull-up";
import { PinContainer } from "@/components/ui/3d-pin";

function HeroTitle() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0]); // Reduced scroll distance
  const scale = useTransform(scrollY, [0, 200], [1, 0.8]); // Reduced scroll distance

  return (
    <motion.div 
      style={{ opacity, scale }}
      className="z-10 flex items-center justify-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full p-6 sm:p-8 lg:p-10 rounded-[2rem] border border-white/20 bg-gradient-to-br from-black/90 via-purple-900/40 to-black/90 backdrop-blur-xl relative overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at center, rgba(147, 51, 234, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <div className="relative flex flex-col items-center space-y-8">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              bounce: 0.4
            }}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-2xl border border-white/20 bg-black/40 text-white/90 backdrop-blur-sm transition-all hover:bg-black/50 hover:scale-105">
              <span className="text-lg sm:text-xl lg:text-2xl font-bold tracking-wide text-center">⚡ Welcome to the Official Community</span>
            </AnimatedShinyText>
          </motion.div>
          
          <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6 py-6 sm:py-8">
            <WordPullUp
              words="Ujang Geng's Roblox Community"
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-center"
              framerProps={{
                hidden: { y: 100, opacity: 0 },
                show: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 8,
                    stiffness: 100
                  }
                }
              }}
            />
            <WordPullUp
              words="Experience the most vibrant Roblox community"
              className="text-xl sm:text-2xl lg:text-3xl font-medium text-white/90 text-center"
              delayMultiple={1.2}
              framerProps={{
                hidden: { y: 40, opacity: 0 },
                show: { 
                  y: 0, 
                  opacity: 1,
                  transition: {
                    type: "spring",
                    damping: 10
                  }
                }
              }}
            />
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ 
                y: 0, 
                opacity: 1,
                transition: {
                  delay: 1,
                  duration: 0.8,
                  type: "spring"
                }
              }}
              viewport={{ once: false }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-6"
            >
              <LinkPreview
                url="https://dsc.gg/ujang"
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400 text-white font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                isStatic={true}
                imageSrc="/download.png"
              >
                Join Discord
              </LinkPreview>
              <motion.a 
                href="#rules"
                className="px-8 sm:px-10 py-3 sm:py-4 rounded-xl border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white font-bold text-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-white/10 backdrop-blur-sm"
                whileHover={{
                  boxShadow: "0 0 20px rgba(255,255,255,0.2)"
                }}
              >
                Community Rules
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CommunityRules() {
  const rules = [
    {
      title: "Respect Everyone",
      description: "Treat all members with kindness and respect. No harassment or bullying.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "No Inappropriate Content",
      description: "Keep content family-friendly and appropriate for all ages.",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4.93 4.93L19.07 19.07" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: "Have Fun",
      description: "Enjoy your time in the community and make new friends!",
      icon: (
        <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15 9H15.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 9H9.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  return (
    <div id="rules" className="relative py-24 sm:py-32 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_-100px,rgba(120,40,200,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            Community Guidelines
          </h2>
          <p className="mt-4 sm:mt-6 text-lg sm:text-xl text-white/70">
            Follow these rules to keep our community safe and fun for everyone
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {rules.map((rule, index) => (
            <motion.div
              key={rule.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-white/20 transition-all"
            >
              <div className="w-12 sm:w-14 h-12 sm:h-14 mb-4 sm:mb-6 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20">
                {rule.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{rule.title}</h3>
              <p className="text-white/70 text-base sm:text-lg leading-relaxed">{rule.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function UGCGallery() {
  const items = [
    {
      title: "Classic Ujang T-Shirt Front",
      image: "/front1.png",
      price: "R$ 5",
      href: "https://www.roblox.com/id/catalog/105687518060089/UJANG-GENG"
    },
    {
      title: "Classic Ujang T-Shirt Back", 
      image: "/back1.png",
      price: "R$ 5",
      href: "https://www.roblox.com/id/catalog/105687518060089/UJANG-GENG"
    },
    {
      title: "White T-Shirt Front",
      image: "/front2.png", 
      price: "R$ 5",
      href: "https://www.roblox.com/catalog/97235875381535/Ujang-White-Version"
    },
    {
      title: "White T-Shirt Back",
      image: "/back2.png",
      price: "R$ 5",
      href: "https://www.roblox.com/catalog/97235875381535/Ujang-White-Version"
    }
  ];

  return (
    <div className="relative py-16 sm:py-24 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(120,40,200,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: "spring" }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
            UGC Collection
          </h2>
          <p className="mt-3 sm:mt-6 text-base sm:text-xl text-white/70 px-4">
            Express yourself with our exclusive UGC items
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 0.8,
                delay: index * 0.2,
                type: "spring",
                bounce: 0.4
              }}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 p-1.5 sm:p-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative h-full rounded-lg overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 sm:transform sm:translate-y-full sm:group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-sm sm:text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-white/90 text-sm sm:text-base font-semibold">{item.price}</p>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WelcomeSection() {
  return (
    <div className="bg-gradient-to-b from-black via-purple-900/20 to-black">
      <ContainerScroll titleComponent={<HeroTitle />}>
        <div className="relative w-full h-full">
          <Image
            src={`/dandadan-dan-da-dan.gif`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-3xl object-cover w-full h-full object-center border border-white/10 shadow-2xl"
            draggable={false}
            priority
          />
        </div>
      </ContainerScroll>
    </div>
  );
}

function Contributors() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_0px,rgba(120,40,200,0.1),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1, type: "spring" }}
          className="flex flex-col items-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-6">
            Meet Our Main Team
          </h2>
          <div className="h-1.5 w-32 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32 lg:gap-40">
          {[
            {
              name: "Dennz",
              role: "Creator of the Discord server and website. Co-founder and platform developer with a passion for building communities.",
              image: "/dennz.png",
              profile: "https://www.roblox.com/users/1108086154/profile",
              delay: 0,
            },
            {
              name: "Vanitas",
              role: "Mastermind behind Geng Ujang and founder of the iconic group. Visionary leader who brought the community together.",
              image: "/vanitas.png",
              profile: "https://www.roblox.com/users/2036694053/profile",
              delay: 0.2,
            },
            {
              name: "Flintt",
              role: "Friend of Vanitas and supporter of the Ujang Geng vision. Helped bring the community together through shared passion.",
              image: "/flint.png",
              profile: "https://www.roblox.com/users/3391602656/profile",
              delay: 0.4,
            },
            {
              name: "Ana",
              role: "Core team member and community moderator. Dedicated to maintaining a positive and engaging environment for all members.",
              image: "/ana.png",
              profile: "https://www.roblox.com/users/5392148621/profile",
              delay: 0.6,
            },
          ].map((member) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ 
                duration: 1,
                delay: member.delay,
                type: "spring",
                bounce: 0.4
              }}
              className="flex justify-center"
            >
              <PinContainer
                title={member.name}
                href={member.profile}
              >
                <div className="flex flex-col p-4 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all w-[250px]">
                  <div className="relative group">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={250}
                      height={250}
                      className="w-full aspect-square mb-4 rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500 shadow-lg shadow-black/20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <div className="flex flex-col overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,rgba(59,130,246,0.3),transparent)]" />
      <div className="relative">
        <WelcomeSection />
        <CommunityRules />
        <UGCGallery />
        <Contributors />
      </div>
    </div>
  );
}
