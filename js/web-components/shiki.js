import { createHighlighter } from 'shiki'

document.addEventListener('DOMContentLoaded', async () => {
  const theme = 'vitesse-dark'
  const codefields = document.querySelectorAll('code.shiki')
  const highlighters = new Map()

  codefields.forEach(async (field) => {
    const lang = field.dataset.lang ?? 'js'

    let highlighter
    if (!highlighters.has(lang)) {
      highlighter = await createHighlighter({ themes: [theme], langs: [lang] })
      highlighters.set(lang, highlighter)
    } else {
      highlighter = highlighters.get(lang)
    }

    const value = betterTrim(field.textContent)
    field.innerHTML = highlighter.codeToHtml(value, { lang, theme })
  })
})

function betterTrim(content) {
  function trimLeft(val) {
    return val.replace(/^[\s﻿\xA0]+/g, '')
  }

  function trimLineBreaks(input) {
    const lines = input.split('\n')
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() === '') lines.splice(i--, 1)
      else break
    }
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim() === '') lines.splice(i, 1)
      else break
    }
    return lines.join('\n')
  }

  return (function (content) {
    const lines = content.split('\n')
    const pad = lines.reduce((acc, line) => {
      if (line.length > 0 && trimLeft(line).length > 0 && acc > line.length - trimLeft(line).length) {
        return line.length - trimLeft(line).length
      }
      return acc
    }, Number.POSITIVE_INFINITY)
    const sliced = lines.map((line) => line.slice(pad))
    const startSlice = sliced.findIndex((v) => v.length > 0)
    const endSlice = sliced.findLastIndex((v) => v.length > 0)
    return sliced.slice(startSlice, endSlice + 1).join('\n')
  })(content)
}
