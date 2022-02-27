const NewTabLink = ({ children, ...rest }) => {
  return (
    <a target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}

export default NewTabLink;
