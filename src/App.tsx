import { FilterBar } from './components/FilterBar';
import { TodoForm } from './components/TodoForm';
import { TodoList } from './components/TodoList';
import { useTodos } from './hooks/useTodos';

export default function App() {
  const {
    todos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
    stats,
  } = useTodos();

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-indigo-50 px-4 py-12">
      <div className="mx-auto w-full max-w-xl">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-800">Todos</h1>
          <p className="mt-2 text-slate-500">Saved locally in your browser</p>
        </header>

        <div className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/60">
          <TodoForm onAdd={addTodo} />

          <div className="mt-6">
            <TodoList
              todos={todos}
              onToggle={toggleTodo}
              onEdit={editTodo}
              onDelete={deleteTodo}
            />
          </div>

          <div className="mt-6">
            <FilterBar
              filter={filter}
              onFilterChange={setFilter}
              activeCount={stats.active}
              hasCompleted={stats.completed > 0}
              onClearCompleted={clearCompleted}
            />
          </div>
        </div>
      </div>
    </main>
  );
}