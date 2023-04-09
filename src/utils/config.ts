import { ThemingProps } from '@chakra-ui/react'
import { atlantis } from './network'

export const SITE_NAME = 'tool-page'
export const SITE_DESCRIPTION = 'Provided some tools.'
export const SITE_URL = 'https://tool-page.seaverse.seaeye.cn'

export const THEME_INITIAL_COLOR = 'system'
export const THEME_COLOR_SCHEME: ThemingProps['colorScheme'] = 'gray'
export const THEME_CONFIG = {
  initialColorMode: THEME_INITIAL_COLOR,
}

export const SOCIAL_TWITTER = 'B1ue1nWh1te_New'
export const SOCIAL_GITHUB = 'seaverse-chain/tool-page'

export const ETH_CHAINS = [atlantis]

export const SERVER_SESSION_SETTINGS = {
  cookieName: SITE_NAME,
  password: process.env.SESSION_PASSWORD ?? 'UPDATE_TO_complex_password_at_least_32_characters_long',
  cookieOptions: {
    secure: process.env.NODE_ENV === 'production',
  },
}
