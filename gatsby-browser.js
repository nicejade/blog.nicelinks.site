/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const addScript = url => {
	const script = document.createElement("script")
	script.src = url
	script.async = true
	document.body.appendChild(script)
}

export const onClientEntry = () => {
	window.onload = () => {
		addScript("https://image.nicelinks.site/ad-block-remind-min.js?v07")
    setTimeout(() => {
      var AdBlockRemind = document.createElement("ad-block-remind");
      document.body.appendChild(AdBlockRemind);
    }, 600)
	}
}