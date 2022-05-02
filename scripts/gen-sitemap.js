const fs = require('fs')
const path = require('path')

const sitemapTempStr =
  `<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://blog.nicelinks.site/</loc></url>
  #PLACEHOLDER#
</urlset>`

const generate = async () => {
  const baseUrl = 'https://blog.nicelinks.site'
  const linksUrlArr = []
  const files = fs.readdirSync(path.join(__dirname, '..', 'src/blogs'))
  files.forEach((item) => {
    const name = item.replace('.md', '')
    const link = `${baseUrl}/${name}/`
    const urlLocItem = `<url><loc>${link}</loc></url>`
    linksUrlArr.push(urlLocItem)
  })
  const linksUrlStr = linksUrlArr.join('\n  ')
  const sitemapContent = sitemapTempStr.replace(`#PLACEHOLDER#`, linksUrlStr)
  const outputPath = `${process.cwd()}/public/sitemap.xml`
  fs.writeFileSync(outputPath, sitemapContent)
  console.log(`🎉 主人，已帮您生成站点地图，共计 ${files.length + 1} 条。`)
}

generate()
