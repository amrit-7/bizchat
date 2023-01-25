import { ReactComponent as PhotoIcon } from "../../assets/photoUpload.svg";
import { ReactComponent as DocumentIcon } from "../../assets/document.svg";

import "./file-upload.styles.scss";

const FileOptions = () => {
  return (
    <div className="options-container">
      <ul className="options-list">
        <li className="options-list-items">
          <PhotoIcon /> Image
        </li>
        <li className="options-list-items">
          <DocumentIcon /> Document
        </li>
      </ul>
    </div>
  );
};

export default FileOptions;
