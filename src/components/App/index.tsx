import "./styles.css";
import { useEffect, useState } from "react";
import { DiagramList, Diagram } from "../../model";
import { BoxView } from "../BoxView";

export const App = (): JSX.Element => {
  const [currentDiagram, setCurrentDiagram] = useState<Diagram | null>(null);

  useEffect(() => {
    const fetchDiagrams = async (): Promise<void> => {
      const response = await fetch("http://localhost:4000/api/diagrams");
      const data = (await response.json())?.result as DiagramList | null;
      console.log(data);
      if (data) {
        const first: Diagram = data[0];
        setCurrentDiagram(first);
      }
    };

    fetchDiagrams();
  }, []);
  return (
    <div className="layout">
      {currentDiagram ? (
        <>
          <header className="header">
            <h1>{currentDiagram.title}</h1>
            <div className="label-field">
              <label htmlFor="box-label">Label:</label>
              <input type="text" id="box-label" disabled />
            </div>
          </header>
          <svg className="board">
            {currentDiagram.boxes.map((box, index) => (
              <BoxView key={index} box={box} />
            ))}
          </svg>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
