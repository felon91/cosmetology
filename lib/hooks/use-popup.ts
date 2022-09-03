import { useCallback, useEffect, useRef, useState } from 'react';

export interface UsePopupStates {
  isOpen: boolean;
  isTouched: boolean;
}

export interface UsePopupActions {
  open: () => void;
  close: () => void;
  triggerOnClose: () => void;
}

export enum TriggerPopup {
  ClosePopup = 'closePopup',
}

export const usePopup = (): [UsePopupStates, UsePopupActions] => {
  const [isOpen, setOpen] = useState(false);
  const touchedRef = useRef<boolean>(false);

  const open = useCallback(() => {
    touchedRef.current = true;
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  const triggerOnClose = useCallback(() => {
    const onClose = new CustomEvent(TriggerPopup.ClosePopup);

    document.dispatchEvent(onClose);
  }, []);

  useEffect(() => {
    document.addEventListener(TriggerPopup.ClosePopup, close);
    return () => document.removeEventListener(TriggerPopup.ClosePopup, close);
  });

  return [
    { isOpen, isTouched: touchedRef.current },
    { open, close, triggerOnClose },
  ];
};
