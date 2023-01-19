import { Form } from "react-bootstrap";
import "./searchbox.styles.scss";
import SearchIcon from "@mui/icons-material/Search";
const SearchBox = ({ className, placeholder, onChangeHandler }) => (
  <div className="sidebarSearch">
    <div className="sidebar-input">
      <SearchIcon></SearchIcon>
      <Form.Control
        className={`search-box p-0 ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  </div>
);
export default SearchBox;
