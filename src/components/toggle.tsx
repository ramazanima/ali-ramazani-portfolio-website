'use client';

interface ButtonProps {
    size?: 'small' | 'medium' | 'large';
    label?: string;
    onChange?: any;
    styles?: string;
    active?: boolean;
}

export const ToggleButton = ({ label, onChange, active }: ButtonProps) => {
    return (
        <label className="relative inline-flex cursor-pointer items-center">
            <input
                onChange={onChange}
                type="checkbox"
                value=""
                className="peer sr-only"
                checked={active}
            />
            <div
                className={`peer h-6 w-11  rounded-full bg-gray-200 after:absolute after:top-[2px] after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none dark:bg-gray-700  
                ${active
                        ? 'after:bg-primary border-1 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-primary after:transition-all peer-checked:bg-green-50 dark:border-gray-600'
                        : 'after:bg-black'
                    } after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:transition-all peer-checked:bg-green-50 dark:border-gray-600`}
            ></div>
            {label && <span className="ml-3 text-sm font-medium">{label}</span>}
        </label>
    );
};