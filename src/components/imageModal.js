import Modal from "react-modal";
import { useState } from "react";

export default function ImageModal(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleModalOpen = () => {
    document.body.style.overflow = "hidden";
    setModalIsOpen(true);
  };

  const handleModalClose = () => {
    document.body.style.overflow = "auto";
    setModalIsOpen(false);
  };

  return (
    <div className="image-container">
      <img
        className="main-image"
        src={props.images}
        onClick={handleModalOpen}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "/awards/person-placeholder.png";
        }}
      />

      <Modal isOpen={modalIsOpen} onRequestClose={handleModalClose} contentLabel="Image description">
        <div className="modal-close-container">
          <img id="modal-close" src="/images/close.png" onClick={handleModalClose} />
        </div>
        <h1> {props.title} </h1>

        {props.SOPLink ? (
          <iframe
            src="https://youtube.com/watch?v=iZf1QdDA270"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        ) : (
          <>
            <img
              className="modal-image"
              src={props.images}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/awards/person-placeholder.png";
              }}
            />

            {props.ProposalLink && (
              <a href={`/election/${props.ProposalLink}`} target="_blank" rel="noreferrer noopener">
                Candidate's Proposal
              </a>
            )}

            <p>{props.description}</p>
            {props.Heads?.length > 0 ? (
              <p>
                <h4>Heads:</h4>
                {props.Heads.map((head) => (
                  <li>
                    {head.name} (<a href={"mailto:" + head.email}>{head.email}</a>){" "}
                  </li>
                ))}
              </p>
            ) : (
              ""
            )}
          </>
        )}
      </Modal>
    </div>
  );
}
