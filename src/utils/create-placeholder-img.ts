const createPlaceholderImg = (title: string, width: number, height: number) => {
  const element = document.createElement("canvas");
  const context = element.getContext("2d")!;

  element.width = width;
  element.height = height;

  context.font = "bold 30px sans-serif";
  context.fillStyle = "rgb(255, 165, 0)";
  context.textAlign = "center";
  context.textBaseline = "middle";
  context.fillText(title, element.width / 2, element.height / 2);

  return element;
}

export default createPlaceholderImg;