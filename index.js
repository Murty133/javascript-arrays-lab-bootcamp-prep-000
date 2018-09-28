var kittens = []

function destructivelyAppendKitten(name) {
  return kittens.push(name)
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens.unshift()
  return kittens
}

function appendKitten(name) {
  return kittens.splice(kittens.length - 3, 0, name)
}

