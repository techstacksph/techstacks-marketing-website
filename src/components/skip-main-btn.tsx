import { Button } from './ui/button';

export function SkipToMain() {
  return (
    <Button
      asChild
      className="[&:not(:focus)]:sr-only z-[9999] absolute top-0 transition-all left-0"
    >
      <a href="#main-content">Skip to main content</a>
    </Button>
  );
}
