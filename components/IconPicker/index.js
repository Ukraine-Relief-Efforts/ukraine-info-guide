import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  flex: 1;
  justify-content: center;
  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 10px);
    margin-bottom: 10px;
    justify-content: center;
  }
`;

const StyledItem = styled.button`
  margin: 5px;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  text-align: center;
  transition: transform 0.2s;
  @media (max-width: 450px) {
    width: 140px;
    height: 180px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 0px 6px -1px;
    z-index: 2;
  }
`;

const StyledIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const IconPicker = ({ options }) => (
  <StyledContainer>
    {
      options.map(({ name, icon, onClick }) => (
        <StyledItem
          key={name}
          className="bg-blue-ukraine"
          onClick={onClick}
        >
          <StyledIcon
            src={icon}
            alt={name}
            width={40}
            className="cursor-pointer mt-4"
          />
          <p className="text-white text-lg upper m4 mt-4">
            {name}
          </p>
        </StyledItem>
      ))
    }
  </StyledContainer>
);

export default IconPicker;
