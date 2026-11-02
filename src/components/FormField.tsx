import React from 'react';
type FormFieldProps = { label: string; error?: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>;
export function FormField({ label, error, className, ...props }: FormFieldProps): React.ReactElement { const id = props.id ?? label.toLowerCase().replaceAll(' ', '-'); return <label className={className} htmlFor={id}>{label}<input {...props} id={id} aria-invalid={Boolean(error)} aria-describedby={error ? `${id}-error` : undefined}/>{error && <span id={`${id}-error`} className="field-error" role="alert">{error}</span>}</label>; }

