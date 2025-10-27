import ColorBends from './components/ColorBends';
import SplitText from "./components/SplitText";


function App() {
  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  };

  return (
    
    <div className='grid place-items-center bg-stone-900 relative h-full'>
      <SplitText
        text="Hello Aldo Ganteng!"
        className="text-5xl grid justify-items-center font-semibold text-center absolute z-100 text-white pointer-events-none"
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
      <ColorBends
        // style={"height :100px"}
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
  
  );
}

export default App;
