import React from 'react';
export function Toast({ message, onClose }: { message: string; onClose: () => void }): React.ReactElement { return <div className="toast" role="status" onClick={onClose}>{message}</div>; }

