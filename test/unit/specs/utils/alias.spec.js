import { toSlug } from '@/utils/alias'

describe('alias utils', () => {
  describe('toSlug', () => {
    it('exists', () => {
      expect(toSlug).toBeDefined()
    })

    it('converts an alias with spaces', () => {
      expect(toSlug('the notorious big')).toEqual('the-notorious-big')
    })
    it('converts an alias with dots', () => {
      expect(toSlug('the notorious b.i.g')).toEqual('the-notorious-b.i.g')
    })

    it('produces a lowercase value', () => {
      expect(toSlug('The Notorious B.I.G')).toEqual('the-notorious-b.i.g')
    })
  })
})
