import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, CheckCircle2, Clock, ArrowLeft, Sparkles } from 'lucide-react'
import { useSound } from '../components/providers/SoundProvider'

interface ServiceDetail {
  slug: string
  title: string
  tagline: string
  description: string
  longDescription: string
  image: string
  gallery: string[]
  duration: string
  inclusions: string[]
  gradient: string
}

export const serviceDetailsData: Record<string, ServiceDetail> = {
  'balloon-decorations': {
    slug: 'balloon-decorations',
    title: 'Balloon Decorations',
    tagline: 'Whimsical and vibrant balloon setups for every color palette',
    description: 'Bespoke balloon arches, organic garlands, bouquets, and ceiling balloon drops tailored to your theme colors.',
    longDescription: 'Our signature balloon decorations are designed to bring energy and elegance to your venue. Using premium, biodegradable, and high-quality latex balloons, we craft organic garlands, floating arches, backdrop border balloons, and immersive ceiling drops. Whether you want soft pastels for a baby birthday or luxury gold and chrome for an adult milestone, we customize the sizing and patterns to perfectly frame your main cake table.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '2 - 3 Hours setup',
    inclusions: [
      'Custom organic balloon arch / garland (up to 20ft)',
      'Theme-matching balloon bouquets (4 sets)',
      'Ceiling balloon clusters (up to 100 balloons)',
      'Professional onsite rigging & setup crew',
      'Inflation equipment and clean-up after teardown',
    ],
    gradient: 'from-[#FF4D6D] to-[#7C3AED]',
  },
  'birthday-decorations': {
    slug: 'birthday-decorations',
    title: 'Birthday Decorations',
    tagline: 'Elegant and complete setup solutions for milestone celebrations',
    description: 'Complete celebration setups, cake tables, party signages, lighting, and tablescapes for all ages.',
    longDescription: 'Make your birthday celebration complete with our dedicated birthday decoration packages. We design a focal-point cake table setup featuring elegant table runners, customized cake stands, warm ambient lighting, floral additions, and themed banners. From kids first birthdays to 50th grand celebrations, we coordinate color palettes, table centerpieces, and backdrop lights to create a cohesive luxury setting.',
    image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '3 - 4 Hours setup',
    inclusions: [
      'Central themed cake table with custom table runners',
      'Curated cake stands, cupcake platters, and dessert risers',
      'Happy Birthday warm-white LED neon sign',
      'Par-can lights and decorative spot lighting',
      'Welcome signage easel board with flower framing',
    ],
    gradient: 'from-[#FFD166] to-[#FF8A00]',
  },
  '3d-theme-decorations': {
    slug: '3d-theme-decorations',
    title: '3D Theme Decorations',
    tagline: 'Immersive themed setups with layered panels and structures',
    description: 'Immersive 3D cutout backdrops, custom character setups, structures, and stages that bring fantasy worlds to life.',
    longDescription: 'Bring your child\'s favorite stories to life with our premium 3D theme decorations. Using layered wooden and thermocol cutout backdrops, standing character figures, custom arches, and lighting tunnels, we construct a mini-wonderland on stage. Ideal for popular children\'s themes (Jungle Safari, Disney Princess, Cocomelon, Space Explorer) and luxury adult grand events.',
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '4 - 6 Hours setup',
    inclusions: [
      'Multi-layered 3D backdrop panel board (up to 16ft wide)',
      'Custom theme character standing cutouts (3-5 figures)',
      '3D cake cylinder stands matching the theme graphic',
      'Focus LED spotlights and custom floor mats',
      'Complete theme-integrated balloon garland frame',
    ],
    gradient: 'from-[#7C3AED] to-[#3B82F6]',
  },
  '2d-theme-decorations': {
    slug: '2d-theme-decorations',
    title: '2D Theme Decorations',
    tagline: 'Crisp themed printing, banners, and backdrops for elegant celebrations',
    description: 'Beautiful 2D themed prints, custom backdrops, character cutouts, and wall decals for elegant settings.',
    longDescription: 'A cost-effective yet highly customized theme setup. We design high-definition vector graphics containing cartoons, floral prints, or birthday banners, print them on high-grade non-reflective panels, and mount them on solid frames. Complete with theme color balloon arches and floor details, these setups offer a crisp, neat backdrop for your photography.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '3 - 4 Hours setup',
    inclusions: [
      'HD custom printed background banner (up to 10ft)',
      '2D character board cutouts flanking the cake table',
      'Cake table wrapping with themed graphic skirts',
      'Theme balloon pillars and framing garlands',
      'Warm background par lighting details',
    ],
    gradient: 'from-pink-400 to-rose-600',
  },
  'customized-decorations': {
    slug: 'customized-decorations',
    title: 'Customized Decorations',
    tagline: 'Bespoke luxury decorations modeled from your imagination',
    description: 'Bespoke designs tailored from scratch to match your specific vision, dreams, and venue requirements.',
    longDescription: 'Have a completely unique theme or venue configuration? Our Customized Decoration service is built just for you. We consult closely with you to design color schemes, custom-built backdrop frames, floral installations, or LED glowing configurations. We handle complex setups at home terraces, banquet halls, hotels, and lawns, adapting the decoration to match your precise aesthetic preference.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '4 - 6 Hours setup',
    inclusions: [
      'Consultation & unique custom 2D draft review',
      'Custom backdrops tailored to the venue dimensions',
      'Neon word signs, fairy lights, and ceiling suspensions',
      'Exotic artificial flowers & premium fabrics styling',
      'Full assembly, styling checks, and post-event teardown',
    ],
    gradient: 'from-amber-400 to-orange-500',
  },
  'theme-backgrounds': {
    slug: 'theme-backgrounds',
    title: 'Theme Backgrounds',
    tagline: 'Interactive photo booths and media walls that pop in photos',
    description: 'Premium photobooths and media walls, complete with props, lighting, and professional backdrop panels.',
    longDescription: 'Provide your guests with an interactive space to capture lifelong memories. Our theme backgrounds and photo booths feature elegant grass walls, round circle panels, custom neon texts, balloon halos, and professional props. We optimize the setups for studio lighting, ensuring that every photo taken by your guests or photographer looks stunning.',
    image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=600&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?q=80&w=600&auto=format&fit=crop',
    ],
    duration: '2 - 3 Hours setup',
    inclusions: [
      'Circle backdrop frame or grass-panel wall setup',
      'Warm neon sign board (e.g. "Let\'s Celebrate", "Happy Birthday")',
      'Theme balloon border framing (12ft - 15ft)',
      'Interactive handheld photo props (10 items)',
      'Focus lights pointing at the photo zone',
    ],
    gradient: 'from-violet-500 to-fuchsia-600',
  },
}

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { playClick, playHover } = useSound()

  useEffect(() => {
    // Scroll to top on page mount
    window.scrollTo(0, 0)
  }, [slug])

  const service = slug ? serviceDetailsData[slug] : null

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-bg dark:bg-dark-bg text-center px-6">
        <h2 className="font-display font-bold text-3xl text-slate-800 dark:text-white mb-4">Service Not Found</h2>
        <button
          onClick={() => { playClick(); navigate('/') }}
          className="px-6 py-3 rounded-full bg-primary text-white font-bold shadow-md hover:bg-primary-dark transition-all"
        >
          Return Home
        </button>
      </div>
    )
  }

  const handleBookNow = () => {
    playClick()
    // Navigate home, and pre-select this service in contact form
    navigate('/', { state: { scrollTo: 'contact', preselectTheme: service.title } })
  }

  return (
    <div className="bg-brand-bg dark:bg-dark-bg transition-colors duration-300 min-h-screen pt-28 pb-24 overflow-x-hidden">
      {/* Decorative Glow Blobs */}
      <div className="absolute top-20 left-1/10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Back Button */}
        <button
          onClick={() => { playClick(); navigate(-1) }}
          onMouseEnter={playHover}
          className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-wider text-slate-500 hover:text-primary dark:text-gray-400 dark:hover:text-white mb-8 transition-colors group cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          <span>Back to Services</span>
        </button>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Image Gallery & Previews */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl overflow-hidden border border-white/20 shadow-xl aspect-[16/10] w-full bg-slate-100 dark:bg-slate-900"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Gallery Previews Grid */}
            <div className="grid grid-cols-3 gap-4">
              {service.gallery.map((imgUrl, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="rounded-2xl overflow-hidden border border-white/20 shadow-sm aspect-[4/3] bg-slate-100 dark:bg-slate-900"
                >
                  <img
                    src={imgUrl}
                    alt={`${service.title} Preview ${i+1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Service Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest mb-4">
                <Sparkles className="w-3.5 h-3.5 text-secondary fill-secondary" />
                <span>Premium Service</span>
              </div>

              {/* Title */}
              <h1 className="font-display font-extrabold text-4xl text-slate-900 dark:text-white mb-2 leading-tight">
                {service.title}
              </h1>

              {/* Tagline */}
              <p className="font-display font-semibold text-lg text-primary dark:text-secondary mb-6 leading-relaxed">
                {service.tagline}
              </p>

              {/* Long Description */}
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-8 font-body">
                {service.longDescription}
              </p>

              {/* Specs Box */}
              <div className="p-6 rounded-2xl glass-card border border-white/20 shadow-sm flex flex-col gap-4 mb-8">
                {/* Duration */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${service.gradient} text-white flex items-center justify-center shadow-sm`}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400 dark:text-gray-500 leading-none mb-1">
                      Setup Time
                    </h4>
                    <span className="text-base font-bold text-slate-800 dark:text-white leading-none">
                      {service.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Inclusions List */}
              <div className="flex flex-col gap-3 mb-10">
                <h3 className="font-display font-bold text-sm uppercase tracking-wider text-slate-800 dark:text-white">
                  Package Inclusions
                </h3>
                <div className="flex flex-col gap-2.5">
                  {service.inclusions.map((inc, i) => (
                    <div key={i} className="flex gap-2.5 items-start">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">
                        {inc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Book Now button */}
            <motion.button
              onClick={handleBookNow}
              onMouseEnter={playHover}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full py-4 rounded-xl font-bold text-white text-center gradient-pink-purple shadow-lg shadow-primary/25 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <Calendar className="w-5 h-5" />
              <span>Book This Service Theme</span>
            </motion.button>
          </div>

        </div>

      </div>
    </div>
  )
}
