interface Dimensions {
  width: number;
  height: number;
}

interface GenerateRandomPicsum {
  seed?: string;
  dimensions: Dimensions;
}

export function generateRandomPicsum({
  seed,
  dimensions,
}: GenerateRandomPicsum) {
  return `https://picsum.photos/seed/${seed || 'picsum'}/${dimensions.height}/${
    dimensions.width
  }`;
}
