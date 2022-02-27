import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSelectedCountry } from "../../store/slices/borderCrossingData";
import { SelectCountryIcon } from "./CountryIconSelector";

const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;
  flex: 1;
  @media (max-width: 768px) {
    flex: 0 1 calc(50% - 10px);
    margin-bottom: 10px;
    justify-content: center;
  }
`;

const CountryItem = styled.button`
  margin: 5px;
  width: 200px;
  height: 200px;
  border-radius: 10%;
  text-align: center;
`;

const StyledCountryIcon = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 auto;
`;

const StyledCountryName = styled.p``;

const CountryPickerV2 = ({ availableCountries, selectedCountry }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const countries = availableCountries.map(({ name, code }) => (
      <CountryItem key={code} className="bg-blue-ukraine">
        <StyledCountryIcon
          src={SelectCountryIcon[code]}
          alt={t(name)}
          width={40}
          className="cursor-pointer mt-4"
          onClick={() => dispatch(setSelectedCountry(code))}
        />
        <StyledCountryName className="text-white text-lg upper m4 mt-4">
          {t(name)}
        </StyledCountryName>
      </CountryItem>
    )
  );

  return <StyledContainer>{countries}</StyledContainer>;
};

export default CountryPickerV2;
