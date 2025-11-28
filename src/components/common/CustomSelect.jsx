import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function CustomSelect({ value, onChange, options, placeholder }) {
    const [open, setOpen] = useState(false);
    const [positionUp, setPositionUp] = useState(false);
    const ref = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        if (open && ref.current) {
            const rect = ref.current.getBoundingClientRect();

            const spaceBelow = window.innerHeight - rect.bottom;
            const spaceAbove = rect.top;

            // If not enough space below but enough space above → open upward
            if (spaceBelow < 200 && spaceAbove > 200) {
                setPositionUp(true);
            } else {
                setPositionUp(false);
            }
        }
    }, [open]);

    return (
        <div className="relative w-full" ref={ref}>
            <button
                type="button"
                className="w-full flex justify-between items-center border rounded-md px-3 py-2 bg-white dark:bg-neutral-900 text-left text-sm"
                onClick={() => setOpen(!open)}
            >
                {value ? (
                    <span>{options.find((o) => o.value === value)?.label}</span>
                ) : (
                    <span className="text-neutral-400">{placeholder}</span>
                )}
                <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {open && (
                <div
                    ref={dropdownRef}
                    className={`absolute w-full border rounded-md bg-white dark:bg-neutral-900 shadow-lg z-30 max-h-52 overflow-y-auto ${
                        positionUp ? "bottom-full mb-1" : "mt-1"
                    }`}
                >
                    {options.map((item) => (
                        <div
                            key={item.value}
                            onClick={() => {
                                onChange(item.value);
                                setOpen(false);
                            }}
                            className="px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800 cursor-pointer"
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
