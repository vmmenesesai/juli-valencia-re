export default function SectionDivider({ className = "" }: { className?: string }) {
  return <div className={`h-px bg-gray-light ${className}`} />;
}
