export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-champagne text-champagne font-body text-xs tracking-[0.1em] px-3 py-1 uppercase">
      {children}
    </span>
  );
}
