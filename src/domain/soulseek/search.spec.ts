import {search} from './search'

describe('search', () => {
    test('search for Jul is Search: Jul', () => {
        expect(search('Jul')).toBe('Recherche: Jul');
    })
})