import { useCallback } from "react";
import Modal from "../../UI/Modal";
import classes from "./MovieHeaderModalForm.module.css";

function MovieHeaderModalForm({ children, onHideModal }) {
  const handleCloseModal = useCallback((e) => {
    if (e.target.className.includes("modal-wrapper")) {
      onHideModal(false);
    }
  }, []);

  return (
    <div className={classes["modal-wrapper"]} onClick={handleCloseModal}>
      <Modal>
        <div className={classes["modal-form"]}>{children}</div>
      </Modal>
    </div>
  );
}

export default MovieHeaderModalForm;
