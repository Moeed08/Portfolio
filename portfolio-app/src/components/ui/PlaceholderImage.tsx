import React from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  className?: string;
  alt?: string;
}

const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ 
  width, 
  height, 
  className = '', 
  alt = 'Placeholder' 
}) => {
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
        <div className="text-4xl mb-2">�️</div>
        <div className="text-sm font-medium">{alt}</div>
        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {width} × {height}
        </div>
      </div>
    </div>
  );
};

export default PlaceholderImage;
