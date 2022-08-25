import { TextChannel } from "discord.js"
import { XMLParser } from "fast-xml-parser"

export const sendNHKNews = async (channel: TextChannel) => {
  const res = await fetch("https://www.nhk.or.jp/rss/news/cat0.xml")
  const text = await res.text()
  const parser = new XMLParser()
  const data = parser.parse(text)
  const links = data.rss.channel.item.map((data: any) => data.link)
  links.forEach((link: string) => {
    channel.send({ content: link })
  })
}
