var kittens = []

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKittens(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}