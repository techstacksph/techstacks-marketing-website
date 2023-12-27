import { type UseFormReturn } from 'react-hook-form';

export type HookTriggeredFunc<T> = (data: T) => unknown;
export interface Hooks<T> {
  doAfter?: HookTriggeredFunc<T>;
  doBefore?: HookTriggeredFunc<T>;
  onError?: (err: unknown, data?: T) => unknown;
}

export function actionHandler<T extends NonNullable<object>>(
  form: UseFormReturn<T>,
  action: (data: T) => Promise<unknown>,
  hooks: Hooks<T> = {},
) {
  const { doAfter, doBefore, onError } = hooks;

  return async () => {
    try {
      await form.handleSubmit(async (data) => {
        try {
          if (doBefore) doBefore(data);
          await action(data);
          if (doAfter) doAfter(data);
        } catch (err) {
          if (onError) onError(err, data);
        }
      })();
    } catch (err) {
      if (onError) onError(err);
    }
  };
}
