import { Form, Label, Input } from "./ContactFilter.styled";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getFilter } from "../../redux/filtersSlice";

export default function ContactFilter() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  return (
    <Form>
      <Label>Filter contacts by name: </Label>
      <Input
        type="text"
        value={filter}
        onChange={(e) => {
          dispatch(changeFilter(e.target.value));
        }}
      />
    </Form>
  );
}
