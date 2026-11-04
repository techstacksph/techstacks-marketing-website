import type { ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Check } from 'lucide-react';
import type { Testimonial } from '@/constants/testimonials';
import { cn } from '@/utils/cn';
import { BreadCrumbItem, BreadCrumbs } from './bread-crumbs';
import { Section } from './default-elements';
import { H1, H2, Subheading } from './ui/typography';

const BAND_TONES = {
  default: 'bg-background',
  surface: 'bg-surface',
  ink: 'bg-ink text-ink-foreground',
} as const;

interface BandProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tone?: keyof typeof BAND_TONES;
}

/** A full-width page section with consistent vertical rhythm. */
export function Band({ children, className, id, tone = 'default' }: BandProps) {
  return (
    <div className={cn('w-full scroll-mt-16', BAND_TONES[tone])} id={id}>
      <Section className={cn('py-16 lg:py-24', className)}>{children}</Section>
    </div>
  );
}

export function Eyebrow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        'text-xs font-bold uppercase tracking-[0.16em] text-primary-static lg:text-sm',
        className,
      )}
    >
      {children}
    </p>
  );
}

interface SectionHeaderProps {
  align?: 'center' | 'left';
  className?: string;
  description?: ReactNode;
  eyebrow?: string;
  inverse?: boolean;
  title: ReactNode;
}

export function SectionHeader({
  align = 'center',
  className,
  description,
  eyebrow,
  inverse,
  title,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex max-w-3xl flex-col gap-4',
        align === 'center' && 'mx-auto items-center text-center',
        className,
      )}
      data-aos="fade-up"
    >
      {eyebrow ? (
        <Eyebrow className={cn(inverse && 'text-mint')}>{eyebrow}</Eyebrow>
      ) : null}
      <H2>{title}</H2>
      {description ? (
        <Subheading className={cn(inverse && 'text-ink-foreground/75')}>
          {description}
        </Subheading>
      ) : null}
    </div>
  );
}

interface PageHeroProps {
  actions?: ReactNode;
  aside?: ReactNode;
  breadcrumb?: string;
  description: ReactNode;
  eyebrow?: string;
  title: ReactNode;
}

/** The standard hero for every page below the home page. */
export function PageHero({
  actions,
  aside,
  breadcrumb,
  description,
  eyebrow,
  title,
}: PageHeroProps) {
  return (
    <div className="w-full border-b bg-surface">
      <Section className="py-10 lg:py-16">
        {breadcrumb ? (
          <BreadCrumbs className="mb-8 lg:mb-12">
            <BreadCrumbItem>{breadcrumb}</BreadCrumbItem>
          </BreadCrumbs>
        ) : null}
        <div
          className={cn(
            'grid items-center gap-10 lg:gap-16',
            aside && 'lg:grid-cols-2',
          )}
        >
          <div className="flex max-w-3xl flex-col gap-6" data-aos="fade-up">
            {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
            <H1>{title}</H1>
            <Subheading>{description}</Subheading>
            {actions ? (
              <div className="mt-2 flex flex-col gap-3 md:flex-row">
                {actions}
              </div>
            ) : null}
          </div>
          {aside ? (
            <div data-aos="fade-up" data-aos-delay={100}>
              {aside}
            </div>
          ) : null}
        </div>
      </Section>
    </div>
  );
}

export function CheckList({
  className,
  items,
}: {
  className?: string;
  items: readonly string[];
}) {
  return (
    <ul className={cn('flex flex-col gap-3', className)}>
      {items.map((item) => (
        <li className="flex items-start gap-3" key={item}>
          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
            <Check aria-hidden className="h-3 w-3" strokeWidth={3} />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function TestimonialCard({
  className,
  testimonial: { from, label, name, quote },
}: {
  className?: string;
  testimonial: Testimonial;
}) {
  return (
    <figure
      className={cn(
        'flex h-full flex-col gap-4 rounded-xl border bg-card p-6 text-card-foreground lg:p-8',
        className,
      )}
    >
      <p className="font-display text-2xl font-bold text-primary-static">
        {label}
      </p>
      <blockquote className="flex-1 leading-relaxed text-muted-foreground">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="border-t pt-4 text-sm">
        <span className="block font-semibold">{name}</span>
        <span className="text-muted-foreground">{from}</span>
      </figcaption>
    </figure>
  );
}

interface SiteShotProps {
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  src: StaticImageData;
}

/** A project screenshot, zoomed to crop out the coloured backdrop baked into the image. */
export function SiteShot({
  alt,
  className,
  priority,
  sizes,
  src,
}: SiteShotProps) {
  return (
    <div
      className={cn(
        'aspect-video overflow-hidden rounded-xl border bg-card',
        className,
      )}
    >
      <Image
        alt={alt}
        className="h-full w-full scale-[1.42] object-cover"
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

interface ProjectCardProps {
  category?: string;
  img: StaticImageData;
  title: string;
}

export function ProjectCard({ category, img, title }: ProjectCardProps) {
  return (
    <figure>
      <SiteShot
        alt={`${title} website`}
        sizes="(min-width: 992px) 25vw, (min-width: 768px) 50vw, 100vw"
        src={img}
      />
      <figcaption className="mt-3">
        <span className="block font-display font-semibold">{title}</span>
        {category ? (
          <span className="text-sm text-muted-foreground">{category}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
