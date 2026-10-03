import FilterButton from "./FilterButton";

function FilterButtons({ activeFilter, onFilterChange }) {
  return (
    <div className="mb-6 flex justify-center gap-2">
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