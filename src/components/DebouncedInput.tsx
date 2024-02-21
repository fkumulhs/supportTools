/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react';
import { useDebouncedValue } from '@mantine/hooks';
import { TextInput, TextInputProps } from '@mantine/core';
import { notifications } from '@mantine/notifications';

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<TextInputProps, 'onChange'>) {
  const [value, setValue] = useState(initialValue)
  const [debounced, cancel] = useDebouncedValue(value, debounce, { leading: true });

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    onChange(debounced)
    notifications.show({
      title: 'Genial!',
      message: 'Se actualizo el valor! 🤥 lorem ipsum Lorem Ipsum is simply dummy text of the',
    })
    return () => cancel()
  }, [debounced])

  return (
    <TextInput
      {...props}
      value={value}
      onChange={(event) => setValue(event.currentTarget.value)}
    />
  );
}


export default DebouncedInput