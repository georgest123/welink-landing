# WeLink Landing Page - Assets Integration Guide

## 📁 Folder Structure

Create the following folder structure in your `public` directory:

```
public/
├── images/
│   ├── logo.png (or .svg)           # Your WeLink logo
│   ├── hero-image.png               # Main hero section image
│   ├── feature-images/              # Feature section images
│   │   ├── safety.png
│   │   ├── ephemeral.png
│   │   ├── time-respect.png
│   │   └── inner-circle.png
│   └── background-images/           # Background images
│       └── pattern.png
├── videos/
│   ├── hero-video.mp4               # Main hero video
│   ├── demo-video.mp4               # App demo video
│   └── background-video.mp4         # Background video
└── icons/
    └── favicon.ico                  # Browser favicon
```

## 🖼️ Image Requirements

### Logo
- **Format**: PNG or SVG (SVG recommended for scalability)
- **Size**: 32x32px minimum, 64x64px recommended
- **Background**: Transparent preferred
- **File**: Save as `/public/images/logo.png`

### Hero Image
- **Format**: PNG or JPG
- **Size**: 600x400px minimum, 1200x800px recommended
- **Aspect Ratio**: 3:2 or 16:9
- **File**: Save as `/public/images/hero-image.png`

### Feature Images
- **Format**: PNG or JPG
- **Size**: 200x200px minimum
- **Background**: Transparent or matching your theme
- **Files**: Save in `/public/images/feature-images/`

## 🎥 Video Requirements

### Hero Video
- **Format**: MP4 (H.264 codec)
- **Duration**: 10-30 seconds
- **Size**: 1920x1080px or 1280x720px
- **File Size**: Under 5MB for web optimization
- **File**: Save as `/public/videos/hero-video.mp4`

### Demo Video
- **Format**: MP4 (H.264 codec)
- **Duration**: 30-60 seconds
- **Size**: 1920x1080px
- **File Size**: Under 10MB
- **File**: Save as `/public/videos/demo-video.mp4`

## 🔧 How to Add Your Assets

### Step 1: Add Your Logo

1. Place your logo file in `/public/images/logo.png`
2. Uncomment the Image component in the code:

```jsx
// In NavBar and Footer components, replace:
<div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg ring-1 ring-white/20 flex items-center justify-center">
  {/* <Image src="/images/logo.png" alt="WeLink Logo" width={32} height={32} className="rounded-xl" /> */}
</div>

// With:
<div className="h-8 w-8 rounded-2xl bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400 shadow-lg ring-1 ring-white/20 flex items-center justify-center">
  <Image src="/images/logo.png" alt="WeLink Logo" width={32} height={32} className="rounded-xl" />
</div>
```

### Step 2: Add Your Hero Media

**Option A: Use Hero Image**
1. Place your image in `/public/images/hero-image.png`
2. Replace `HeroMedia` with `CustomHeroMedia` in the Hero component
3. The image will automatically display with glassmorphic styling

**Option B: Use Hero Video**
1. Place your video in `/public/videos/hero-video.mp4`
2. In the `CustomHeroMedia` component, uncomment the video section and comment out the image section
3. The video will autoplay with glassmorphic styling

### Step 3: Add Feature Images (Optional)

To add custom images to feature cards, update the FeatureGrid component:

```jsx
// Add this to each feature object:
{ 
  icon: Shield, 
  title: "Safety baked in", 
  desc: "Invite-only circles. No stalking, no public search.",
  image: "/images/feature-images/safety.png"  // Add this line
}

// Then in the feature card:
<div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-purple-400 via-fuchsia-400 to-blue-400 flex items-center justify-center shadow-lg ring-1 ring-white/20">
  <Image src={f.image} alt={f.title} width={48} height={48} className="rounded-xl" />
</div>
```

### Step 4: Add Background Video (Optional)

To add a background video, update the AnimatedBackdrop component:

```jsx
function AnimatedBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      >
        <source src="/videos/background-video.mp4" type="video/mp4" />
      </video>
      
      {/* Rest of your backdrop elements */}
    </div>
  );
}
```

## 🎨 Styling Tips

### Logo Styling
- The logo will automatically get glassmorphic styling
- For SVG logos, you can add custom colors using CSS
- Ensure your logo works on both light and dark backgrounds

### Image Optimization
- Use Next.js Image component for automatic optimization
- Consider using WebP format for better compression
- Add proper alt text for accessibility

### Video Optimization
- Use `muted` and `playsInline` for mobile compatibility
- Consider adding a poster image for video loading
- Use `preload="metadata"` for faster loading

## 🚀 Quick Start

1. **Create the folders**:
   ```bash
   mkdir -p public/images/feature-images
   mkdir -p public/images/background-images
   mkdir -p public/videos
   mkdir -p public/icons
   ```

2. **Add your logo**:
   - Save as `/public/images/logo.png`
   - Uncomment the Image components in the code

3. **Add your hero media**:
   - Save as `/public/images/hero-image.png` or `/public/videos/hero-video.mp4`
   - Replace `HeroMedia` with `CustomHeroMedia` in the Hero component

4. **Test your changes**:
   ```bash
   npm run dev
   ```

## 📝 Notes

- All images and videos are automatically optimized by Next.js
- The glassmorphic styling will be applied automatically
- Make sure your assets are properly sized for web performance
- Test on different devices and screen sizes
- Consider adding loading states for videos

## 🔍 Troubleshooting

**Images not showing?**
- Check file paths are correct
- Ensure files are in the `public` folder
- Verify file extensions match exactly

**Videos not playing?**
- Check video format (MP4 with H.264 codec)
- Ensure `muted` attribute is present
- Check file size (keep under 10MB)

**Performance issues?**
- Optimize image sizes
- Use WebP format when possible
- Consider lazy loading for below-the-fold content






