import { FocusCards } from "@/components/ui/focus-cards";

interface ServicesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
}

export const Services = ({ data }: ServicesProps) => {
  return (
    <div className="flex flex-col items-center">
      <FocusCards cards={data} />
      <h3 className="my-10 text-4xl font-bold tracking-widest">
        Y mucho más...
      </h3>
    </div>
  );
};
