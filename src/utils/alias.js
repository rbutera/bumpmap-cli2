import slugify from 'slugify'
import { SLUG_NOT_ALLOWED } from '@/utils/regex-patterns'

export function toSlug(alias) {
  return slugify(alias, {
    replacement: '-',
    remove: SLUG_NOT_ALLOWED,
    lower: true,
  })
}

export default {
  toSlug,
}
