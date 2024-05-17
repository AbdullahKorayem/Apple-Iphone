import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import * as Sentry from "@sentry/react";


Sentry.init({
    dsn: "https://2705e59336ff53563da71311ed60af3b@o4507241815605248.ingest.de.sentry.io/4507271732461649",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.metrics.metricsAggregatorIntegration(),
        Sentry.reactRouterV6BrowserTracingIntegration({
            useEffect: React.useEffect,
        }),
        Sentry.replayIntegration(),
    ],
    tracesSampleRate: 1.0, //  Capture 100% of the transactions
    tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
    replaysSessionSampleRate: 0.1, 
    replaysOnErrorSampleRate: 1.0,
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
