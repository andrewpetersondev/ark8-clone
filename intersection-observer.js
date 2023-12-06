// Select the divs
let target = document.querySelector(".scroll-dependent-div")
let box = document.querySelector(".intersection-observer")

// Set initial visibility to hidden
target.style.visibility = "hidden"

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.4,
}

// Create a new Intersection Observer
let observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    // If box5 is at least 50% visible
    if (entry.intersectionRatio >= 0.4) {
      // Change visibility of target to visible
      target.style.visibility = "visible"
    } else {
      // Otherwise, keep it hidden
      target.style.visibility = "hidden"
    }
  })
}, options)

// Start observing box5
observer.observe(box)
