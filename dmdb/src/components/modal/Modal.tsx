import React from "react";
import {
  ModalWrapper,
  ModalContent,
  ModalHeader,
  ModalTitle,
  ModalBody,
  Video,
} from "../styles/ModalStyles";

interface VideoInfo {
  name: string;
  key: string
}

interface Props {
  show: boolean;
  onClose: ()=>void;
  youtube: VideoInfo[];
}

const Modal: React.FC<Props> = ({show, onClose, youtube}) => {
  if (!show) {
    return null;
  }

  return (
    <div>
      <ModalWrapper onClick={onClose}>
        <ModalContent onClick={(e:React.SyntheticEvent) => e.stopPropagation()}>
          <ModalHeader>
            <ModalTitle>{youtube?.[0]?.name}</ModalTitle>
          </ModalHeader>
          <ModalBody>
            <Video
              src={`https://www.youtube.com/embed/${youtube?.[0]?.key}`}
            ></Video>
          </ModalBody>
        </ModalContent>
      </ModalWrapper>
    </div>
  );
}

export default Modal