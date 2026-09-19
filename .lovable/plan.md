# Add Store Demand Heat Map

## What will be added

- Add a new **Demand Heat Map** view to the main navigation.
- Show a clear top-down supermarket floor plan with color-coded demand zones for Entrance, Produce, Grocery, Bakery, Electronics, Checkout, and Customer Care.
- Display live shopper count, demand level, dwell time, and current staff for each zone.
- Add an AI staffing recommendation panel that identifies understaffed hot zones and recommends where staff should move from.
- Provide a working **Move Staff** action that updates both source and destination staffing and confirms the change.
- Make **Simulate Rush Hour** update the map by increasing congestion and recommendations around Entrance and Checkout.

## Visual behavior

- Emerald indicates balanced coverage, amber indicates rising demand, and crimson indicates urgent staffing demand.
- The floor plan remains readable in both dark and light themes and adapts to smaller screens.
- Demand zones use restrained pulsing and soft intensity layers without obscuring labels.

## Technical details

- Keep all sample data and interactions in the existing frontend dashboard.
- Reuse the current semantic design tokens and existing button controls.
- Verify the new view, rush-hour state, and staff reassignment flow in the live preview.
