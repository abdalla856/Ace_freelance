import React from "react"

export default function useOnScreen(ref) {
  let options= {
    root: null,
    rootMargin: '0px',
    threshold: 0.65
};
  const [isIntersecting, setIntersecting] = React.useState(false)

  const observer = new IntersectionObserver(
    ([entry]) => setIntersecting(entry.isIntersecting) , options
  )

  React.useEffect(() => {
    observer.observe(ref.current)
    // Remove the observer as soon as the component is unmounted
    return () => { observer.disconnect() }
  }, [])

  return isIntersecting
}