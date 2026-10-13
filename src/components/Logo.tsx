interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = '', size = 48 }: LogoProps) {
  return (
    <img
      src="/60065.png"
      alt="Ojasviq — Decode Human Potential"
      width={size * 3.2}
      height={size}
      className={`object-contain ${className}`}
    />
  );
}
