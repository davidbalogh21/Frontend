import React from "react";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Video,
} from "../styles/ModalStyles";

export default function Modal(props) {
  if (!props.show) {
    return null;
  }

  return (
    <div>
      <ModalWrapper onClick={props.onClose}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>{props.youtube?.[0]?.name}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Video
              src={`https://www.youtube.com/embed/${props.youtube?.[0]?.key}`}
            ></Video>
          </ModalBody>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
}
