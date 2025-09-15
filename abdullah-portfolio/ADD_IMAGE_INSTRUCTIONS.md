# Adding Your Image to the Portfolio

## Steps to Add Your Image:

1. **Save your image** to the `public` folder in your project
2. **Rename the image** to something like `hero-image.jpg` or `workspace.jpg`
3. **Update the HeroScene component** to use your image filename

## Current Setup:

The HeroScene component is already configured to display an image. You just need to:

1. Place your image file in: `/public/your-image.jpg`
2. Update the filename in `src/components/HeroScene.tsx` line 11:
   ```tsx
   src="/your-image.jpg" // Change this to your actual filename
   ```

## Recommended Image Specifications:

- **Format**: JPG, PNG, or WebP
- **Aspect Ratio**: 16:9 or 4:3 works well
- **Size**: 1200x800px or similar (will be automatically optimized by Next.js)
- **File Size**: Under 2MB for best performance

## Example:

If you name your image `workspace.jpg`, update line 11 to:
```tsx
src="/workspace.jpg"
```

## Current Image Description:

Based on your description, this appears to be a 3D modeling workspace showing:
- Computer monitor with 3D software (Blender-like interface)
- Physical figurine of a character in a black suit
- "Nightfall Protocol Collector's Edition" packaging
- Professional 3D design setup

This would make a great hero image showcasing your technical and creative skills!

## After Adding the Image:

1. Save the file
2. The development server will automatically reload
3. Visit http://localhost:3000 to see your image
