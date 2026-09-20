# Edge AI Retail Insight

Build a modern, sleek, enterprise-grade web application named "EdgeRetail AI" — an AI-powered Retail Intelligence Platform designed for physical retail store managers and operations teams. 

The core value proposition of the app is showcasing real-time shopper analytics, automated inventory tracking, and proactive queue management powered by on-device edge AI nodes.

Use a sleek, dark/light toggleable dashboard UI layout (modern slate/zinc color scheme with vibrant status accents: emerald green for optimal, amber for warning, crimson for critical alert, and indigo for AI insights). Include a top bar showing "Connected Edge Nodes: 12/12 Online (0 Cloud Latency)".

Build a tabbed main interface with the following primary views:

---

### 1. Overview Dashboard (Executive Summary)

- Top KPI Summary Cards:

  * Total Store Traffic Today (e.g., 2,845 shoppers, +12% vs avg)

  * Real-Time Active Shoppers (e.g., 142 in store)

  * Stock-Out Risk Items (e.g., 3 items urgent)

  * Avg Queue Wait Time (e.g., 1 min 45 sec - Optimal)

  * Cloud Data Offloaded (e.g., 98.4% processed locally on-device for privacy & speed)

- Live Video Stream Feed Mockup:

  * A section simulating 4 live CCTV camera views (Entrance, Checkout Zone, Aisle 4 - Grocery, Aisle 7 - Electronics).

  * Overlay green/red bounding boxes around dummy shoppers and items to simulate real-time AI computer vision detection.

  * Show small telemetry tags on videos (e.g., "Shopper #104 | Dwell Time: 3m 12s", "Queue Counter: 6 People").

---

### 2. Automated Inventory & Stock-Out Radar

- Real-time shelf inventory monitoring widget:

  * A grid/list of key product SKUs with visual status indicators (In Stock, Low Stock, Empty Shelf Detected).

  * Simulated AI Visual Detection Feed: "Aisle 4 Shelf 2: Organic Milk - 82% depleted. Predicted stock-out in 22 minutes."

- Actionable Alert Cards:

  * Quick action buttons for floor staff: "Trigger Restock Alert to Handheld", "Mark Restocked", "View Camera Snapshot".

---

### 3. Proactive Queue & Staffing Optimizer

- Live Checkout Line Monitor:

  * Cashier Counter Status (Counters 1-6 showing Open/Closed, Queue Length, and Wait Times).

- Predictive AI Alert Banner:

  * "⚠️ Queue Spike Warning: Inflow at Entrance increased by 40%. Recommend opening Counter 4 in 3 minutes to prevent wait times exceeding 4 minutes."

- Interactive "Open Counter Now" action button that updates the status dynamically.

- Staff Allocation Map: Visual breakdown of current staff placement vs. recommended AI allocation.

---

### 4. Privacy & Edge AI Architecture Telemetry

- A visual widget explaining the privacy and tech stack for stakeholders/judges:

  * Toggleable visual diagram showing "Camera → On-Device Neural Processing Unit (NPU) → Local Alerts (No PII saved)" vs "Cloud Sync (Anonymized Metrics Only)".

  * Live Performance Metrics gauge: Frame Processing Speed (30 FPS), Privacy Compliance Score (100% GDPR/DPDP compliant), Bandwidth Saved (94%).

---

### Interactive Features & Dummy Data

- Include realistic sample data pre-filled for a flagship retail supermarket.

- Add interactive toggles: Allow users to simulate events (e.g., click "Simulate Rush Hour" to increase queue times and trigger alert banners, or click "Simulate Shelf Stock-out" to update inventory status).

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://retailretina.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3494bce0-8795-458a-bb82-72490d81312c).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
