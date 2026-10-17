
function QuantityStepper({ value, onChange }) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-600">Spots:</span>

      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="h-8 w-8 rounded-md border border-slate-300 font-bold hover:bg-slate-100"
        aria-label="Decrease spots"
      >
        −
      </button>

      <span className="min-w-4 text-center font-semibold">
        {value}
      </span>

      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="h-8 w-8 rounded-md border border-slate-300 font-bold hover:bg-slate-100"
        aria-label="Increase spots"
      >
        +
      </button>
    </div>
  );
}

export default QuantityStepper;
