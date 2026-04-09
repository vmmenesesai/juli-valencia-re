export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block border border-forest text-forest font-ui text-[10px] tracking-[0.12em] px-3 py-1 uppercase rounded-full">
      {children}
    </span>
  );
}
