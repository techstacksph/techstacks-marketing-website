import { Subheading } from './ui/typography';

export function ProductFeature({ feature }: { feature: string }) {
  return (
    <Subheading className="">
      <span className="text-nowrap text-foreground bg-primary-foreground-static/10 font-normal hover:bg-primary-foreground/20 transition-colors border hover:cursor-default  text-sm rounded-sm p-1">
        {feature}
      </span>
    </Subheading>
  );
}
