interface ImageProps {
  source: string;
}

const Image = ({ source }: ImageProps) => {
  return <img loading="lazy" className="w-full md:w-1/2" src={source} />;
};

export default Image;
