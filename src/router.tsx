import { createBrowserRouter } from "react-router"
import { AppLoader } from "@/components/app-loader"
import { routerBasename } from "@/i18n/paths"
import { LanguageLayout } from "@/layouts/language-layout"
import { NotFoundPage } from "@/pages/not-found-page"
import { RouteErrorPage } from "@/pages/route-error-page"
import { RootRedirect } from "@/routes/root-redirect"

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootRedirect />,
      errorElement: <RouteErrorPage />,
      hydrateFallbackElement: <AppLoader />,
    },
    {
      path: "/:lang",
      element: <LanguageLayout />,
      errorElement: <RouteErrorPage />,
      hydrateFallbackElement: <AppLoader />,
      children: [
        {
          index: true,
          lazy: async () => ({ Component: (await import("@/pages/home-page")).HomePage }),
        },
        {
          path: "about",
          lazy: async () => ({ Component: (await import("@/pages/about-page")).AboutPage }),
        },
        {
          path: "experience",
          lazy: async () => ({ Component: (await import("@/pages/experience-list-page")).ExperienceListPage }),
        },
        {
          path: "experience/:slug",
          lazy: async () => ({
            Component: (await import("@/pages/experience-detail-page")).ExperienceDetailPage,
          }),
        },
        {
          path: "experience/:slug/:projectSlug",
          lazy: async () => ({
            Component: (await import("@/pages/experience-project-page")).ExperienceProjectPage,
          }),
        },
        {
          path: "education",
          lazy: async () => ({ Component: (await import("@/pages/education-list-page")).EducationListPage }),
        },
        {
          path: "education/:slug",
          lazy: async () => ({
            Component: (await import("@/pages/education-detail-page")).EducationDetailPage,
          }),
        },
        {
          path: "education/:slug/years/:yearId",
          lazy: async () => ({ Component: (await import("@/pages/school-year-page")).SchoolYearPage }),
        },
        {
          path: "education/:slug/:projectSlug",
          lazy: async () => ({
            Component: (await import("@/pages/education-project-page")).EducationProjectPage,
          }),
        },
        {
          path: "projects",
          lazy: async () => ({ Component: (await import("@/pages/project-list-page")).ProjectListPage }),
        },
        {
          path: "projects/:slug",
          lazy: async () => ({
            Component: (await import("@/pages/personal-project-page")).PersonalProjectPage,
          }),
        },
        {
          path: "skills",
          lazy: async () => ({ Component: (await import("@/pages/skills-page")).SkillsPage }),
        },
        {
          path: "travels",
          lazy: async () => ({ Component: (await import("@/pages/travels-page")).TravelsPage }),
        },
        {
          path: "travels/:slug",
          lazy: async () => ({ Component: (await import("@/pages/travel-detail-page")).TravelDetailPage }),
        },
        {
          path: "watch",
          lazy: async () => ({ Component: (await import("@/pages/watch-page")).WatchPage }),
        },
        {
          path: "cv",
          lazy: async () => ({ Component: (await import("@/pages/cv-page")).CvPage }),
        },
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  { basename: routerBasename },
)