export const testDir = 'tests'
export const timeout = 20000
export const retries = 0
export const reporter = [
	['html'],
	['junit', { outputFile: 'results.xml' }],
	['allure-playwright']
]
export const projects = [
	{
		name: `Chrome`,
		use: {
			browserName: `chromium`,
			channel: `chrome`,
			headless: false,
			viewport: null,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	},
	{
		name: `Firefox`,
		use: {
			browserName: `firefox`,
			viewport: null,
			ignoreHTTPSErrors: true,
			headless: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			launchOptions: {
				slowMo: 200
			}
		}
	},
	{
		name: `Safari`,
		use: {
			browserName: `webkit`,
			viewport: null,
			ignoreHTTPSErrors: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`
		}
	},
	{
		name: `Edge`,
		use: {
			browserName: `chromium`,
			channel: `msedge`,
			viewport: null,
			ignoreHTTPSErrors: true,
			screenshot: `only-on-failure`,
			video: `retain-on-failure`,
			trace: `retain-on-failure`,
			launchOptions: {
				slowMo: 100
			}
		}
	}
]
