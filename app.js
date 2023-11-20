document.addEventListener("DOMContentLoaded", function () {
  const maxImages = 4
  let currentIndex1 = 1
  let currentIndex2 = 1
  let currentIndex3 = 1

  function changeImage(direction, index) {
    const imageElement = document.getElementById(`image${index}`)
    const dotsContainer = document.getElementById(`dots${index}`)

    let currentIndex
    switch (index) {
      case 1:
        currentIndex =
          ((currentIndex1 + direction - 1 + maxImages) % maxImages) + 1
        currentIndex1 = currentIndex
        break
      case 2:
        currentIndex =
          ((currentIndex2 + direction - 1 + maxImages) % maxImages) + 1
        currentIndex2 = currentIndex
        break
      case 3:
        currentIndex =
          ((currentIndex3 + direction - 1 + maxImages) % maxImages) + 1
        currentIndex3 = currentIndex
        break
      default:
        break
    }

    imageElement.src = `./images/image${index}_${currentIndex}.jpeg`

    updateDots(dotsContainer, currentIndex)
  }

  function updateDots(container, currentIndex) {
    container.innerHTML = ""
    for (let i = 1; i <= maxImages; i++) {
      const dot = document.createElement("div")
      dot.classList.add("dot")
      if (i === currentIndex) {
        dot.classList.add("active")
      }
      container.appendChild(dot)
    }
  }

  // Initial update for all dot containers
  document.querySelectorAll(".dots").forEach((dotsContainer, index) => {
    updateDots(dotsContainer, index + 1)
  })
  // Add this line to expose the changeImage function globally
  window.changeImage = changeImage
})
