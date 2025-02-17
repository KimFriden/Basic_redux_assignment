// Image to text setup graciously provided by Marius (GameOn Student)

const task = {
    one: `
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
🏁⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚗
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
`,
    two: `
⬜🏁⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬜⬜⬜⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛🚗⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
`,
    three: `
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
🏁⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛🚗
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
`,
    four: `
⬜🏁⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬜
⬜⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬛⬜⬜⬛⬛⬛⬛⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬛⬛⬛⬛⬛⬜⬜⬛⬜⬛⬛⬜⬜⬜⬛⬛⬛⬛⬜⬜⬜⬜⬛⬛⬜
⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬜⬜⬜⬛⬜⬜⬜⬛⬜⬜⬛⬜⬛⬛⬜⬛⬜⬜⬛⬜⬛⬛⬜⬜⬛⬜⬛⬛⬜⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬛⬜⬛⬛⬛⬛⬛⬜⬛⬜⬜⬛⬜⬜⬛⬛⬛⬜⬜⬛⬛⬛⬛⬛⬛⬜⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜
⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬜⬜⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬜
⬜⬜⬛⬜⬛⬛⬜⬛⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬛⬜⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬛⬜⬛⬜⬜⬛⬜⬛⬛⬜⬛⬛⬛⬜⬜⬛⬛⬛⬛⬛⬜⬜⬜⬜⬜⬛⬛⬛⬛⬜⬛⬛⬛⬛⬛⬜
⬜⬜⬛⬜⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬜⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬛⬜⬜⬛⬜⬜
⬜⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬜⬛⬛⬜⬜⬛⬛⬛⬜⬛⬛⬜⬛⬜⬜⬜⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬜
⬜⬛⬛⬜⬜⬜⬛⬛⬛⬛⬛⬜⬜⬛⬜⬛⬛⬜⬜⬜⬛⬜⬛⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜
⬜⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬜⬜⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬛⬜⬛⬜⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬜
⬜⬜⬛⬛⬜⬛⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬜
⬜⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬜⬛⬛⬛⬜⬛⬛⬜⬜⬜⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬛⬜⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬜⬜⬛⬛⬜⬛⬛⬜⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬜⬜⬛⬛⬛⬛⬛⬜⬛⬛⬛⬛⬜⬛⬜⬜⬜⬛⬛⬛⬜⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬜⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬜⬛⬛⬜⬜⬛⬜⬛⬛⬛⬜⬛⬜⬛⬛⬜
⬜⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬜⬛⬛⬛⬛⬜⬛⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜
⬜⬛⬛⬜⬛⬛⬛⬜⬛⬜⬜⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬜⬛⬜⬜
⬜⬛⬜⬜⬛⬜⬜⬛⬛⬛⬛⬜⬜⬛⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬜⬜
⬜⬛⬜⬛⬛⬛⬜⬛⬜⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬜⬜⬜⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬜⬜⬛⬛⬛⬜⬛⬜⬛⬜⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬜⬛⬜⬜⬛⬜⬜
⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛⬜⬜⬛⬛⬛⬜
⬜⬛⬜⬛⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬛⬜⬛⬛⬜⬛⬛⬜⬜⬛⬜⬜⬛⬜⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬜⬛⬜⬜
⬜⬛⬜⬜⬜⬛⬜⬛⬛⬛⬜⬛⬜⬜⬛⬛⬜⬛⬜⬛⬜⬜⬛⬛⬜⬛⬛⬛⬜⬛⬜⬛⬜⬜⬛⬜⬛⬜⬛🚗⬛⬜
⬜⬜⬛⬛⬛⬛⬛⬜⬛⬜⬛⬛⬛⬛⬛⬜⬛⬛⬜⬛⬛⬛⬜⬛⬛⬜⬜⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜⬛⬜⬜
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
`,
    five: `
⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
⬜⬛⬛⬜⬛⬜⬛⬜⬜⬜⬛⬛⬛⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬜⬜⬛⬛⬛⬜
⬜⬜⬛⬜⬜⬛⬛⬛⬜⬜⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬛⬛⬛⬜⬛⬛⬜⬛⬜
⬜⬛⬛⬜⬜⬛⬜⬛⬛⬛⬛⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬜⬛⬜⬛⬜⬜⬜⬛⬜
⬜⬜⬛⬛⬜⬛⬜⬛⬛⬛⬛⬛⬛⬛⬜
⬜⬛⬛⬛⬜⬛⬜⬛⬛⬛⬜⬛⬛⬜⬜
⬜⬛⬛⬜⬜⬛⬜⬜⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜
⬜⬜⬛⬛⬜⬛⬜⬜⬜⬜⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬜⬛⬛⬛⬛⬛⬜⬛⬛⬛⬜
⬜⬛⬛⬜⬜⬜⬜⬜⬜⬛⬜⬛⬜⬛⬜
⬜⬛⬛⬛⬛⬛⬛⬛⬛⬛⬜⬛⬛⬛🚗
⬜⬜🏁⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜⬜
`,
}

export default task;