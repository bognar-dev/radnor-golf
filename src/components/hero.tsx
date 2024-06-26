import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section id="home" className="bg-[url('/golf-course.jpg')] bg-cover bg-center h-[80vh] flex items-center justify-center">
      <div className="text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to Radnor Golf Club</h2>
        <p className="text-lg mb-8">Discover the beauty and challenge of our championship golf course.</p>
        <Button size="lg">Explore the Course</Button>
      </div>
    </section>
  )
}
