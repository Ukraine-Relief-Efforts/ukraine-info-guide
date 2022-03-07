import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import parse from "html-react-parser";
import { LEAVE_UKRAINE_URL } from "../../configs/constants";


const fetchData = async (locale) => {
  try {
    const response = await fetch(`/api/v1/missileAlerts?lang=${locale}`);
    const json = await response.json();
    if (json.alerts)
      return json.alerts;
  } catch (e) {
    console.log("Failed to load missile alerts");
  }

  return [];
}

const Container = styled.div`
    display: flex;
    flex-direction: column-reverse;
    max-width: 600px;

    i, a[href=${LEAVE_UKRAINE_URL}] {
        display: none;
    }
`;

const Alert = styled.div`
    background: #F7EDBF;
    margin: 5px;
    padding: 20px 15px 0px 15px;
    border-radius: 1em;
`;

const Time = styled.div`
    text-align: right;
    opacity: 70%;
`;

const MissileAlerts = () => {
  const router = useRouter();
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const init = async () => setAlerts(await fetchData(router.locale));
    init();
  }, [router.locale]);

  return (
    <Container>
      {
        alerts.map(({ text, time }, index) =>
          <Alert key={index}>
            <div>
              {parse(text)}
            </div>
            <Time>{time}</Time>
          </Alert>
        )
      }
    </Container>
  );
}

export default MissileAlerts;
