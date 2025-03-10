'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { HeroGeometric } from '@/components/ui/shape-landing-hero';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function Home() {
  const controls = useAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <main className="bg-[#030303]">
      {/* Hero Section */}
      <HeroGeometric 
        badge=""
        title1="Pixel Solutions"
        title2="A doorstep service for your smart home."
      />

      {/* Search Section */}
      <section className="relative -mt-60 z-20 container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Search services by location..."
              className="h-12 pl-12 pr-4 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
            <Search className="absolute rounded-full left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/50" />
          </div>
          <Button size="lg" className="w-full mt-4">
            Get Started
          </Button>
        </div>
      </section>

      {/* Discover Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mb-12 text-center text-4xl font-bold text-white"
          >
            Discover Our Services
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                title: 'Smart Home Setup', 
                image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80' 
              },
              { 
                title: 'Device Protection', 
                image: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?auto=format&fit=crop&w=800&q=80' 
              },
              { 
                title: 'Tech Support', 
                image: 'https://media.istockphoto.com/id/1165561132/photo/electrician-working-at-electric-panel.webp?s=2048x2048&w=is&k=20&c=c4kZZnk21SM9KeKxW44ltx9y2NZPS6OlMXz_vLdo4YU=' 
              },
              { 
                title: 'Maintenance Plans', 
                image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80' 
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={fadeInUp}
              >
                <Card className="overflow-hidden bg-white/5 border-white/10">
                  <CardContent className="p-0">
                    <div className="relative h-48">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <h3 className="p-4 text-center text-lg font-semibold text-white">{service.title}</h3>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mb-16 text-center text-4xl font-bold text-white"
          >
            Our Vision
          </motion.h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Smart Living Solutions',
                description: 'Creating intelligent and connected living spaces through cutting-edge technology.',
              },
              {
                title: 'Sustainable Services',
                description: 'Promoting eco-friendly practices and sustainable hardware solutions.',
              },
              {
                title: 'Expert Support',
                description: 'Providing professional guidance and support for all your hardware needs.',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                variants={fadeInUp}
                className="text-center p-8 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm"
              >
                <h3 className="mb-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="grid gap-12 md:grid-cols-2 items-center"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?auto=format&fit=crop&w=800&q=80"
                alt="About Us"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="mb-6 text-4xl font-bold text-white">About Us</h2>
              <p className="text-lg text-white/60">
                At Elite Hardware Services, we're committed to providing exceptional technology solutions
                that enhance your daily life. With years of expertise in hardware services and maintenance,
                we ensure your devices perform at their best. Our team of certified professionals delivers
                reliable, efficient, and sustainable solutions tailored to your needs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-transparent to-white/5">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={fadeInUp}
            className="mb-12 text-center text-4xl font-bold text-white"
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
            className="mx-auto max-w-3xl"
          >
            <Card className="text-center bg-white/5 border-white/10">
              <CardContent className="p-8">
                <p className="mb-6 text-lg text-white/60">
                  "Elite Hardware Services exceeded all our expectations. Their team's expertise and
                  professionalism made our smart home setup seamless and efficient. We couldn't be
                  happier with the results!"
                </p>
                <p className="font-semibold text-white">Sarah Johnson</p>
                <p className="text-sm text-white/40">Smart Home Client</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </main>
  );
}