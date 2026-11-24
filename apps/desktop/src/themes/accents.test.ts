import { describe, expect, it } from 'vitest'

import { NOUS_ACCENT, resolveAccentPick } from './accents'

describe('resolveAccentPick', () => {
  it('paints Nous blue as a real accent, separate from the theme reset', () => {
    expect(resolveAccentPick('nous', false)).toEqual({ hex: NOUS_ACCENT, id: 'nous' })
    expect(resolveAccentPick('theme', false)).toEqual({ hex: null, id: null })
  })
})
