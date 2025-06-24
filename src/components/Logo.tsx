import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Logo() {
  const locale = useLocale();

  return (
    <Link className="logo" href={`/${locale}`}>
      <img className="logo__img" src="https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop" alt="Elias logo" />
      <span className="logo__name">Elias</span>
    </Link>
  );
}