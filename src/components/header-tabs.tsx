import React from "react"

interface HeaderProps {
	link: string
	name: string
}

const HeaderTabs = ({ siteTitle }: HeaderProps) => (
	<header className="header">
		<ul className="header-item">
			{this.props.headerProps.map(item => (
				<li>
					<a href={item.link}>{item.name}</a>
				</li>
			))}
		</ul>
	</header>
)

export default HeaderTabs
