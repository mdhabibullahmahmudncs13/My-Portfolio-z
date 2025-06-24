import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'ru', 'ua'],
  defaultLocale: 'en'
});

export const config = {
  matcher: ['/', '/(ru|ua|en)/:path*']
};