import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { HomeIcon } from "@/components/utils/Icons"

type BreadclumbCustomProps = {
  movieTitle: string
}

export const BreadcrumbCustom = ({ movieTitle }: BreadclumbCustomProps) => {
  return (
    <div className="ml-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <HomeIcon />
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">...</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>{movieTitle}</BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}
