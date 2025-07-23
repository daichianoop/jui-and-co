"use client"

interface HeroSectionProps {
  title: string
  subtitle?: string
  backgroundImage?: string
}

export function HeroSection({ title, subtitle, backgroundImage }: HeroSectionProps) {
  return (
    <section
      className="relative h-64 md:h-80 lg:h-96 flex items-center justify-center bg-cover bg-center bg-gray-200 dark:bg-gray-800 transition-colors duration-300"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : "linear-gradient(135deg, #B1B771 0%, #8D962D 100%)",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center text-white animate-in fade-in slide-in-from-bottom-4 duration-700">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide">{title}</h1>
        {subtitle && <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto px-4">{subtitle}</p>}
      </div>
    </section>
  )
}
