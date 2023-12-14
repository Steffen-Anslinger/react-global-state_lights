import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const initialStateLight = [
  { id: 1, name: "Living Room", isOn: false },
  { id: 2, name: "Kitchen", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(initialStateLight);

  const lightOn = lights.filter((light) => light.isOn).length;

  function toggleLight(id) {
    setLights(
      lights.map((light) => {
        if (light.id === id) {
          return { ...light, isOn: !light.isOn };
        }
        return light;
      })
    );
  }

  function allLightsOn() {
    setLights(lights.map((light) => ({ ...light, isOn: true })));
  }

  function allLightsOff() {
    setLights(lights.map((light) => ({ ...light, isOn: false })));
  }

  return (
    <Layout isDimmed={lightOn === 0}>
      <GlobalStyle />
      <Component
        lights={lights}
        toggleLight={toggleLight}
        lightOn={lightOn}
        allLightsOn={allLightsOn}
        allLightsOff={allLightsOff}
        {...pageProps}
      />
    </Layout>
  );
}
