const lightning = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"];
const strings = lightning.filter(item => {
    return typeof item === 'string';
})

console.log(strings)