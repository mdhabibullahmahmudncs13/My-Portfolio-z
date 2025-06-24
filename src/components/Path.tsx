'use client';

import { usePathname } from 'next/navigation';

interface PathProps {
  description: string;
}

export default function Path({ description }: PathProps) {
  const pathname = usePathname();
  const pathName = pathname.split('/').pop() || '';

  return (
    <div className="path">
      <h1 className="h1 path__name">{pathName}</h1>
      <p className="path__description">{description}</p>
    </div>
  );
}