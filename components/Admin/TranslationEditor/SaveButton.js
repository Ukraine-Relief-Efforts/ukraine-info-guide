import Button from "../../Button";

const SaveButton = ({ t, onSubmit }) => (
  <div className="mx-auto">
    <Button label={t("Save")} onSubmit={onSubmit} />
  </div>
);

export default SaveButton;
