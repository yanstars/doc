// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "newdoc",
	tagline: "newdoc and blog",
	url: "https:doc.yanstars.top",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",

	organizationName: "facebook", // Usually your GitHub org/user name.
	projectName: "docusaurus", // Usually your repo name.

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					id: "fe",
					path: "fe",
					routeBasePath: "fe",
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					sidebarPath: require.resolve("./sidebarsFe.js")
					// Please change this to your repo.
					// editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
				},
				// blog: {
				// showReadingTime: true,
				// Please change this to your repo.
				// editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
				// },
				theme: {
					customCss: require.resolve("./src/css/custom.css")
				}
			})
		]
	],
	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				id: "java",
				path: "java",
				routeBasePath: "java",
				sidebarPath: require.resolve("./sidebarsJava.js")
				// editUrl: "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/"
				// ... 其他设置
			}
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "--",
				logo: {
					alt: "My Site Logo",
					src: "img/logo.svg"
				},
				items: [
					{ to: "/fe/", label: "FE", position: "left" },
					{ to: "/java/", label: "JAVA", position: "left" },
					{ to: "/blog", label: "Blog", position: "left" }
					// {
					// 	href: "https://github.com/facebook/docusaurus",
					// 	label: "GitHub",
					// 	position: "right"
					// }
				]
			},
			footer: {
				style: "dark",
				links: [
					// {
					// 	title: "Fe",
					// 	items: [
					// 		{
					// 			label: "Tutorial",
					// 			to: "/docs/fe"
					// 		}
					// 	]
					// },
					// {
					// 	title: "java",
					// 	items: [
					// 		{
					// 			label: "Stack Overflow",
					// 			href: "https://stackoverflow.com/questions/tagged/docusaurus"
					// 		},
					// 		{
					// 			label: "Discord",
					// 			href: "https://discordapp.com/invite/docusaurus"
					// 		},
					// 		{
					// 			label: "Twitter",
					// 			href: "https://twitter.com/docusaurus"
					// 		}
					// 	]
					// },
					// {
					// 	title: "More",
					// 	items: [
					// 		{
					// 			label: "Blog",
					// 			to: "/blog"
					// 		},
					// 		{
					// 			label: "GitHub",
					// 			href: "https://github.com/facebook/docusaurus"
					// 		}
					// 	]
					// }
				],
				copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
}

module.exports = config
