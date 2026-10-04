import Button from "./Button";

const filters = [
  { value: "all", label: "Todas" },
  { value: "pending", label: "Pendientes" },
  { value: "completed", label: "Completadas" },
];

function FilterButtons({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-col gap-2">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "primary" : "secondary"}
          onClick={() => onFilterChange(filter.value)}
          className="w-full"
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}

export default FilterButtons;