import Modal from 'react-modal';

const setupModal = () => {
  // Modal.setAppElement('#root');
  Object.assign(Modal.defaultStyles.overlay, {
    backgroundColor: 'rgba(0,0,0,0.75)',
    backdropFilter: 'blur(5px)',
    height: '100vh'
  });
  Modal.defaultStyles.content = {
    position: 'relative',
    margin: 'auto',
    width: 'fit-content',
    height: '100%',
    overflow: 'auto',
    outline: 0
  };
};

export default setupModal;
