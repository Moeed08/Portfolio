import React from 'react';
import Image from 'next/image';

interface PlaceholderImageProps {
  width: number;
  height: number;
  className?: string;
  alt?: string;
  src?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width, 
  height, 
  className = '', 
  alt = 'Placeholder',
  src
}) => {
  // If src is provided, use Next.js Image component
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        priority={false}
      />
    );
  }

  // Fallback to placeholder
  return (
    <div 
      className={`bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 flex items-center justify-center text-gray-600 dark:text-gray-300 rounded-lg ${className}`}
      style={{ 
        width: width ? `${width}px` : '100%', 
        height: height ? `${height}px` : '100%',
        minHeight: '200px'
      }}
      role="img"
      aria-label={alt}
    >
      <div className="text-center p-4">
        <div className="text-4xl mb-2">🖼️</div>
        <div className="text-sm font-medium">{alt}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {width} × {height}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
