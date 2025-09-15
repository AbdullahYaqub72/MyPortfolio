'use client';

import Image from 'next/image';

export default function HeroScene() {
  return (
    <div className="w-full h-[420px] md:h-[560px] relative flex items-center justify-center">
      <div className="relative w-full h-full max-w-lg">
        {/* Placeholder for your image - replace 'your-image.jpg' with your actual image filename */}
        <Image
          src="/my-img.png" // Replace with your actual image filename
          alt="3D Modeling Workspace - Nightfall Protocol Figurine"
          fill
          className="object-cover rounded-lg shadow-2xl scale-75"
          priority
        />
        
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10 rounded-lg"></div>
        
        {/* Optional caption */}
        <div className="absolute bottom-4 left-4 right-4 text-white text-sm opacity-90">
          <p className="font-medium">3D Modeling & Design</p>
          <p className="text-xs">Nightfall Protocol Collector&apos;s Edition</p>
        </div>
      </div>
    </div>
  );
}
