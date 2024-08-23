interface Button {
  onClick: () => void;
  variant?: 'solid' | 'outline';
  className?: string;
  content: string | number;
  rounded?: boolean;
  disabled?: boolean;
  iconClassName?: string;
}

export const Button = ({
  className = '',
  variant = 'solid',
  onClick,
  content,
  rounded = true,
  disabled,
  iconClassName,
}: Button) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`${variant === 'outline' ? 'border-[1px] border-blue bg-white text-blue' : 'bg-blue text-white'} ${className} ${rounded ? 'rounded-md' : ''} px-3 py-1 text-sm duration-300 hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:opacity-75 md:px-3 md:text-base`}>
      <i className={`${iconClassName} mr-2 translate-y-[1px]`}></i>
      {content}
    </button>
  );
};
