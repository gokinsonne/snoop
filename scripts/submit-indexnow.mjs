const host = "snoopdoggdollar.org"
const key = "4d0e41c7d3e2f09378a04b6c5d8e1f20"
const before = process.env.INDEXNOW_BEFORE
const { execFileSync } = await import("node:child_process")

const output = execFileSync("git", ["diff", "--name-only", before || "HEAD^", "HEAD"], { encoding: "utf8" })
const files = output.split(/\r?\n/).filter(Boolean)
const urls = new Set()

for (const file of files) {
  const match = file.match(/^app\/(.*\/)?page\.tsx$/)
  if (!match) continue
  const route = (match[1] || "").replace(/\/$/, "")
  urls.add(`https://${host}/${route}${route ? "/" : ""}`)
}

if (files.some((file) => file === "app/sitemap.ts" || file.startsWith("components/"))) {
  urls.add(`https://${host}/`)
}

if (!urls.size) {
  console.log("No indexable page changes detected")
  process.exit(0)
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: [...urls] }),
})

console.log(`IndexNow ${response.status}: submitted ${urls.size} changed URL(s)`)
if (![200, 202].includes(response.status)) process.exit(1)
