import React, { useState } from 'react';

type EventInput = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface TextField {
  name: string;
  id: string;
  label: string;
  type?: 'text' | 'textarea' | 'number';
  onChange: (e: EventInput) => void;
  value: string;
  className?: string;
  width?: `w-${string}`;
}

export const TextField = ({
  name,
  id,
  label,
  type = 'text',
  onChange,
  className,
  value,
  width,
}: TextField) => {
  const [inputIsOnClick, setInputIsOnClick] = useState(false);

  const classNameInput = `${width} bg-transparent block border-b-[1px] border-blue outline-none`;

  const inputType = type === 'number' || type === 'text';

  const onInputIsFocus = () => {
    setInputIsOnClick(true);
  };

  const onInputIsNotFocus = () => {
    setInputIsOnClick(false);
  };

  return (
    <div className={`${className} ${width} pt-5`}>
      <label
        className={`${inputIsOnClick || value ? '-translate-x-1 -translate-y-5 scale-75 select-none text-blue' : 'pointer-events-none translate-y-0 text-black'} absolute select-none font-semibold duration-300`}
        htmlFor={id}>
        {label}
      </label>
      {inputType && (
        <input
          className={classNameInput}
          name={name}
          id={id}
          type={type}
          onFocus={onInputIsFocus}
          onBlur={onInputIsNotFocus}
          onChange={onChange}
          value={value}
        />
      )}

      {type === 'textarea' && (
        <textarea
          className={classNameInput}
          name={name}
          id={name}
          rows={5}
          onFocus={onInputIsFocus}
          onBlur={onInputIsNotFocus}
          onChange={onChange}
          value={value}></textarea>
      )}
    </div>
  );
};
