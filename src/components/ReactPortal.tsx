'use client';
import { ReactNode, useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const createWrapperAndAppendBody = (wrapperID: string) => {
  if (!document) return null;
  const wrapperElement = document.createElement('div');
  wrapperElement.setAttribute('id', wrapperID);
  wrapperElement.setAttribute('data-testid', wrapperID);
  document.body.appendChild(wrapperElement);
  return wrapperElement;
};

const ReactPortal = ({
  wrapperID,
  children,
}: {
  wrapperID: string;
  children: ReactNode;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperID);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapperAndAppendBody(wrapperID);
    }
    setWrapperElement(element!);

    return () => {
      if (systemCreated && element?.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [wrapperID]);
  if (!wrapperElement) return null;
  return createPortal(children, wrapperElement);
};

export default ReactPortal;
