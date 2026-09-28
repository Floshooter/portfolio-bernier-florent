import type { HeadTag } from "@/seo/route-meta"

const managedAttribute = "data-seo"

function createElement(tag: Exclude<HeadTag, { tag: "title" }>): HTMLElement {
  if (tag.tag === "meta") {
    const meta = document.createElement("meta")
    meta.setAttribute(tag.attribute, tag.key)
    meta.setAttribute("content", tag.content)
    return meta
  }
  const link = document.createElement("link")
  link.setAttribute("rel", tag.rel)
  link.setAttribute("href", tag.href)
  if (tag.hreflang !== undefined) {
    link.setAttribute("hreflang", tag.hreflang)
  }
  return link
}

export function applyHeadTags(tags: readonly HeadTag[]): void {
  document.head.querySelectorAll(`[${managedAttribute}]`).forEach((element) => {
    element.remove()
  })
  const fragment = document.createDocumentFragment()
  for (const tag of tags) {
    if (tag.tag === "title") {
      document.title = tag.content
      continue
    }
    const element = createElement(tag)
    element.setAttribute(managedAttribute, "")
    fragment.appendChild(element)
  }
  document.head.appendChild(fragment)
}