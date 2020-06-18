// Group members: Sam Campbell, Alicia Williams, Jack Polson, Sharnetta Lamar
const parentElement = document.querySelector('.katas-list')

// Kata 01
const kata1Heading = document.createElement('h3')
kata1Heading.append('Kata 01')
parentElement.append(kata1Heading)
// Kata 01 p
const kata01P = document.createElement('p')
parentElement.append(kata01P)
for (counter = 0; counter <= 20; counter++) {
    if (counter <= 19) {
        kata01P.append(counter + ',' + ' ')
    } else {
        kata01P.append(counter)
    }
}

// Kata 02
const kata2Heading = document.createElement('h3')
kata2Heading.append('Kata 02')
parentElement.append(kata2Heading)
// Kata 02 p
const kata02P = document.createElement('p')
parentElement.append(kata02P)
for (let counter = 2; counter <= 20; counter += 2) {
    if (counter <= 18) {
        kata02P.append(counter + ',' + ' ')
    } else {
        kata02P.append(counter)
    }
}

// Kata 03
const kata3Heading = document.createElement('h3')
kata3Heading.append('Kata 03')
parentElement.append(kata3Heading)
// Kata 03 p
const kata03P = document.createElement('p')
parentElement.append(kata03P)
for (let counter = 1; counter <= 20; counter += 2) {
    if (counter <= 18) {
        kata03P.append(counter + ',' + ' ')
    } else {
        kata03P.append(counter)
    }
}

// Kata 04
const kata4Heading = document.createElement('h3')
kata4Heading.append('Kata 04')
parentElement.append(kata4Heading)
// Kata 04 p
const kata04P = document.createElement('p')
parentElement.append(kata04P)
for (let counter = 5; counter <= 100; counter += 5) {
    if (counter <= 95) {
        kata04P.append(counter + ',' + ' ')
    } else {
        kata04P.append(counter)
    }
}

// Kata 05
const kata5Heading = document.createElement('h3')
kata5Heading.append('Kata 05')
parentElement.append(kata5Heading)
// Kata 05 p
const kata05P = document.createElement('p')
parentElement.append(kata05P)
for (let counter = 1; counter <= 10; counter += 1) {
    if (counter <= 81) {
        kata05P.append(counter * counter + ',' + ' ')
    } else {
        kata05P.append(counter)
    }
}

// Kata 06
const kata6Heading = document.createElement('h3')
kata6Heading.append('Kata 06')
parentElement.append(kata6Heading)
// Kata 06 p
const kata06P = document.createElement('p')
parentElement.append(kata06P)
for (let counter = 20; counter >= 1; counter -= 1) {
    if (counter >= 2) {
        kata06P.append(counter + ',' + ' ')
    } else {
        kata06P.append(counter)
    }
}

// Kata 07
const kata7Heading = document.createElement('h3')
kata7Heading.append('Kata 07')
parentElement.append(kata7Heading)
// Kata 07 p
const kata07P = document.createElement('p')
parentElement.append(kata07P)
for (let counter = 20; counter >= 1; counter -= 2) {
    if (counter >= 4) {
        kata07P.append(counter + ',' + ' ')
    } else {
        kata07P.append(counter)
    }
}

// Kata 08
const kata8Heading = document.createElement('h3')
kata8Heading.append('Kata 08')
parentElement.append(kata8Heading)
// Kata 08 p
const kata08P = document.createElement('p')
parentElement.append(kata08P)
for (let counter = 19; counter >= 1; counter -= 2) {
    if (counter >= 3) {
        kata08P.append(counter + ',' + ' ')
    } else {
        kata08P.append(counter)
    }
}

// Kata 09
const kata9Heading = document.createElement('h3')
kata9Heading.append('Kata 09')
parentElement.append(kata9Heading)
// Kata 09 p
const kata09P = document.createElement('p')
parentElement.append(kata09P)
for (let counter = 100; counter >= 1; counter -= 5) {
    if (counter >= 10) {
        kata09P.append(counter + ',' + ' ')
    } else {
        kata09P.append(counter)
    }
}

// Kata 10
const kata10Heading = document.createElement('h3')
kata10Heading.append('Kata 10')
parentElement.append(kata10Heading)
// Kata 10 p
const kata10P = document.createElement('p')
parentElement.append(kata10P)
for (let counter = 10; counter >= 1; counter -= 1) {
    if (counter >= 1) {
        kata10P.append(counter * counter + ',' + ' ')
    } else {
        kata10P.append(counter)
    }
}

// Kata 11
const kata11Heading = document.createElement('h3')
kata11Heading.append('Kata 11')
parentElement.append(kata11Heading)
// Kata 11 p
const kata11P = document.createElement('p')
parentElement.append(kata11P)
const sampleArray = [
    469, 755, 244, 245, 758, 450, 302, 20, 712, 71,
    456, 21, 398, 339, 882, 848, 179, 535, 940, 472,
]
kata11P.append(sampleArray)

// Kata 12
const kata12Heading = document.createElement('h3')
kata12Heading.append('Kata 12')
parentElement.append(kata12Heading)
// Kata 12 p
const kata12P = document.createElement('p')
parentElement.append(kata12P)
let evenArray = []
let oddArray = []
for (let position = 0; position < sampleArray.length; position ++) {
    let possibleNumber = sampleArray[position]
    if (possibleNumber%2 == 0) {
        evenArray.push(' ' + possibleNumber)
    } else {
        oddArray.push(' ' + possibleNumber)
    }
}
kata12P.append(evenArray)

// Kata 13 
const kata13Heading = document.createElement('h3')
kata13Heading.append('Kata 13')
parentElement.append(kata13Heading)
// Kata 13 p
const kata13P = document.createElement('p')
parentElement.append(kata13P)
kata13P.append(oddArray)

// Kata 14
const kata14Heading = document.createElement('h3')
kata14Heading.append('Kata 14')
parentElement.append(kata14Heading)
// Kata 14 p
const kata14P = document.createElement('p')
parentElement.append(kata14P)
let squareArray = []
for (let position = 0; position < sampleArray.length; position ++) {
    let squareNumber = sampleArray[position]
    squareArray.push(squareNumber * squareNumber)
}
kata14P.append(squareArray)

// Kata 15
const kata15Heading = document.createElement('h3')
kata15Heading.append('Kata 15')
parentElement.append(kata15Heading)
// Kata 15 p
const kata15P = document.createElement('p')
parentElement.append(kata15P)
let total = 0
for (let counter = 0; counter <= 20; counter += 1) {
    total = counter + total
}
kata15P.append(total)

// Kata 16
const kata16Heading = document.createElement('h3')
kata16Heading.append('Kata 16')
parentElement.append(kata16Heading)
// Kata 16 p
const kata16P = document.createElement('p')
parentElement.append(kata16P)
let totalSampleArray = 0
for (let position = 0; position <= sampleArray.length; position += 1) {
    totalSampleArray = position + totalSampleArray
}
kata16P.append(totalSampleArray)

// Kata 17
const kata17Heading = document.createElement('h3')
kata17Heading.append('Kata 17')
parentElement.append(kata17Heading)
// Kata 17 p
const kata17P = document.createElement('p')
parentElement.append(kata17P)
let smallestNumber = Math.min(...sampleArray)
kata17P.append(smallestNumber)

// Kata 18
const kata18Heading = document.createElement('h3')
kata18Heading.append('Kata 18')
parentElement.append(kata18Heading)
// Kata 18 p
const kata18P = document.createElement('p')
parentElement.append(kata18P)
let largestNumber = Math.max(...sampleArray)
kata18P.append(largestNumber)