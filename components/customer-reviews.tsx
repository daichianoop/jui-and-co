"use client"
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"

export default function CustomerReviews() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-jet items-center justify-center relative overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-bold text-baby-powder mb-4 font-mono">What Our Customers Say</h2>
        <p className="text-baby-powder/80 font-mono">Real reviews from real customers</p>
      </div>
      <InfiniteMovingCards items={testimonials} direction="right" speed="slow" pauseOnHover={false} />
    </div>
  )
}

const testimonials = [
  {
    quote:
      "The quality of JUI & Co clothing is exceptional. The sage green tee I bought is so comfortable and the fit is perfect. I've received so many compliments!",
    name: "Priya Sharma",
    title: "Fashion Enthusiast",
  },
  {
    quote:
      "I love the sustainable approach and the beautiful color palette. The moss green co-ord set is my new favorite outfit. Great quality and fast delivery!",
    name: "Arjun Patel",
    title: "Eco-conscious Shopper",
  },
  {
    quote:
      "JUI & Co has become my go-to brand for comfortable yet stylish clothing. The baby powder dress is absolutely gorgeous and fits like a dream.",
    name: "Sneha Reddy",
    title: "Regular Customer",
  },
  {
    quote:
      "Amazing customer service and beautiful products. The attention to detail in every piece is remarkable. Highly recommend JUI & Co!",
    name: "Rahul Kumar",
    title: "Happy Customer",
  },
  {
    quote:
      "The unisex collection is fantastic. Great quality, comfortable fit, and the colors are exactly as shown. Will definitely order again!",
    name: "Alex Johnson",
    title: "Style Blogger",
  },
]
