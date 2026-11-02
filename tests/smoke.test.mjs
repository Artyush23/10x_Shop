import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const packageJson = JSON.parse(readFileSync('package.json', 'utf8'));
const read = file => readFileSync(file, 'utf8');

test('project has the single active entrypoint', () => {
  assert.equal(existsSync('src/main.tsx'), false);
  assert.match(read('index.html'), /src\/app\.tsx/);
});

test('required commerce safeguards are present', () => {
  const catalog = read('src/pages/CatalogPage.tsx');
  const context = read('src/context/AppContext.tsx');
  const validation = read('src/utils/validation.ts');
  assert.match(catalog, /Using offline catalog/);
  assert.match(context, /Math\.min\(action\.product\.stock/);
  assert.match(context, /PROMO_CODE/);
  assert.match(validation, /Password must be at least 6 characters/);
  assert.match(validation, /validateSignup/);
});

test('quality scripts are wired', () => {
  assert.equal(packageJson.scripts.test, 'node --test tests/smoke.test.mjs');
  assert.equal(packageJson.scripts.lint, 'node scripts/lint.mjs');
});
