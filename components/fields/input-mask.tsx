import { IMaskInput } from 'react-imask';
import React from 'react';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
  name: string;
  mask?: string;
}

const handlePhoneValidate = (value?: string) =>
  value?.includes('_') ? 'Номер телефона должен быть заполнен' : true;

export const InputMaskField: React.FC<Props> = ({ name, mask = '+{375}(00)000-00-00' }) => {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
  } = useController({
    name,
    control,
    rules: {
      validate: handlePhoneValidate,
    },
  });

  return (
    <IMaskInput
      inputRef={ref}
      id={name}
      className="form-control"
      lazy={false}
      mask={mask}
      onAccept={onChange}
      onBlur={onBlur}
    />
  );
};
