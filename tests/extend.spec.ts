import { expect, test } from '@playwright/test';

// Icons
test('Icon page should have h1', async ({ page }) => {
	await page.goto('/extend/icons');
	expect(await page.textContent('h1')).toBe('Guidance for using external icon libraries');
});

// flowbite-svelte-starter
test('Flowbite-Svelte-Starter page should have h1', async ({ page }) => {
	await page.goto('/extend/flowbite-svelte-starter');
	expect(await page.textContent('h1')).toBe('Flowbite-Svelte Starter');
});
