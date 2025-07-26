"use client"

import { Header } from "@/components/header"
import { AnimatedBackground } from "@/components/animated-background"
import { Footer } from "@/components/footer"
import { Heart, Leaf, Users, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-baby-powder transition-colors duration-300">
      <AnimatedBackground />
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-sage/20 to-moss-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-jet mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 font-mono">
            About JUI & Co
          </h1>
          <p className="text-lg text-jet/80 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200 font-mono">
            Crafting sustainable fashion with a passion for quality, style, and environmental responsibility.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-3xl font-bold text-jet mb-6 font-mono">Our Story</h2>
              <p className="text-jet/80 mb-4 font-mono">
                Founded with a vision to revolutionize sustainable fashion, JUI & Co began as a small dream to create
                clothing that doesn&#39;t compromise on style or environmental values.
              </p>
              <p className="text-jet/80 mb-4 font-mono">
                Our signature sage and moss green palette reflects our deep connection to nature and our commitment to
                creating pieces that are both timeless and contemporary.
              </p>
              <p className="text-jet/80 font-mono">
                Every piece in our collection is thoughtfully designed and ethically produced, ensuring that fashion
                lovers can look good while feeling good about their choices.
              </p>
            </div>
            <div className="animate-in fade-in slide-in-from-right duration-700">
              <div className="bg-sage/10 rounded-lg p-8 h-64 flex items-center justify-center">
                <Heart className="h-24 w-24 text-moss-green" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-sage/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-jet mb-4 font-mono">Our Values</h2>
            <p className="text-jet/80 max-w-2xl mx-auto font-mono">
              The principles that guide everything we do at JUI & Co
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="bg-moss-green/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-moss-green" />
              </div>
              <h3 className="font-semibold text-jet mb-2 font-mono">Sustainability</h3>
              <p className="text-jet/70 text-sm font-mono">
                Committed to eco-friendly practices and sustainable materials in every aspect of our production.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="bg-sage/20 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-moss-green" />
              </div>
              <h3 className="font-semibold text-jet mb-2 font-mono">Quality</h3>
              <p className="text-jet/70 text-sm font-mono">
                Premium materials and meticulous craftsmanship ensure our pieces stand the test of time.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
              <div className="bg-redwood/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-redwood" />
              </div>
              <h3 className="font-semibold text-jet mb-2 font-mono">Community</h3>
              <p className="text-jet/70 text-sm font-mono">
                Building a community of conscious consumers who value ethical fashion choices.
              </p>
            </div>

            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <div className="bg-moss-green/10 rounded-full p-6 w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-moss-green" />
              </div>
              <h3 className="font-semibold text-jet mb-2 font-mono">Passion</h3>
              <p className="text-jet/70 text-sm font-mono">
                Every design is created with love and attention to detail, reflecting our passion for fashion.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-jet mb-6 font-mono">Our Mission</h2>
          <p className="text-lg text-jet/80 leading-relaxed font-mono">
            To create beautiful, sustainable fashion that empowers individuals to express their unique style while
            making a positive impact on the world. We believe that fashion should be a force for good, bringing together
            style, sustainability, and social responsibility in every piece we create.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  )
}
