import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

const metrikaId = import.meta.env.VITE_METRIKA_ID

if (metrikaId) {
  const script = document.createElement('script')
  script.async = true
  script.src = `https://mc.yandex.ru/metrika/tag.js?id=${metrikaId}`
  document.head.appendChild(script)

  const init = document.createElement('script')
  init.text = `window.ym=window.ym||function(){(window.ym.a=window.ym.a||[]).push(arguments)};window.ym.l=Date.now();ym(${metrikaId},"init",{clickmap:true,trackLinks:true,accurateTrackBounce:true});`
  document.head.appendChild(init)
}

// TODO: GA support can be added via VITE_GA_ID when needed.

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
