import React from 'react';

const SectionTitle = ({title, subtitle}) => {
    return (
        <div>
            <div className=" my-10">
      {/* Title with pink borders */}
      <div className="flex items-center justify-start gap-4">
        <span className="h-0.5 w-12 bg-pink-500 rounded"></span>
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
        <span className="h-0.5 w-12 bg-pink-500 rounded"></span>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-md">
          {subtitle}
        </p>
      )}
    </div>
        </div>
    );
};

export default SectionTitle;