import ImageGrid from "./ImageGrid";
import Pagination from "./Pagination";
import NavigationButtons from "./NavigationButtons";
import { galleryImagesSrc } from "@/config";

const GalleryScroll: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full">
      <ImageGrid images={galleryImagesSrc} />
      <div className="flex flex-nowrap justify-between md:justify-center gap-5 lg:gap-10 items-center mt-12 w-full mx-auto">
        <Pagination length={galleryImagesSrc.length} />
        <NavigationButtons length={galleryImagesSrc.length} />
      </div>
    </section>
  );
};

export default GalleryScroll;
