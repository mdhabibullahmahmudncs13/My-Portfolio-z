import { media } from '@/data/media';

interface MediaIconProps {
  name: string;
}

export default function MediaIcon({ name }: MediaIconProps) {
  const getMediaUrl = (name: string) => {
    return media[name as keyof typeof media] || '#';
  };

  return (
    <a href={getMediaUrl(name)} className="media">
      <img 
        src={`https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=32&h=32&fit=crop`} 
        alt={name} 
        className="media__icon"
      />
    </a>
  );
}