import { type AppType } from "next/dist/shared/lib/utils";
import { Inter } from 'next/font/google'
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Head from "next/head";
import CallToAction from "@/components/CallToAction";
// import { motion , useScroll, useSpring} from "framer-motion";

const inter = Inter({ weight: ['400', '500', '700', '800'], subsets: ['latin'] })

const MyApp: AppType = ({ Component, pageProps }) => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001
  // });
  return (
        <>
          <Head>
            <title>Christian Siku</title>
            <meta name="description" content="Christian Siku personal website" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ThemeProvider attribute="class">
            {/* <motion.div className="w-full h-1 mx-auto bg-purple dark:bg-cinder fixed top-0 left-0 right-0 origin-[0]" style={{ scaleX }}> */}
              <div className={`${inter.className} relative w-full mx-auto`}>
                <Component {...pageProps} />
                <CallToAction/>
              </div>
            {/* </motion.div> */}
          </ThemeProvider>
        </>)
};

export default MyApp;
