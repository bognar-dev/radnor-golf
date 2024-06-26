

import { Icons } from "@/components/icons"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Section from "@/components/home-section"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-[#f5f5f5] dark:bg-[#121212] text-black dark:text-white">
      
      <Hero />
      <Section id="golf" title="The Golf Experience">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/placeholder.svg" alt="Golf Course" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Championship Golf Course</h3>
            <p className="mb-8">
              Radnor Golf Club boasts a challenging 18-hole championship golf course that has been meticulously
              designed to provide an unforgettable golfing experience. With stunning views, strategically placed
              bunkers, and well-manicured greens, our course will test the skills of golfers of all levels.
            </p>
            <Button variant="outline">Tee Times</Button>
          </div>
        </div>
      </Section>
      <Section id="clubhouse" title="The Club House" className="bg-[#f5f5f5] dark:bg-[#121212] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/placeholder.svg" alt="Club House" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Relax and Unwind</h3>
            <p className="mb-8">
              After a round of golf, retreat to our elegant club house, where you can enjoy a delicious meal, sip on a
              refreshing beverage, and take in the stunning views of the course. Our club house offers a comfortable
              and inviting atmosphere, perfect for socializing with fellow golfers or simply unwinding.
            </p>
            <Button variant="outline">Dining Menu</Button>
          </div>
        </div>
      </Section>
      <Section id="stay" title="Stay With Us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/placeholder.svg" alt="Accommodation" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Luxury Accommodation</h3>
            <p className="mb-8">
              Radnor Golf Club offers luxurious on-site accommodation, providing the perfect opportunity to extend
              your golfing experience. Our well-appointed rooms and suites offer all the amenities you need for a
              comfortable and relaxing stay, ensuring you can make the most of your time at our club.
            </p>
            <Button variant="outline">Book Your Stay</Button>
          </div>
        </div>
      </Section>
      <Section id="location" title="Where to Find Us" className="bg-[#f5f5f5] dark:bg-[#121212] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Image src="/placeholder.svg" alt="Location" width={600} height={400} className="rounded-lg" />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Conveniently Located</h3>
            <p className="mb-8">
              Radnor Golf Club is conveniently located in the heart of Cornwall, just a short drive from major
              transportation hubs. Whether you &apos re coming from near or far, our club is easily accessible and provides
              the perfect destination for your golfing getaway.
            </p>
            <Button variant="outline">Get Directions</Button>
          </div>
        </div>
      </Section>
      <Section id="contact" title="Contact Us">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <form className="space-y-4">
              <Input placeholder="Name" />
              <Input placeholder="Email" type="email" />
              <Textarea placeholder="Message" />
              <Button>Submit</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
            <p className="mb-4">
              Radnor Golf Club
              <br />
              Radnor, Cornwall
              <br />
              TR1 2XY
            </p>
            <p className="mb-4">
              Phone: 01234 567890
              <br />
              Email: info@radnorgolfclub.com
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-[#4CAF50] hover:text-[#388E3C]" prefetch={false}>
                <Icons.FacebookIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#4CAF50] hover:text-[#388E3C]" prefetch={false}>
                <Icons.TwitterIcon className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-[#4CAF50] hover:text-[#388E3C]" prefetch={false}>
                <Icons.InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  )
}
