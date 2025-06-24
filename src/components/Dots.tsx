interface DotsProps {
  width?: number;
  height?: number;
}

export default function Dots({ width = 5, height = 5 }: DotsProps) {
  const radius = 4;
  const gap = 16;
  const svgWidth = (radius * 2 + gap) * width - gap;
  const svgHeight = (radius * 2 + gap) * height - gap;

  return (
    <svg width="100%" className="dots" viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
      {Array.from({ length: width }, (_, i) =>
        Array.from({ length: height }, (_, j) => {
          const x = radius + i * (radius * 2 + gap);
          const y = radius + j * (radius * 2 + gap);
          return <circle key={`${i}-${j}`} cx={x} cy={y} r={radius} />;
        })
      )}
    </svg>
  );
}