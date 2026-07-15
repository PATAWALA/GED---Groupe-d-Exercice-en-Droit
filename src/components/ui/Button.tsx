import { ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variants = {
    primary: 'bg-gold text-white hover:bg-amber-600 focus:ring-gold',
    secondary: 'bg-royal-blue text-white hover:bg-blue-900 focus:ring-royal-blue',
    outline: 'border-2 border-royal-blue text-royal-blue bg-white hover:bg-royal-blue hover:text-white focus:ring-royal-blue',
  };

  const combined = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combined}>
        {children}
      </Link>
    );
  }
  return (
    <button className={combined} {...props}>
      {children}
    </button>
  );
}
