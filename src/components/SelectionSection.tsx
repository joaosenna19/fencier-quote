import SelectableCard from "./SelectableCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface SelectionSectionProps {
  title: string;
  items: { id: string; name: string; imageUrl: string }[];
  selectedItem: string | null;
  onSelect: (id: string) => void;
}

const SelectionSection: React.FC<SelectionSectionProps> = ({
  title,
  items,
  selectedItem,
  onSelect,
}) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 lg:gap-12">
      <h3 className="text-gray-500 font-semibold dark:text-gray-400 md:text-lg lg:text-xl">
        {title}
      </h3>
      <ScrollArea className="whitespace-nowrap rounded-md border w-full max-w-3xl mx-auto">
        <div className="flex justify-center">
          {items.map((item) => (
            <SelectableCard
              key={item.id}
              id={item.id}
              name={item.name}
              imageUrl={item.imageUrl}
              isSelected={selectedItem === item.id}
              onSelect={onSelect}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default SelectionSection;
