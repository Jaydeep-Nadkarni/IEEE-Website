# Assets Folder Guide

## Location
`Client/public/assets/`

## How to Use

### 1. Adding Your Logo

**Step 1:** Place your logo image in:
```
Client/public/assets/logos/ieee-logo.png
```

Supported formats: PNG, JPG, SVG, WebP

**Step 2:** Update `src/components/Navbar.jsx`:
```jsx
// Replace this section:
<Link to="/" className="flex items-center space-x-2">
  <div className="w-10 h-10 bg-gradient-to-br from-[#4B5563] to-[#2C3E50] rounded-lg flex items-center justify-center">
    <span className="text-white font-bold text-lg">IEEE</span>
  </div>

// With this:
<Link to="/" className="flex items-center space-x-2">
  <img 
    src="/assets/logos/ieee-logo.png" 
    alt="IEEE Logo" 
    className="w-10 h-10 rounded-lg"
  />
```

---

### 2. Adding Team Photos

**Step 1:** Place member photos in:
```
Client/public/assets/images/
- rajesh-kumar.jpg
- priya-sharma.jpg
- arjun-patel.jpg
- etc.
```

**Step 2:** Update `src/pages/Members.jsx`:

Find the members array and add image paths:
```jsx
const members = [
  { 
    name: 'Rajesh Kumar', 
    position: 'Chairperson', 
    category: 'leadership',
    image: '/assets/images/rajesh-kumar.jpg'  // Add this
  },
  // ... more members
];
```

**Step 3:** Update MemberCard component in Members.jsx:
```jsx
<MemberCard 
  name={member.name} 
  position={member.position}
  image={member.image}  // Pass the image prop
/>
```

---

### 3. Adding Custom Icons

If you want custom icon images instead of text labels:

**Step 1:** Place icons in:
```
Client/public/assets/icons/
- learn.png
- network.png
- career.png
- etc.
```

**Step 2:** Update components to reference them:
```jsx
<img 
  src="/assets/icons/learn.png" 
  alt="Learn Icon" 
  className="w-8 h-8"
/>
```

Instead of:
```jsx
<span className="w-10 h-10 bg-[#4B5563] rounded-full">Books</span>
```

---

## Recommended Image Sizes

### Logos
- Dimensions: 512x512px (square logo)
- File size: < 50KB
- Format: PNG with transparency recommended

### Team Photos
- Dimensions: 400x400px (square photos)
- File size: < 100KB each
- Format: JPG or WebP
- Best for: Professional headshots

### Icons
- Dimensions: 64x64px or 128x128px
- File size: < 20KB
- Format: PNG with transparency
- Style: Keep consistent with professional design

---

## File Structure Example

```
Client/
└── public/
    └── assets/
        ├── logos/
        │   ├── ieee-logo.png
        │   ├── ieee-logo-white.png
        │   └── ieee-logo-color.png
        │
        ├── images/
        │   ├── rajesh-kumar.jpg
        │   ├── priya-sharma.jpg
        │   ├── arjun-patel.jpg
        │   ├── neha-singh.jpg
        │   └── ... (more team members)
        │
        └── icons/
            ├── learn.png
            ├── network.png
            ├── career.png
            ├── innovation.png
            └── ... (more icons)
```

---

## Using Assets in Different Files

### Navbar.jsx
```jsx
import logo from '/assets/logos/ieee-logo.png';

// Or use directly:
<img src="/assets/logos/ieee-logo.png" alt="Logo" />
```

### Members.jsx
```jsx
const members = [
  { 
    name: 'Rajesh Kumar', 
    position: 'Chairperson',
    image: '/assets/images/rajesh-kumar.jpg'
  }
];

// Then pass to component:
<MemberCard name={member.name} position={member.position} image={member.image} />
```

### Home.jsx
```jsx
// Feature icon with image
<div className="flex items-center">
  <img src="/assets/icons/learn.png" alt="Learn" className="w-8 h-8 mr-3" />
  <h3>Learn & Develop</h3>
</div>
```

---

## Tips

1. **Always compress images** - Use tools like TinyPNG for better performance
2. **Use appropriate formats:**
   - PNG: For logos with transparency
   - JPG: For photos
   - WebP: For modern optimized images
3. **Maintain aspect ratios** - Use square formats (1:1) for consistency
4. **Create variants:** Light/dark versions for different themes
5. **Organize files** - Keep folders clean and well-named

---

## Testing

After adding assets, test them:

```bash
npm run dev
```

Then check:
- Logo displays in navbar
- Team photos show correctly
- All images load without 404 errors
- Images maintain quality on all screen sizes

---

## Common Issues

### Image not showing?
- Check file path: `/assets/images/filename.jpg`
- Verify file exists in correct folder
- Check browser console for 404 errors
- Ensure file extension is correct

### Image distorted?
- Use square dimensions
- Supply correct aspect ratio
- Add CSS classes to maintain aspect ratio

### Performance slow?
- Compress images
- Use WebP format
- Resize large photos
- Consider lazy loading

---

## Need Help?

Visit these paths:
- Logo folder: `Client/public/assets/logos/`
- Images folder: `Client/public/assets/images/`
- Icons folder: `Client/public/assets/icons/`

Just drag and drop your files there and reference them in the code!

Happy customizing! 🎨
