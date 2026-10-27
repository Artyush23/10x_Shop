import React from 'react';
export function FormField({ label, error, ...props }: { label: string; error?: string } & React.InputHTMLAttributes<HTMLInputElement>): React.ReactElement { const id = props.id ?? label.toLowerCase().replaceAll(' ', '-'); return <label htmlFor={id}>{label}<input {...props} id={id}/>{error && <span className="field-error" role="alert">{error}</span>}</label>; }

