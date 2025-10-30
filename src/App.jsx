import ColorBends from './components/ColorBends';
import SplitText from "./components/SplitText";
import ProfileCard from './components/ProfileCard';



function App() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  };

  return (
    <div className=''>
      {/* navbar */}
      <div className='bg-white/19 backdrop-blur-sm w-150 mx-auto mt-4 text-2xl font-medium text-center text-white py-2 px-4 rounded-full relative z-20 flex justify-evenly'>
        <a href="https://youtube.com" className='hover:text-gray-300'>Home</a>
        <a href="https://youtube.com" className='hover:text-gray-300'>About Me</a>
        <a href="https://youtube.com" className='hover:text-gray-300'>Skill</a>
        <a href="https://youtube.com" className='hover:text-gray-300'>Project</a>
      </div>
      {/* end Navbar */}
      <div className='grid grid-cols-2 place-items-center min-h-screen'>
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
          <SplitText
            text="Hello Everyone !!!!"
            className="text-4xl md:text-6xl font-bold text-white mt-10"
            delay={100}
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
    </div>
    
  
  );
}

export default App;
