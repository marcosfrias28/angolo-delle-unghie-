const CustomParragraph: React.FC<any> = ({ children }: any) => {
  return (
    <p className="text-xl [&>span]:font-black [&>span]:mx-1 [&>span]:text-white text-gray-700 dark:text-gray-200/70 text-pretty font-medium pl-3 border-l-4 border-rose dark:border-roseGold-light mt-7">
      {children}
    </p>
  );
};

export default CustomParragraph;
