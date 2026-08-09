import { useState, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import './DatePicker.css';

// ─── helpers ───────────────────────────────────────────────
const DAYS = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const MONTHS = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December',
];

function toYMD(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}
function parseYMD(s: string): Date | null {
  if (!s) return null;
  const [y,m,d] = s.split('-').map(Number);
  return new Date(y, m - 1, d);
}
function formatDisplay(s: string): string {
  const d = parseYMD(s);
  if (!d) return '';
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─── component ─────────────────────────────────────────────
interface DatePickerProps {
  id?: string;
  value: string;            // YYYY-MM-DD or ''
  min?: string;             // YYYY-MM-DD
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export default function DatePicker({
  id,
  value,
  min,
  onChange,
  placeholder = 'Select date',
  className = '',
}: DatePickerProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const minDate = min ? parseYMD(min) : today;

  const [open, setOpen] = useState(false);
  const [calPos, setCalPos] = useState<{ top: number; left: number } | null>(null);
  const [viewYear, setViewYear] = useState(() => {
    const d = parseYMD(value) ?? today;
    return d.getFullYear();
  });
  const [viewMonth, setViewMonth] = useState(() => {
    const d = parseYMD(value) ?? today;
    return d.getMonth();
  });

  const triggerRef = useRef<HTMLButtonElement>(null);
  const calRef     = useRef<HTMLDivElement>(null);

  // Position calendar above trigger using fixed coords
  const updatePos = useCallback(() => {
    if (!triggerRef.current) return;
    const rect = triggerRef.current.getBoundingClientRect();
    const calW = 296;
    // Position above the trigger, centered on it
    let left = rect.left + rect.width / 2 - calW / 2;
    // Keep within viewport
    left = Math.max(8, Math.min(left, window.innerWidth - calW - 8));
    // Place above the trigger with a small gap; if not enough room above, go below
    const calH = 320; // approximate
    let top: number;
    if (rect.top > calH + 16) {
      top = rect.top - calH - 12;
    } else {
      top = rect.bottom + 12;
    }
    setCalPos({ top, left });
  }, []);

  const openCalendar = useCallback(() => {
    updatePos();
    setOpen(true);
  }, [updatePos]);

  // close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        triggerRef.current && triggerRef.current.contains(e.target as Node)
      ) return;
      if (calRef.current && calRef.current.contains(e.target as Node)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // reposition on scroll/resize while open
  useEffect(() => {
    if (!open) return;
    const reposition = () => updatePos();
    window.addEventListener('scroll', reposition, true);
    window.addEventListener('resize', reposition);
    return () => {
      window.removeEventListener('scroll', reposition, true);
      window.removeEventListener('resize', reposition);
    };
  }, [open, updatePos]);

  // sync view when value changes externally
  useEffect(() => {
    const d = parseYMD(value);
    if (d) { setViewYear(d.getFullYear()); setViewMonth(d.getMonth()); }
  }, [value]);

  const prevMonth = useCallback(() => {
    setViewMonth(m => { if (m === 0) { setViewYear(y => y - 1); return 11; } return m - 1; });
  }, []);
  const nextMonth = useCallback(() => {
    setViewMonth(m => { if (m === 11) { setViewYear(y => y + 1); return 0; } return m + 1; });
  }, []);

  const selectDate = (d: Date) => {
    onChange(toYMD(d));
    setOpen(false);
  };

  const clear = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChange('');
    setOpen(false);
  };

  const goToday = () => {
    setViewYear(today.getFullYear());
    setViewMonth(today.getMonth());
    onChange(toYMD(today));
    setOpen(false);
  };

  // build calendar grid
  const firstDay    = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrev  = new Date(viewYear, viewMonth, 0).getDate();
  const cells: { date: Date; current: boolean }[] = [];

  for (let i = firstDay - 1; i >= 0; i--) {
    cells.push({ date: new Date(viewYear, viewMonth - 1, daysInPrev - i), current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(viewYear, viewMonth, d), current: true });
  }
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(viewYear, viewMonth + 1, d), current: false });
  }

  const selectedDate = parseYMD(value);
  const todayYMD     = toYMD(today);

  // Calendar dropdown JSX (rendered via portal to escape overflow)
  const calendarEl = open && calPos ? createPortal(
    <div
      ref={calRef}
      className="dp__calendar"
      role="dialog"
      aria-label="Date picker"
      style={{ top: calPos.top, left: calPos.left }}
    >
      {/* Header */}
      <div className="dp__header">
        <button type="button" className="dp__nav-btn" onClick={prevMonth} aria-label="Previous month">
          <svg viewBox="0 0 20 20" fill="none"><path d="M12 5l-5 5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <span className="dp__month-year">
          {MONTHS[viewMonth]} {viewYear}
        </span>
        <button type="button" className="dp__nav-btn" onClick={nextMonth} aria-label="Next month">
          <svg viewBox="0 0 20 20" fill="none"><path d="M8 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      {/* Weekday labels */}
      <div className="dp__weekdays">
        {DAYS.map(d => <span key={d} className="dp__weekday">{d}</span>)}
      </div>

      {/* Date grid */}
      <div className="dp__grid">
        {cells.map(({ date, current }, i) => {
          const ymd        = toYMD(date);
          const isSelected = selectedDate ? toYMD(selectedDate) === ymd : false;
          const isToday    = ymd === todayYMD;
          const isDisabled = minDate ? date < minDate : false;

          return (
            <button
              key={i}
              type="button"
              className={[
                'dp__day',
                !current       ? 'dp__day--other'    : '',
                isSelected     ? 'dp__day--selected'  : '',
                isToday && !isSelected ? 'dp__day--today' : '',
                isDisabled     ? 'dp__day--disabled'  : '',
              ].filter(Boolean).join(' ')}
              onClick={() => !isDisabled && selectDate(date)}
              disabled={isDisabled}
              aria-label={date.toLocaleDateString('en-US', { dateStyle: 'long' })}
              aria-pressed={isSelected}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>

      {/* Footer */}
      <div className="dp__footer">
        <button type="button" className="dp__footer-btn dp__footer-btn--clear" onClick={clear}>
          Clear
        </button>
        <button type="button" className="dp__footer-btn dp__footer-btn--today" onClick={goToday}>
          Today
        </button>
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <div className={`dp ${className}`} id={id}>
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        className="dp__trigger"
        onClick={() => open ? setOpen(false) : openCalendar()}
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span className={`dp__trigger-value ${!value ? 'dp__trigger-value--empty' : ''}`}>
          {value ? formatDisplay(value) : placeholder}
        </span>
        <svg className="dp__trigger-icon" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="14" height="13" rx="2" stroke="currentColor" strokeWidth="1.4"/>
          <path d="M7 2v4M13 2v4M3 8h14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      </button>

      {calendarEl}
    </div>
  );
}
