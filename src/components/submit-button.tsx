import { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import { type Except } from 'type-fest';
import { Loader2 } from 'lucide-react';
import { Button, type ButtonProps } from './ui/button';

type SubmitButtonProps = Except<ButtonProps, 'type'> & {
  type?: 'submit';
};

export const SubmitButton = forwardRef<HTMLButtonElement, SubmitButtonProps>(
  ({ type = 'submit', children, disabled, ...props }, ref) => {
    const { pending } = ReactDOM.useFormStatus();
    return (
      <Button type={type} {...props} disabled={pending || disabled} ref={ref}>
        {pending ? <Loader2 className="animate-spin" /> : children}
      </Button>
    );
  },
);

SubmitButton.displayName = 'SubmitButton';
