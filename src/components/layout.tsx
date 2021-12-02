import * as React from "react"
import { Link } from "gatsby"
import { HeaderTabs } from "./header-tabs"

const Layout = ({ location, title, children }) => {
	const rootPath = `${__PATH_PREFIX__}/`
	const isRootPath = location.pathname === rootPath
	let header

	const headerProps = {
		listItems: [
			{ link: "#index", name: "About Me" },
			{ link: "#blog", name: "Blog" },
		],
	}

	header = <HeaderTabs headerProps={headerProps} />

	return (
		<div className="global-wrapper" data-is-root-path={isRootPath}>
			<header className="global-header">{header}</header>
			<main>{children}</main>
			<footer>
				© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</footer>
		</div>
	)
}

export default Layout
