import ColorBends from './components/ColorBends';
import SplitText from "./components/SplitText";
import ProfileCard from './components/ProfileCard';
import FadeContent from './components/FadeContent';



function App() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  };

  return (
    <div className='font-sans'>
      {/* navbar */}
      <div className='relative'>
        <div className='bg-white/19 backdrop-blur-sm w-150 mx-auto mt-4 text-2xl font-medium text-center text-white py-2 px-4 rounded-full z-20 flex justify-evenly fixed left-1/2 transform -translate-x-1/2'>
          <a href="https://youtube.com" className='hover:text-gray-300'>Home</a>
          <a href="https://youtube.com" className='hover:text-gray-300'>About Me</a>
          <a href="https://youtube.com" className='hover:text-gray-300'>Skill</a>
          <a href="https://youtube.com" className='hover:text-gray-300'>Project</a>
        </div>
      </div>
      {/* end Navbar */}

      {/* jumbotron */}

      <div className='grid place-items-center min-h-screen'>
        {/* backgorund jumbotron */}
        <div className='background absolute top-0 left-0 w-full h-full overflow-hidden'>
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
            <input type="button" value="Get started" className='text-white font-semibold py-5 px-5 bg-indigo-500/30 z-10  rounded-full cursor-pointer mt-10' onClick={() => location.href='#about'}  />
          </FadeContent>
          
          {/* end button jumbotron */}
        </div>
        {/* end content jumbotron */}



      </div>
      {/* end jumbotron */}

      {/* about Me */}
      <div className='bg-black flex flex-col' id='about'>
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
          <div className='container w-300 flex justify-items-center mt-30'>
            <SplitText
                text="lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                className="mx-auto text-4xl font-lg text-left text-white mt-10 flex"
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

    </div>
    
  
  );
}

export default App;
