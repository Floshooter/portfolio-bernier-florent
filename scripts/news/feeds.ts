export interface FeedSource {
  readonly name: string
  readonly url: string
  readonly language: "fr" | "en"
  readonly themes: readonly string[]
}

export const feeds: readonly FeedSource[] = [
  {
    name: "ActuIA",
    url: "https://www.actuia.com/feed/",
    language: "fr",
    themes: ["ai"],
  },
  {
    name: "TechCrunch AI",
    url: "https://techcrunch.com/category/artificial-intelligence/feed/",
    language: "en",
    themes: ["ai"],
  },
  {
    name: "Jeuxvideo.com",
    url: "https://www.jeuxvideo.com/rss/rss.xml",
    language: "fr",
    themes: ["video-games"],
  },
  {
    name: "Polygon",
    url: "https://www.polygon.com/rss/index.xml",
    language: "en",
    themes: ["video-games"],
  },
  {
    name: "Esports Insider",
    url: "https://esportsinsider.com/feed",
    language: "en",
    themes: ["esport"],
  },
  {
    name: "CERT-FR",
    url: "https://www.cert.ssi.gouv.fr/feed/",
    language: "fr",
    themes: ["cybersecurity"],
  },
  {
    name: "The Hacker News",
    url: "https://feeds.feedburner.com/TheHackersNews",
    language: "en",
    themes: ["cybersecurity"],
  },
]