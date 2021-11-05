/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/';
import { Grid } from '@material-ui/core';
import { ComponentsContext } from '../../context/ComponentsContext';
import { useDashboardStyles } from '../../styles/dashboard';
import ClientModal from './modal';

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>((props, ref) => {
  const {
    in: open, children, onEnter, onExited, ...other
  } = props;

  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function SpringModal() {
  const classes = useDashboardStyles();

  const { open, handleClose } = useContext(ComponentsContext);

  return (
    <div>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modalWrapper}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 300,
        }}
      >
        <Fade in={open}>
          <Grid container className={classes.editClientModal}>
            <ClientModal />
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
}
