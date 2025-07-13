import Head from "next/head";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="p-6 space-y-10">
      <Head>
        <title>Servat.ai | AI Investment Club</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Invest in AI startups across medicine, infrastructure, blockchain, and autonomy with Servat.ai"
        />
      </Head>

      <section className="text-center space-y-4">
        <img src="/images/servat-logo.png" alt="Servat.ai logo" className="w-32 mx-auto" />
        <h1 className="text-4xl font-bold">Welcome to Servat.ai</h1>
        <p className="text-xl max-w-3xl mx-auto">
          A member-led investment club supporting early-stage AI startups and public companies driving innovation in medicine, infrastructure, autonomous systems, and beyond.
        </p>
        <Button className="mt-4">Invest with Us</Button>
      </section>

      <Tabs defaultValue="focus" className="max-w-6xl mx-auto">
        <TabsList className="flex justify-center flex-wrap gap-2">
          <TabsTrigger value="focus">Investment Focus</TabsTrigger>
          <TabsTrigger value="about">Who We Are</TabsTrigger>
          <TabsTrigger value="invest">Invest With Us</TabsTrigger>
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="blog">Blog</TabsTrigger>
          <TabsTrigger value="contact">Contact</TabsTrigger>
        </TabsList>

        <div className="mt-6">
          <TabsContent value="focus">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-4 space-y-2">
                  <img src="/images/ai-medicine.jpg" alt="AI in Medicine" className="rounded-xl" />
                  <h2 className="text-xl font-semibold">Medical AI</h2>
                  <p>
                    Investing in startups revolutionizing diagnostics, personalized medicine, and digital health using AI.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <img src="/images/data-infra.jpg" alt="Data Center Infrastructure" className="rounded-xl" />
                  <h2 className="text-xl font-semibold">Data & Power Infrastructure</h2>
                  <p>
                    Supporting companies building the physical backbone of AI: power grids, cooling systems, and edge computing.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <img src="/images/autonomous.jpg" alt="Autonomous Vehicles" className="rounded-xl" />
                  <h2 className="text-xl font-semibold">Autonomous Systems</h2>
                  <p>
                    Funding innovators in self-driving cars, robotics, and industrial automation.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 space-y-2">
                  <img src="/images/blockchain.jpg" alt="Blockchain & AI" className="rounded-xl" />
                  <h2 className="text-xl font-semibold">Blockchain x AI</h2>
                  <p>
                    Exploring synergies between decentralized computing and intelligent systems.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="about">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Who We Are</h2>
              <p>
                Servat.ai is a Delaware-based LLC investment club designed to democratize access to high-growth AI startups and public companies. We are mission-driven investors—scientists, physicians, engineers, and entrepreneurs—united by a shared belief in the transformative power of artificial intelligence.
              </p>
              <p>
                Our governance model ensures transparency and collaboration, with voting rights proportional to capital contributions and a diverse investment committee performing rigorous due diligence.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="invest">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Invest With Us</h2>
              <p>
                We welcome both accredited and non-accredited investors under Regulation D and Regulation Crowdfunding.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Minimum investment: $5,000 (non-accredited), $25,000 (accredited)</li>
                <li>Fund size target: $5 million over 3 years</li>
                <li>Investment timeline: 7–10 year horizon, with targeted 3–5x returns on successful exits</li>
              </ul>
              <p>
                Ready to learn more? Contact us to receive our Offering Memorandum and Subscription Agreement.
              </p>
              <Button className="mt-2">Join the Club</Button>
            </div>
          </TabsContent>

          <TabsContent value="portfolio">
            <div className="space-y-4 max-w-5xl mx-auto">
              <h2 className="text-2xl font-bold">Our Portfolio</h2>
              <p>We selectively back startups at the forefront of AI across medicine, infrastructure, and beyond.</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <li className="border rounded-xl p-4">Startup A – Personalized AI Diagnostics</li>
                <li className="border rounded-xl p-4">Startup B – Energy-Efficient Data Centers</li>
                <li className="border rounded-xl p-4">Startup C – Self-Driving Fleet Intelligence</li>
                <li className="border rounded-xl p-4">Startup D – AI x Blockchain Platform</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="blog">
            <div className="space-y-4 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold">Latest Insights</h2>
              <p>Explore investment commentary, industry analysis, and startup trends from our team and network.</p>
              <ul className="list-disc pl-6">
                <li>Why AI Infrastructure Is the Next Gold Rush</li>
                <li>How Decentralized AI Will Reshape Finance</li>
                <li>Top 3 AI Startups We're Watching in 2025</li>
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="contact">
            <div className="space-y-4 max-w-xl mx-auto">
              <h2 className="text-2xl font-bold">Contact Us</h2>
              <p>Want to learn more or speak to our team? Fill out the form and we’ll be in touch.</p>
              <form className="space-y-4">
                <Input placeholder="Your Name" required />
                <Input placeholder="Email Address" type="email" required />
                <Input placeholder="Message or Inquiry" className="h-24" />
                <Button type="submit">Submit</Button>
              </form>
            </div>
          </TabsContent>
        </div>
      </Tabs>

      <footer className="text-center text-sm mt-12 text-gray-500">
        &copy; 2025 Servat.ai Investment Club. All rights reserved.
      </footer>
    </div>
  );
}
