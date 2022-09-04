import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-bootstrap';

import type { SubmitHandler } from 'react-hook-form';
import type { PropsWithChildren } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Any = any;

interface Props extends PropsWithChildren {
  onSubmit: SubmitHandler<Any>;
}

export const FormWrapper: React.FC<Props> = ({ children, onSubmit }) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>{children}</Form>
    </FormProvider>
  );
};
