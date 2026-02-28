'use client';

import { motion } from 'framer-motion';
import { values } from '@/constants/values';
import { Section } from '@/components/default-elements';
import { H2, Subheading } from '@/components/ui/typography';

export default function VisionMissionSection() {
  const mission = values.find(v => v.title === 'Our Mission');
  const vision = values.find(v => v.title === 'Our Vision');

  return (
    <Section className="py-24 relative overflow-hidden">
      {/* Decorative gradient background */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-static/10 via-background to-background" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10">
        {[vision, mission].map((item, index) => (
          <motion.div
            key={item?.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.2, ease: "easeOut" }}
            className="group relative p-8 lg:p-12 rounded-3xl border border-white/10 bg-white/5 dark:bg-black/5 backdrop-blur-xl hover:border-primary-static/30 transition-colors duration-500 overflow-hidden"
          >
            {/* Subtle glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-static/0 via-primary-static/0 to-primary-static/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="mb-6 inline-flex items-center rounded-full border border-primary-static/30 bg-primary-static/10 px-3 py-1 text-sm font-medium text-primary-static shadow-[0_0_15px_rgba(var(--primary-static),0.2)]">
                {item?.title}
              </div>
              <H2 className="mb-6 leading-tight xl:text-4xl text-foreground">
                {item?.heading}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-static to-blue-500 font-extrabold pb-2">
                  {item?.highlight}
                </span>
              </H2>
              <Subheading className="text-muted-foreground leading-relaxed text-lg">
                {item?.description}
              </Subheading>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
