import React from "react"
import {
  getMetadata,
  useQuerySvg,
  Image,
  AltLayout,
  ButtonLink,
  ErrorContainer,
} from "@teefe/gatsby-theme-luden"
import data from "../gatsby-theme-luden/data/infoData"

const ErrorPage = () => {
  const { logo, title } = getMetadata().meta.siteMetadata
  const { description, buttonLabel } = data.error

  return (
    <AltLayout>
      <ErrorContainer>
        <div>
          <Image normalize light src={useQuerySvg(logo)} alt={title} svg />
          <h1>{description}</h1>
          <ButtonLink
            slug="/"
            ariaLabel={buttonLabel}
            title="home"
            rounded="true"
          >
            {buttonLabel}
          </ButtonLink>
        </div>
      </ErrorContainer>
    </AltLayout>
  )
}

export default ErrorPage
