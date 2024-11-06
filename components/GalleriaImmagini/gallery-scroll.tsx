import ImageGrid from "./ImageGrid";
import Pagination from "./Pagination";
import NavigationButtons from "./NavigationButtons";
import { galleryImagesSrc } from "@/config";

const GalleryScroll: React.FC = () => {
  return (
    <section className="flex flex-col items-start w-full">
      <header
        aria-labelledby="gallery-header"
        id="gallery-header"
        className="flex flex-col max-w-full text-black dark:text-white"
      >
        <h2 className="text-5xl font-bold leading-tight max-md:max-w-full max-md:text-4xl">
          Ultimi lavori realizzati
        </h2>
        <p className="mt-6 text-lg max-md:max-w-full">
          Scopri le mie creazioni uniche di nail art.
        </p>
      </header>
      <ImageGrid images={galleryImagesSrc} />
      <div className="flex flex-nowrap justify-between md:justify-center gap-5 lg:gap-10 items-center mt-12 w-full mx-auto">
        <Pagination length={galleryImagesSrc.length} />
        <NavigationButtons length={galleryImagesSrc.length} />
      </div>
    </section>
  );
};

export default GalleryScroll;
