import Layout from "./components/layout"
import Hero from '@/app/components/Home/hero'

export async function generateMetadata() {
  return {
    title: 'SGM Portfolio',
    description: '오늘도 코딩중~',
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default function Home() {
  return (
    <Layout>
      <section className="flex-min-h-screen flex-col items-center justify-center text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                  <Hero/>
                </div>
            </section>
    </Layout>
  )
}