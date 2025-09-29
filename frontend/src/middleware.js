// middleware.js (en la raíz del proyecto)
import { NextResponse } from 'next/server'

export function middleware(request) {
  // Define los idiomas soportados
  const locales = ['es', 'en']
  const defaultLocale = 'es' // Idioma por defecto
  
  // Obtiene el pathname actual
  const pathname = request.nextUrl.pathname
  
  // Verifica si el pathname ya tiene un locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  
  // Si no tiene locale, redirige
  if (pathnameIsMissingLocale) {
    // Obtiene el idioma preferido del navegador
    const locale = getLocale(request) || defaultLocale
    
    // Redirige agregando el locale al pathname
    return NextResponse.redirect(
      new URL(`/${locale}${pathname}`, request.url)
    )
  }
}

function getLocale(request) {
  // Obtiene el idioma del header Accept-Language
  const acceptLanguage = request.headers.get('accept-language')
  
  if (!acceptLanguage) return null
  
  // Parsea los idiomas preferidos
  const languages = acceptLanguage
    .split(',')
    .map(lang => lang.split(';')[0].trim())
  
  // Busca el primer idioma soportado
  for (const lang of languages) {
    if (lang.startsWith('es')) return 'es'
    if (lang.startsWith('en')) return 'en'
  }
  
  return null
}

// Define en qué rutas se ejecuta el middleware
export const config = {
  matcher: [
    // Solo aplica middleware a rutas de páginas
    '/',
    '/((?!api|_next|.*\\..*).*)',
  ]
}