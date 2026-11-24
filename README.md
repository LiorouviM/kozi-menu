# Kozi menu

Menu site for Kozi, souvlaki and Greek tavern in Chora, Naxos. English with a Greek toggle.

- Dish carousel: `src/components/ui/dish-orbit-carousel.tsx` (GSAP, scroll-driven)
- Featured dishes, full menu, address and links: `src/data/menu.ts`
- Dish photos: `public/dishes/` (Unsplash photos of similar dishes; meat-variety.jpg is AI-generated. Replace with Kozi's own)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static site in dist/
```

Stack: Vite, React 19, TypeScript, Tailwind CSS 4, shadcn structure (`components.json`), lucide-react.
