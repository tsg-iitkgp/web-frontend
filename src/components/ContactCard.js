import React from "react";
import Styles from "../styles/components/contact-card.module.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function ContactCard({
  name,
  designation,
  email,
  facebook,
  linkedin,
  whatsapp,
  web,
  imgSrc,

}) {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    console.log("handleclick")
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div className={Styles.container}>
      <div className={Styles.imgbox}>
        <img src={imgSrc} alt={`${name}_image`} />
      </div>
      <ul className={Styles.sociallinks}>
        <li>
          <a href={`${facebook}`} target="_blank" rel="noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <CopyToClipboard text={`${email}`}>
            <button onClick={handleClick} title="Copy Email Address">
              <i className="fas fa-envelope" ></i>
            </button>
          </CopyToClipboard>
        </li>
        <li>
          <a href={`${linkedin}`} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
      </ul>
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'center',
            horizontal: 'center',
          }}
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          message="Email address copied"
          action={
            <React.Fragment>
              <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
                <CloseIcon fontSize="small" />
              </IconButton>
            </React.Fragment>
          }
        />
      </div>
      <div className={Styles.details}>
        <h2>{name}</h2>
        <span>{designation}</span>
      </div>
    </div>
  );
}

export default ContactCard;
