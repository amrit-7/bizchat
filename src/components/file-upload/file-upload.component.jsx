import { ReactComponent as PhotoIcon } from "../../assets/photoUpload.svg";
import { ReactComponent as DocumentIcon } from "../../assets/document.svg";
import "./file-upload.styles.scss";
import MyVerticallyCenteredModal from "../upload-modal/upload-modal.components copy";
import { useState } from "react";
const FileOptions = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div>
      <div className="options-container">
        <ul className="options-list">
          <li className="options-list-items" onClick={() => setModalShow(true)}>
            <PhotoIcon />
          </li>
          <li className="options-list-items" onClick={() => setModalShow(true)}>
            <DocumentIcon />
          </li>
        </ul>
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};
export default FileOptions;
