import ColorBends from './components/ColorBends';
import SplitText from "./components/SplitText";
import ProfileCard from './components/ProfileCard';
import FadeContent from './components/FadeContent';
import ScrollReveal from './components/ScrollReveal';
import TrueFocus from './components/TrueFocus';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import LogoLoop from './components/LogoLoop';
import CircularGallery from './components/CircularGallery';
import { SiReact, SiTailwindcss, SiHtml5, SiJavascript,SiCss3 } from 'react-icons/si';
gsap.registerPlugin(ScrollToPlugin);




function App() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiHtml5 />, title: "HTML5", href: "#" },
    { node: <SiJavascript />, title: "JavaScript", href: "#" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiCss3 />, title: "CSS 3", href: "#" }
  ];

  
  
  return (
    <div className='font-sans'>
      {/* navbar */}
      <div className='relative'>
        <div className='bg-white/10 border-1 border-gray-700 backdrop-blur-sm w-150 mx-auto mt-4 text-2xl font-medium text-center text-white py-2 px-4 rounded-full z-20 flex justify-evenly fixed left-1/2 transform -translate-x-1/2'>
          <a className='hover:text-gray-300 cursor-pointer' onClick={() => {gsap.to(window, { duration: 2, scrollTo: "#home", ease: "power2.out" });}}>Home</a>
          <a className='hover:text-gray-300 cursor-pointer' onClick={() => {gsap.to(window, { duration: 2, scrollTo: "#about", ease: "power2.out" });}}>About</a>
          <a className='hover:text-gray-300 cursor-pointer' onClick={() => {gsap.to(window, { duration: 2, scrollTo: "#skill", ease: "power2.out" });}}>Skill</a>
          <a className='hover:text-gray-300 cursor-pointer' onClick={() => {gsap.to(window, { duration: 2, scrollTo: "#project", ease: "power2.out" });}}>Project</a>
        </div>
      </div>
      {/* end Navbar */}

      {/* jumbotron */}

      <div className='grid place-items-center min-h-screen'>
        {/* backgorund jumbotron */}
        <div className='background absolute top-0 left-0 w-full h-full overflow-hidden' id='home'>
          <ColorBends
            className="relative top-0 left-0 w-full h-full -z-10"
            colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
            rotation={10}
            speed={0.7}
            scale={1.5}
            frequency={2}
            warpStrength={1.2}
            mouseInfluence={0.8}
            parallax={0.6}
            noise={0.08}
            transparent={false}
          />
        </div>

        {/* content jumbotron */}
        <div className='z-10 flex flex-col items-center'>
            <SplitText
              text="Hey there! I’m RinaldoEB 👋"
              className="text-4xl md:text-6xl font-bold text-white mt-10"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
            <SplitText
              text="I build modern, responsive, and beautiful websites — powered by creativity and code."
              className="text-2xl font-md text-white mt-10"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          {/* button jumbotron*/}

          <FadeContent blur={true} duration={600} easing="ease-out" initialOpacity={0} className='z-0'>
            <input type="button" value="Get started" className='text-white font-semibold py-5 px-5 bg-indigo-500/30 z-10  rounded-full cursor-pointer mt-10' onClick={() => {
              gsap.to(window, { duration: 2, scrollTo: "#about", ease: "power2.out" });
            }}  
          />
          </FadeContent>
          
          {/* end button jumbotron */}
        </div>
        {/* end content jumbotron */}



      </div>
      {/* end jumbotron */}

      {/* about Me */}
      <div className='bg-black flex flex-col justify-center items-center min-h-screen' id='about'>
        {/* title about me */}
          <SplitText
                text="About Me"
                className="mx-auto text-4xl font-bold text-white mt-10 flex"
                delay={30}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.1}
                rootMargin="-100px"
                textAlign="center"
                onLetterAnimationComplete={handleAnimationComplete}
          />
        {/* end title about me */}

        {/* content about me */}
          <div className='flex flex-col md:flex-row items-center justify-center gap-10 my-30 max-w-7xl mx-auto text-justify md:text-justify'>
            <ScrollReveal
              className="max-w-md"
              baseOpacity={1}
              enableBlur={true}
              baseRotation={5}
              blurStrength={10}
            >
                I’m a student at Universitas Bunda Mulia majoring in Information Systems.
                I’m passionate about technology and creativity — especially in building software that makes people’s lives easier.
                My goal is to become a professional Software Engineer who turns ideas into reality through clean and modern code
            </ScrollReveal>

              <ProfileCard
                id="about"
                className="place-self-center"

                name="Rinaldo EB"

                title="Software Engineer"

                handle="RinaldoEB"

                status="Online"

                contactText="Contact Me"

                avatarUrl="/src/path/profile.jpeg"

                showUserInfo={true}

                enableTilt={true}

                enableMobileTilt={false}

                onContactClick={() => window.open('https://github.com/RinaldoEB', '_blank')}
              />
          </div>
        {/* end content about me  */}
      </div>
      {/* end about me */}

      {/* skill */}
        <div id='project' className=''>
          <TrueFocus
            sentence="My Projects"
            manualMode={false}
            blurAmount={5}
            borderColor="purple"
            glowColor="rgba(132, 0, 255, 0.6)"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
          <div>
      <div style={{ position: 'relative', overflow: 'hidden'}} id='skill'>
        <LogoLoop
          className="bg-black text-white my-0 py-10"
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#000000ff"
          ariaLabel="Technology partners"
        />
      </div>
      {/* end skill */}

      {/* project */}
              <div style={{ height: '600px', position: 'relative' }}>
                <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02}/>
              </div>

      </div>
      </div>

      {/* end project */}

    </div>
    
  
  );
}

export default App;
