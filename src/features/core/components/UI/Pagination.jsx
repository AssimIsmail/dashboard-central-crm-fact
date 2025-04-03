import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight } from "react-icons/fi"
import { Link, useLocation } from "react-router-dom"

export default function Pagination({ pagination, isLoading }) {
  const location = useLocation()

  if (isLoading) {
    return
  }

  // Helper function to update the query string while retaining existing params
  const createPageLink = (page) => {
    const searchParams = new URLSearchParams(location.search)
    searchParams.set("page", page) // Update the page parameter
    return `?${searchParams.toString()}`
  }

  if (pagination) {
    return (
      <div
        className="flex items-center justify-center gap-2"
        dir="ltr"
      >
        {/* First Page Icon */}
        {pagination.links.length > 1 && pagination.current_page !== 1 && pagination.first_page && (
          <Link
            className="p-2 bg-white border-2 rounded-md border-muted"
            to={createPageLink(pagination.first_page)}
          >
            <FiChevronsLeft />
          </Link>
        )}

        {/* Pagination Links */}
        {pagination.links.map((link, index) => {
          const isActive = pagination.current_page === link.page

          const linkClassName = `p-1.5 px-3 rounded-md border-2 ${!isActive ? "bg-white border-muted" : " bg-light text-primary border-primary"}`

          if (link.label === "PREVIOUS") {
            return (
              <Link
                key={index}
                to={createPageLink(link.page)}
                className="rounded-[6px] border-2 bg-white p-2"
              >
                <FiChevronLeft />
              </Link>
            )
          }

          if (link.label === "NEXT") {
            return (
              <Link
                key={index}
                to={createPageLink(link.page)}
                className="rounded-[6px] border-2 bg-white p-2"
              >
                <FiChevronRight />
              </Link>
            )
          }

          return (
            <Link
              key={index}
              to={createPageLink(link.page)}
              className={linkClassName}
            >
              {link.label}
            </Link>
          )
        })}

        {/* Last Page Icon */}
        {pagination.links.length > 1 && pagination.current_page !== pagination.last_page && pagination.last_page && (
          <Link
            className="rounded-[6px] border-2 bg-white p-2"
            to={createPageLink(pagination.last_page)}
          >
            <FiChevronsRight />
          </Link>
        )}
      </div>
    )
  }

  return null
}