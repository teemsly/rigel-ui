import React from "react";
import { findDOMNode } from "react-dom";
import domHelper from "./domLib";

// Is left click
function isLeftClick(event: React.MouseEvent) {
  return event?.button === 0;
}

function isModifiedEvent(event: React.MouseEvent) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event?.shiftKey);
}

type TargetType =
  | React.RefObject<Element | undefined>
  | Element
  | null
  | undefined;

export interface OverlayOptions {
  triggerTarget: TargetType;
  overlayTarget: TargetType;
  disabled: boolean;
}

const getRefTarget = (
  ref: React.RefObject<Element> | Element | null | undefined
) => {
  return ref && ("current" in ref ? ref.current : ref);
};

const getDomNode = (elementOrRef: any) => {
  const Element =
    elementOrRef?.root || elementOrRef?.child || getRefTarget(elementOrRef);
  return findDOMNode(Element) as Element;
};

const overlayClose = (
  onCloseOverlay: (e: Event) => void,
  { triggerTarget, overlayTarget, disabled }: OverlayOptions
) => {
  const handleDocumentOnClick = React.useCallback(
    (event) => {
      const triggerElement = getDomNode(triggerTarget);
      const overlayElement = getDomNode(overlayTarget);
      // check if the clicked is the trigger element;
      if (triggerElement && domHelper.contains(triggerElement, event?.target)) {
        return;
      }

      // check if the clicked is the overlay element
      if (overlayElement && domHelper.contains(overlayElement, event?.target)) {
        return;
      }

      if (isModifiedEvent(event) || !isLeftClick(event)) {
        return;
      }

      onCloseOverlay?.(event);
    },
    [onCloseOverlay, triggerTarget, overlayTarget]
  );

  React.useEffect(() => {
    const target = getDomNode(triggerTarget);

    if (disabled || !target) return;

    const doc = domHelper.ownerDocument(target);
    const onClickDocument = domHelper.on(
      doc,
      "click",
      handleDocumentOnClick,
      true
    );

    return () => {
      onClickDocument?.off();
    };
  }, [disabled, triggerTarget, handleDocumentOnClick]);
};

export default overlayClose;
