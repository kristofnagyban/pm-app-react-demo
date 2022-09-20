import { useEffect, useRef } from "react";
import { getFirstLetters } from "../utils/string-utils";

interface PlaceholderImageProps {
  name: string;
}

const PlaceholderImage = (props: PlaceholderImageProps) => {
  const canvasRef = useRef(null);

  const generateImg = (
    ctx: CanvasRenderingContext2D,
    title: string,
    width: number,
    height: number
  ) => {
    ctx.fillStyle = "rgb(102, 204, 255)";
    ctx.fillRect(25, 25, 100, 100);
    ctx.strokeRect(20, 20, 80, 80);

    ctx.font = "bold 48px serif";
    ctx.fillStyle = "rgb(10, 24, 55)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(title, width / 2, height / 2);
  };

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current as HTMLCanvasElement;
      const context = canvas.getContext("2d");

      const imgText = getFirstLetters(props.name);
      generateImg(context!, imgText, 200, 200);
    }
  }, [generateImg]);

  return <canvas ref={canvasRef} {...props} />;
};

export default PlaceholderImage;
