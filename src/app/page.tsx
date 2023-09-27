import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";

export default function Home() {
  const stats = [
    {
      title: 'Courses',
      value: 25,
    },
    {
      title: 'Students enrolled',
      value: 30000,
    },
    {
      title: 'Instructors',
      value: 500,
    },
    {
      title: 'Certified students',
      value: 185,
    },
  ]
  return (
    <main className="bg-mobile-bg md:bg-white lg:bg-white">
      <Hero />
      <Stats stats={stats} />
    </main>
  );
}
