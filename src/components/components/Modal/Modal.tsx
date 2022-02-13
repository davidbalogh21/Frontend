import React from 'react';
import { ModalBody, ModalContent, ModalHeader, ModalTitle, ModalWrapper, Video } from './ModalStyles.css';

type VideoInfo = {
	name: string;
	key: string;
}

type ModalProps = {
	show: boolean;
	onClose: () => void;
	youtube: VideoInfo[];
}

export const Modal: React.FC<ModalProps> = ({ show, onClose, youtube }) => {
	if ( !show ) {
		return null;
	}

	return (
		<div>
			<ModalWrapper onClick={onClose}>
				<ModalContent onClick={(e: React.SyntheticEvent) => e.stopPropagation()}>
					<ModalHeader>
						<ModalTitle>{youtube?.[0]?.name}</ModalTitle>
					</ModalHeader>
					<ModalBody>
						<Video
							src={`https://www.youtube.com/embed/${youtube?.[0]?.key}`}
						/>
					</ModalBody>
				</ModalContent>
			</ModalWrapper>
		</div>
	);
};
