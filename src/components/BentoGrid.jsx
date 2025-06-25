import BentoTile from "./BentoTile";

const BentoGrid = () => {
  const tiles = [
    {
      title: "Salmon",
      to: "/salmon",
      spanCols: 2,
      spanRows: 1,
      bg: "bg-pink-200/50",
    },
    {
      title: "Broccoli",
      to: "/broccoli",
      spanCols: 2,
      spanRows: 1,
      bg: "bg-lime-200/50",
    },
    {
      title: "Tamago",
      to: "/tamago",
      spanCols: 1,
      spanRows: 4,
      bg: "bg-yellow-200/50",
    },
    {
      title: "Pork",
      to: "/pork",
      spanCols: 2,
      spanRows: 2,
      bg: "bg-amber-200/50",
    },
    {
      title: "Edamame",
      to: "/edamame",
      spanCols: 1,
      spanRows: 2,
      bg: "bg-green-200/50",
    },
    {
      title: "Tomato",
      to: "/tomato",
      spanCols: 3,
      spanRows: 2,
      bg: "bg-orange-200/50",
    },
  ];

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-100 dark:bg-gray-800">
      <div
        className="
          grid 
          w-full h-full 
          max-w-screen-lg 
          grid-cols-4 grid-rows-4 
          gap-4 
          bg-gray-200 dark:bg-gray-900 
          p-2 
          rounded-lg 
          shadow-lg
        "
      >
        {tiles.map((tile, i) => (
          <BentoTile
            key={i}
            to={tile.to}
            title={tile.title}
            className={`
              col-span-${tile.spanCols} 
              row-span-${tile.spanRows} 
              ${tile.bg} 
              rounded-lg 
              shadow-md
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default BentoGrid;
