# Background Image Setup

## Required Image File

To complete the background setup, you need to add a high-resolution photo of friends doing fun activities to:

```
public/images/friends-fun-activities.jpg
```

## Image Requirements

- **File name**: `friends-fun-activities.jpg`
- **Location**: `public/images/`
- **Resolution**: High resolution (at least 1920x1080, preferably 4K)
- **Content**: Friends engaging in fun activities together
- **Format**: JPG format for optimal loading

## Suggested Image Content

The image should show:
- Groups of friends having fun together
- Various activities (sports, games, outdoor activities, etc.)
- Happy, energetic atmosphere
- Good lighting and composition
- Diverse group of people

## Alternative Image Names

If you have a different image file name, update the background image URL in:
`src/app/page.js` line 114:
```javascript
backgroundImage: `url('/images/YOUR_IMAGE_NAME.jpg')`
```

## Current Implementation

The background image is implemented with:
- Fixed attachment for parallax effect
- Cover positioning to fill the entire viewport
- Dark overlay (40% opacity) to ensure text readability
- All existing gradient and animation effects are preserved as overlays


