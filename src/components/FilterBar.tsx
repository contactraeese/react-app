import type { TodoFilter } from '../types/todo';

const FILTERS: { value: TodoFilter; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
];

interface FilterBarProps {
  filter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
  activeCount: number;
  hasCompleted: boolean;
  onClearCompleted: () => void;
}

export function FilterBar({
  filter,
  onFilterChange,
  activeCount,
  hasCompleted,
  onClearCompleted,
}: FilterBarProps) {
  return (
    <div className="flex items-center justify-between gap-2 border-t border-slate-200 pt-4 text-sm">
      <span className="shrink-0 text-slate-500">
        {activeCount} {activeCount === 1 ? 'item' : 'items'} left
      </span>

      <div className="flex gap-1">
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => onFilterChange(value)}
            className={`rounded-md px-3 py-1.5 font-medium transition ${
              filter === value
                ? 'bg-indigo-600 text-white'
                : 'text-slate-500 hover:bg-slate-100 hover:text-slate-700'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <button
        onClick={onClearCompleted}
        disabled={!hasCompleted}
        className="shrink-0 text-slate-500 transition hover:text-red-600 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-slate-500"
      >
        Clear completed
      </button>
    </div>
  );
}