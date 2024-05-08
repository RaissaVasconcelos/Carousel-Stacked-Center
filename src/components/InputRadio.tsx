/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export interface InputRadioProps extends InputHTMLAttributes<HTMLElement> {
  disable?: boolean 
  defaultChecked?: boolean
  id: string
  label: string
  name: string
}

export const InputRadio: React.FC<InputRadioProps> = ({
  id,
  label,
  disable,
  name,
  defaultChecked,
  className,
  ...rest
}) => {
  return (
    <div className="flex justify-center items-center">
      <input
        id={id}
        name={name}
        defaultChecked={defaultChecked ? defaultChecked : false}
        disabled={disable ? disable : false}
        type={'radio'}
        value={id}
        className={clsx(
          'peer appearance-none border border-[#3E8F4A] rounded-full w-5 h-5 focus:outline-none focus:border-gray-500 checked:bg-[#3E8F4A] checked:bg-opacity-40 checked:border-transparent',
          className
        )}
        {...rest}
      />
      <label
        htmlFor={id}
        className="ml-2 text-[#000000] text-xs"
      >
        {label}
      </label>
    </div>
  );
};
