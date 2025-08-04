import { type UseFormReturn } from 'react-hook-form';

export type HookTriggeredFunc<T> = (data: T) => unknown;

export interface Hooks<T> {
  doAfter?: HookTriggeredFunc<T>;
  doBefore?: HookTriggeredFunc<T>;
  onError?: (err: unknown, data?: T) => unknown;
  transform?: (data: T) => T;
}

export function actionHandler<T extends NonNullable<object>>(
  form: UseFormReturn<T>,
  action: (data: T) => Promise<unknown>,
  hooks: Hooks<T> = {},
) {
  const { doAfter, doBefore, onError, transform } = hooks;

  return async () => {
    try {
      await form.handleSubmit(async (data) => {
        try {
          const transformed = transform ? transform(data) : data;

          if (doBefore) doBefore(transformed);
          await action(transformed);
          if (doAfter) doAfter(transformed);
        } catch (err) {
          if (onError) onError(err, data);
        }
      })();
    } catch (err) {
      if (onError) onError(err);
    }
  };
}
