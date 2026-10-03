import FilterButton from "./FilterButton";

function FilterButtons() {
  return (
    <div className="mb-6 flex justify-center gap-2">
      <FilterButton active>
        Todas
      </FilterButton>

      <FilterButton>
        Pendientes
      </FilterButton>

      <FilterButton>
        Completadas
      </FilterButton>
    </div>
  );
}

export default FilterButtons;