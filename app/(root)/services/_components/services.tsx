import { FocusCards } from "@/components/ui/focus-cards";

interface ServicesProps {
  data: {
    src: string;
    title: string;
    description: string;
  }[];
}

export const Services = ({ data }: ServicesProps) => {
  return <FocusCards cards={data} />;
};
