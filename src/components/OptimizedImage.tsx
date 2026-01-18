interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  srcWebp?: string;
  alt: string;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({ src, srcWebp, alt, ...props }) => {
  return (
    <picture>
      {srcWebp && <source srcSet={srcWebp} type="image/webp" />}
      <img src={src} alt={alt} {...props} />
    </picture>
  );
};

export default OptimizedImage;
