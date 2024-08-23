import React from 'react';

export const WrapperContainer = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className="flex justify-center">
      <div className={`${className} grid w-full max-w-6xl gap-y-7 md:gap-y-10`}>
        {children}
      </div>
    </div>
  );
};
