import { type AppType } from "next/dist/shared/lib/utils";
import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Head from "next/head";
import { motion , useScroll, useSpring} from "framer-motion";


const MyApp: AppType = ({ Component, pageProps }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
        <>
          <Head>
            <title>Christian Siku</title>
            <meta name="description" content="Christian Siku personal website" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <ThemeProvider attribute="class">
            <motion.div className="w-full mx-auto bg-red-500 fixed top-0 left-0 right-0 h-2 origin-[0]" style={{ scaleX }}>
              <Component {...pageProps} />
            </motion.div>
          </ThemeProvider>
        </>)
};

export default MyApp;
