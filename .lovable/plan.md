# RetailRetina intelligence upgrade

## Overview
Upgrade the existing store operations dashboard in place, preserving its bright, compact monitoring style and all current views.

## Changes

### RetailRetina branding
- Replace “EdgeRetail AI” with “RetailRetina” in the sidebar identity, page title, descriptions where appropriate, and social metadata.
- Keep the existing scan-style logo mark and retail intelligence tagline.

### Traffic Analysis & Predictive Staffing
- Add a dedicated navigation view named **Traffic & Staffing**.
- Show three concise historical traffic charts for hour of day, day of week, and month of year, with each peak clearly identified.
- Add a staffing recommendation beside the charts that calculates and displays an exact floor-team requirement for the current time block from the current traffic pattern, rush mode, and service demand.
- Include a short zone allocation breakdown so the recommended total is operationally useful.

### Two live device cameras
- Replace the single device-camera connection with two independent live feed slots shown side by side.
- Discover available phone or laptop cameras after permission is granted and let the operator choose the source for each slot.
- Provide individual start/stop controls, useful permission/device errors, and retain the existing camera imagery as inactive placeholders.

### Bidirectional shopper counting
- Draw a visible center tripwire over each live feed.
- Run privacy-preserving frame-difference motion tracking locally in the browser; track the dominant moving subject’s horizontal center and register only debounced line crossings.
- Left-to-right crossings add one shopper; right-to-left crossings subtract one, never below zero.
- Feed that shared live value into the **Active Shoppers** KPI and show per-camera entry/exit counts beside each feed.
- Provide small prototype test controls to simulate each crossing direction when a real moving subject is unavailable.

### Predictive stock-out report
- Add a **High-Risk Inventory** table to Inventory Radar.
- For each SKU, compare current units against average daily sales to calculate days of cover and expected units remaining when the next shipment arrives.
- List only items projected to run out before delivery, ranked by urgency, with projected run-out time, shipment ETA, and shortage quantity.
- Make the existing stock-out simulation update the forecast.

## Technical details
- Keep data local and use browser media APIs plus an offscreen canvas; no video leaves the device and no biometric recognition is added.
- Keep camera streams and animation loops independently cleaned up when stopped or when the view closes.
- Use existing semantic colors, typography, cards, and controls; keep layouts readable on mobile and desktop.
- Keep all data as realistic prototype data without adding a backend.

## Verification
- Confirm every visible and metadata branding reference says RetailRetina.
- Verify both camera slots can start with available/fake devices, tripwire simulation changes the shared KPI in both directions, and stop cleans up each stream.
- Verify staffing charts and recommendations react to rush mode.
- Verify High-Risk Inventory calculations and stock-out simulation behavior.
- Check desktop and mobile layouts and browser console errors.
