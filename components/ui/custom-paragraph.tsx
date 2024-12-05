const CustomParragraph: React.FC<any> = ({ children }: any) => {
  return (
    <p className="text-xl [&>span]:font-bold [&>span]:mx-1 text-gray-700 dark:text-gray-300 text-pretty font-medium pl-3 border-l-4 border-rose dark:border-roseGold-light mt-7">
      {children}
    </p>
  );
};

export default CustomParragraph;
