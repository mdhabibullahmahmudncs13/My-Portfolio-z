import Link from 'next/link';

interface ButtonProps {
  type?: string;
  text: string;
  href: string;
  className?: string;
}

export default function Button({ type = '', text, href, className = '' }: ButtonProps) {
  return (
    <Link className={`button ${type} ${className}`} href={href}>
      {text}
    </Link>
  );
}