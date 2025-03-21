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
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[16rem] sm:auto-rows-[18rem] lg:auto-rows-[20rem] gap-3 sm:gap-4 lg:gap-6 max-w-[95%] sm:max-w-[90%] xl:max-w-7xl mx-auto",
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
  image,
  titleClassName,
  descriptionClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string | React.ReactNode;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-lg sm:rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-border dark:shadow-none dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col overflow-hidden",
        className
      )}
    >
      <div className="flex flex-1 w-full h-[200px] sm:h-[250px] lg:h-[300px] overflow-hidden">
        {typeof image === 'string' ? (
          <img src={image} alt={title?.toString()} className="w-full h-full object-cover transition-transform duration-300 group-hover/bento:scale-105" />
        ) : (
          image
        )}
      </div>
      <div className="p-3 sm:p-4 lg:p-5 h-auto sm:h-32 lg:h-36">
        <div className={cn(
          "text-lg sm:text-xl xl:text-2xl font-medium bg-gradient-to-r from-[#00a6ff] via-[#ff5959] to-[#ffc073] bg-clip-text text-transparent mb-1 sm:mb-2 line-clamp-2",
          titleClassName
        )}>
          {title}
        </div>
        <div className={cn(
          "text-sm sm:text-base xl:text-lg font-normal text-white/90 line-clamp-3",
          descriptionClassName
        )}>
          {description}
        </div>
      </div>
    </div>
  );
};
