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
          {/* (Tab contents remain unchanged) */}
        </div>
      </Tabs>

      <footer className="text-center text-sm mt-12 text-gray-500">
        &copy; 2025 Servat.ai Investment Club. All rights reserved.
      </footer>
    </div>
  );
}
