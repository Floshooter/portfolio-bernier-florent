const absoluteUrlPattern = /^(?:[a-z][a-z\d+.-]*:)?\/\//i

export const siteOrigin = "https://floshooter.github.io"

export const defaultOgImage = "/og-image.png"

export const defaultOgImageSize = { width: 1200, height: 630 } as const

function joinBase(path: string): string {
  return `${siteOrigin}${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`
}

export function absoluteAssetUrl(path: string): string {
  return absoluteUrlPattern.test(path) ? path : joinBase(path)
}

export function absolutePageUrl(path: string): string {
  const url = joinBase(path)
  return url.endsWith("/") ? url : `${url}/`
}