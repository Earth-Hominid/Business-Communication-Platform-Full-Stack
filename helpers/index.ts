import * as cookie from 'cookie';
import {
  CookieParseOptions,
  CookieSerializeOptions,
  parse,
  serialize,
} from 'cookie';

export function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || '' : '');
}
