import React, { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, Preload } from '@react-three/drei';
import * as random from "maath/random/dist/maath-random.esm";

const Stars = React.memo(({isMobile, ...props}) => {
  const ref = useRef();
  
  const sphere = useMemo(() => random.inSphere(new Float32Array(5000), { radius: 1.2 }), []);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  const starSize = isMobile ? 0.0004 : 0.0012;
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled
        {...props}
      >
        <pointsMaterial
          transparent
          color='#fff2c8'
          size={starSize} 
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
});

Stars.displayName = 'Stars';


const StarsCanvas = React.memo(({isMobile}) => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars isMobile={isMobile}/>
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
});

StarsCanvas.displayName = "StarsCanvas";
export default StarsCanvas;
