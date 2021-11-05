import React from 'react';

const useModal = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };

  return {
    open,
    handleOpen,
    handleClose,
  };
};

export default useModal;
