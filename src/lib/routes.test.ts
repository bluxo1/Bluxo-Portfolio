import { describe, expect, it } from 'vitest'
import { menuItems } from './routes'
describe('menu routes', () => { it('contains every primary destination', () => { expect(menuItems.map((item) => item.path)).toEqual(['/projects', '/skills', '/about', '/resume', '/contact', '/socials']) }) })
