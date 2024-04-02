import { Box } from "../../model";
import "./style.css";

interface Props {
  box: Box;
}

export const BoxView = ({ box }: Props): JSX.Element => {
  return (
    <g>
      <rect
        x={box.posX}
        y={box.posY}
        rx="5"
        ry="5"
        width={box.width}
        height={box.height}
        fill={box.fill}
        stroke="white"
        strokeWidth="2"
      />
      <text
        className="label"
        x={box.posX + box.width / 2}
        y={box.posY + box.height / 2}
        textAnchor="middle"
        alignmentBaseline="central"
      >
        {box.label}
      </text>
    </g>
  );
};
