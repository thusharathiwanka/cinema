import {
  MOBILE_MAX_WIDTH,
  TABLET_MAX_WIDTH,
  DESKTOP_MAX_WIDTH,
  DESKTOP_LARGE_MAX_WIDTH,
  DESKTOP_EXTRA_LARGE_MAX_WIDTH,
} from '~/lib/constants/viewport.constant'

describe('ViewportSizes', () => {
  test('MOBILE_MAX_WIDTH should be 480', () => {
    expect(MOBILE_MAX_WIDTH).toBe(480)
  })

  test('TABLET_MAX_WIDTH should be 768', () => {
    expect(TABLET_MAX_WIDTH).toBe(768)
  })

  test('DESKTOP_MAX_WIDTH should be 1280', () => {
    expect(DESKTOP_MAX_WIDTH).toBe(1280)
  })

  test('DESKTOP_LARGE_MAX_WIDTH should be 1440', () => {
    expect(DESKTOP_LARGE_MAX_WIDTH).toBe(1440)
  })

  test('DESKTOP_EXTRA_LARGE_MAX_WIDTH should be 1980', () => {
    expect(DESKTOP_EXTRA_LARGE_MAX_WIDTH).toBe(1980)
  })
})
