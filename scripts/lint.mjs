import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

execFileSync(process.execPath, [join(process.cwd(), 'node_modules/typescript/bin/tsc'), '--noEmit'], { stdio: 'inherit' });
const scan = directory => readdirSync(directory, { withFileTypes: true }).flatMap(entry => entry.isDirectory() ? scan(join(directory, entry.name)) : entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') ? [join(directory, entry.name)] : []);
const files = scan('src');
const violations = files.flatMap(file => readFileSync(file, 'utf8').split('\n').map((line, index) => /(?:\:\s*any\b|\bas any\b|<any\b)/.test(line) ? `${file}:${index + 1}: explicit any is not allowed` : null).filter(Boolean));
if (existsSync('src/main.tsx')) violations.push('src/main.tsx: legacy entrypoint must be removed');
if (violations.length) { console.error(violations.join('\n')); process.exit(1); }
console.log(`Quality lint passed for ${files.length} TypeScript files.`);
