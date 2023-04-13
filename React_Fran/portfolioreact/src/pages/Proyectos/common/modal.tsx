import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import afc from '../../../img/amafroncard.png'
import af from '../../../img/Amafron.png'
import mfc from '../../../img/mediafrankcard.png'
import pfc from '../../../img/portfoliocard.png'
import rdc from '../../../img/Rescue.png'
import pdc from '../../../img/plantascard.png'
import InfoIcon from '@mui/icons-material/Info';
import mediafrankcard from '../../../img/MediaFrank.png'

function Msg() {
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
            <Modal.Title>MediaFrank</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>MediaFrank es una de las páginas más reicentes de Francisco, en la que se utilizó HTML, CSS y JS. Este proyecto ayudó a entender JS en las páginas webs, el uso de frameworks de diseño y creación de menús</p>
            <hr />
            <figure id='modal2'>
              <img src={mediafrankcard} />
            </figure>
            <hr />
            <p>Puedes encotrar mi página de Amafron en el siguiente enlace: <a href="https://frparra.vercel.app/MediaFrank/index.html">MediaFrank.es</a></p>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
}

export default Msg;
