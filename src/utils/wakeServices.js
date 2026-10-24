const SERVICES = [
  import.meta.env.VITE_AUTH_URL,
  import.meta.env.VITE_RESUME_URL,
  import.meta.env.VITE_INTERVIEW_URL,
].filter(Boolean)

export const wakeServices = () => {
  SERVICES.forEach((url) => {
    fetch(url, { mode: "no-cors", cache: "no-store" }).catch(() => {})
  })
}