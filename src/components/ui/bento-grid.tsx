import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image, // Changed from icon and header to just image
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string | React.ReactNode; // Changed type to accept string (URL) or ReactNode
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-border dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col",
        className
      )}
    >
      <div className="flex flex-1 w-full !h-[400px] overflow-hidden rounded-t-xl">
        {typeof image === 'string' ? (
          <img src={image} alt={title?.toString()} className="w-full h-full object-cover" />
        ) : (
          image
        )}
      </div>
      <div className="p-4 h-36">
        <div className="text-xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-2">
          {title}
        </div>
        <div className="text-lg font-normal text-white">
          {description}
        </div>
      </div>
    </div>
  );
};
