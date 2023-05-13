import { ReactComponent as GitHubLogo } from "../../assets/svg/GitHub.svg"
import { ReactComponent as LinkedInLogo } from "../../assets/svg/LinkedIn.svg"

export default function Footer() {
  return (
    <footer className="bg-white px-10 py-4 shadow-t-sm">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between sm:flex-row">
        <p className="text-center text-darkblue-300">
          &copy; 2023 Konrad Dębski
        </p>
        <div className="flex">
          <a
            href="https://github.com/DrewnioQ"
            data-tooltip-target="tooltip-github"
            target="_blank"
            rel="noreferrer"
            className="flex cursor-pointer items-center justify-center rounded-lg p-2 text-darkblue-300 transition hover:bg-hovercolor hover:text-darkblue-500"
          >
            <GitHubLogo className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/konrad-debski/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex cursor-pointer items-center justify-center rounded-lg p-2 text-darkblue-300 transition hover:bg-hovercolor hover:text-darkblue-500"
          >
            <LinkedInLogo className="h-6 w-6 sm:h-8 sm:w-8" />
          </a>
        </div>
      </div>
    </footer>
  )
}
