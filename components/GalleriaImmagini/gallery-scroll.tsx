import ImageGrid from "./image-grid";
import Pagination from "./Pagination";
import NavigationButtons from "./navigation-buttons";
import { galleryImagesSrc } from "@/config";

const GalleryScroll: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full">
      <ImageGrid images={galleryImagesSrc} />
      <div className="flex max-lg:flex-col items-center justify-center gap-5 lg:gap-10 mt-12 w-full mx-auto">
        <Pagination length={galleryImagesSrc.length} />
        <NavigationButtons length={galleryImagesSrc.length} />
      </div>
    </section>
  );
};

export default GalleryScroll;
