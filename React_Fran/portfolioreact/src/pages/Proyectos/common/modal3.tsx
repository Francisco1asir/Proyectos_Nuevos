import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'
import InfoIcon from '@mui/icons-material/Info';
import plantas from '../../../img/Plantas.png'

function Msg3() {
  const [showmodal, setmodal] = React.useState(false);
  const close = () => setmodal(false);
  const open = () => setmodal(true);


  return (
    <>
      <div id="proyects">
        <Button variant="primary" onClick={open}>
          <InfoIcon />
        </Button>
        <Modal show={showmodal} onHide={close}>
          <Modal.Header closeButton>
            <Modal.Title>Registro de Plantas</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Esta página fue creada cuando Francisco cursaba 1º de SMR, lo que hacía esta página era registrar en una base de datos MySQL las distintas enfermedades que tienen las plantas enviados en formularios PHP dicha información y poder visualizarla.</p>
            <hr />
            <figure id='modal2'>
              <img src={plantas} />
            </figure>
            <hr />
            <p>Registro de Plantas no posée de momento un link oficial</p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Msg3;

