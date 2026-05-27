import React, { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';

export default function Welcome() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [sequenceFinished, setSequenceFinished] = useState(false);
  
  // Set these to match your actual frames!
  const frameCount = 240; // Change to your total number of frames
  const framePrefix = '/intro/frame_'; // Path to your frames (relative to public directory)
  const frameSuffix = '.webp'; // e.g. .png, .jpg
  
  const currentFrameIndex = (index) => {
    // Modify the padding logic based on your naming convention (e.g. frame_0001 vs frame_1)
    return `${framePrefix}${(index + 1).toString().padStart(5, '0')}${frameSuffix}`;
  };

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const imgArray = [];
      let loadedCount = 0;
      
      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.src = currentFrameIndex(i);
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        img.onerror = () => {
           // Handle errors silently for now, as images might not exist yet
           loadedCount++;
           if (loadedCount === frameCount) {
             setLoaded(true);
           }
        }
        imgArray.push(img);
      }
      setImages(imgArray);
    };
    
    loadImages();
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    if (!loaded || images.length === 0) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    
    const render = () => {
      const index = Math.round(frameIndex.get());
      if (images[index] && images[index].complete && images[index].naturalHeight !== 0) {
        
        // Clear canvas with transparency instead of black fill
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Calculate aspect ratio to fit/cover
        const img = images[index];
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
        
        // Cover behavior
        if (canvasRatio > imgRatio) {
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgRatio;
          offsetY = (canvas.height - drawHeight) / 2;
        } else {
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgRatio;
          offsetX = (canvas.width - drawWidth) / 2;
        }
        
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };
    
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial setup

    // Subscribe to framer-motion changes
    const unsubscribe = frameIndex.on('change', render);

    return () => {
      unsubscribe();
      window.removeEventListener('resize', handleResize);
    };
  }, [loaded, images, frameIndex]);

  return (
    <section ref={containerRef} className="relative w-full bg-transparent hidden md:block" style={{ height: '400vh' }}>
      <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-transparent backdrop-blur-md">
        {/* Placeholder if images are missing or loading */}
        {!loaded && (
           <div className="absolute z-10 text-brand-gold flex flex-col items-center">
             <div className="w-12 h-12 border-t-2 border-brand-gold rounded-full animate-spin mb-4" />
             <p className="mb-2 uppercase tracking-widest text-sm">Loading experience...</p>
             <p className="text-xs opacity-50">Please upload your frames to public/frames/</p>
           </div>
        )}
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full object-cover z-0" 
        />
        
        {/* Optional gradient overlay to ensure text is readable */}
        <div className="absolute inset-0 z-10 bg-transparent pointer-events-none" />
        
      </div>
    </section>
  );
}
