import FilterButton from "./FilterButton";

function FilterButtons({ activeFilter, onFilterChange }) {
  return (
    <div className="flex flex-col gap-2">
        <FilterButton
        active={activeFilter === "all"}
        onClick={() => onFilterChange("all")}>
        Todas
        </FilterButton>

        <FilterButton
        active={activeFilter === "pending"}
        onClick={() => onFilterChange("pending")}>
        Pendientes
        </FilterButton>

        <FilterButton
        active={activeFilter === "completed"}
        onClick={() => onFilterChange("completed")}>
        Completadas
        </FilterButton>
    </div>
  );
}

export default FilterButtons;