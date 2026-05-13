import ScrollReveal from './ScrollReveal';

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  align?: 'left' | 'center';
  dark?: boolean;
}

export default function SectionHeader({ label, heading, description, align = 'center', dark = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className={align === 'center' ? 'text-center' : ''}>
      <span
        className={`inline-block font-body text-xs font-semibold tracking-[0.1em] uppercase mb-4 ${
          dark ? 'text-yellow-500' : 'text-green-800'
        }`}
      >
        {label}
      </span>
      <h2
        className={`font-heading text-2xl sm:text-3xl lg:text-[2.5rem] leading-tight ${
          dark ? 'text-white' : 'text-green-950'
        }`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`font-body text-base lg:text-lg mt-4 max-w-xl ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-white/80' : 'text-green-700'}`}
        >
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
