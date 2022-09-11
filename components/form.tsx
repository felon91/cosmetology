import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';

import type { ServerError } from 'lib/core';

import type { SubmitHandler, FieldValues } from 'react-hook-form';
import type { PropsWithChildren } from 'react';

interface Props<T extends FieldValues> extends PropsWithChildren {
  onSubmit: SubmitHandler<T>;
}

const SERVER_ERROR_TYPE = 'server';

export const FormWrapper = <T extends FieldValues>({
  children,
  onSubmit,
}: Props<T>): ReturnType<React.FC> => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form
        onSubmit={methods.handleSubmit(async (data, event) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const {
            data: { errors },
          } = (await onSubmit(data as T, event)) || { success: true };
          const serverErrors = errors as ServerError[] | null;

          if (serverErrors?.length) {
            serverErrors.forEach((error, index) => {
              const { field, msg: message } = error;

              if (!field) {
                return;
              }
              methods.setError(
                field,
                {
                  type: SERVER_ERROR_TYPE,
                  message,
                },
                { shouldFocus: index === 0 }
              );
            });
          }
        })}
      >
        {children}
      </Form>
    </FormProvider>
  );
};
