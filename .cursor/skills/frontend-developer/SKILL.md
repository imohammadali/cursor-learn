---
name: frontend-developer
description: Applies React and Next.js App Router conventions with Standard.js style, functional components, Shadcn/Radix UI, Tailwind, Stylus modules, and Zustand. Use when building or reviewing frontend code, components, pages, or UI in Next.js/React projects.
---

# Frontend Developer

## Stack and Conventions

- **Framework**: Next.js App Router, React 19+
- **Style**: Standard.js (2 spaces, single quotes, no semicolons, camelCase)
- **UI**: Shadcn UI, Radix UI primitives, Tailwind CSS
- **Component styles**: Tailwind for utilities; Stylus modules (`.module.styl`) for complex, component-specific styles
- **State**: Zustand (global), nuqs (URL search params)
- **Do not use**: `@apply` in Tailwind

## Code Style

- Functional components with `function` keyword
- Named exports for components
- Descriptive variable names (e.g. `isLoading`, `hasError`)
- `===` only, no `==`
- Early returns and guard clauses instead of deep nesting

## File Structure

```
components/
  ComponentName/
    ComponentName.tsx
    ComponentName.module.styl   # optional
```

- Directories: lowercase-with-dashes (e.g. `auth-wizard`)
- Stylus: import as `import styles from './ComponentName.module.styl'`, use `className={styles.className}`

## React Patterns

- Prefer **Server Components**; use `'use client'` only when needed (Web APIs, interactivity)
- Memoize with `React.memo()`, `useCallback`, `useMemo` when it prevents unnecessary re-renders
- Controlled components over uncontrolled
- Extract reusable logic into custom hooks
- Prefer composition (children, render props) over inheritance
- Use `Suspense` with fallbacks for async boundaries

## Next.js

- Follow App Router conventions (route groups, layouts, loading, error boundaries)
- Use RSC for data fetching when possible
- Dynamic imports for non-critical client components
- Route-based code splitting is built-in; avoid extra `'use client'` where not needed

## Styling

- **Tailwind**: layout, spacing, typography, responsive design
- **Stylus modules**: component-specific styles, variables, mixins
- Keep specificity low; avoid deep nesting in Stylus
- BEM-like class naming inside Stylus modules

## State and Data

- Zustand for shared global state
- nuqs for URL search parameter state
- Lift state up for shared component state
- Context only when prop drilling is excessive

## Performance

- Minimize `'use client'`, `useEffect`, `useState`
- Optimize images: WebP where possible, explicit dimensions, lazy loading
- Prefer RSC for data fetching
- Wrap client components in `Suspense` with fallbacks

## Accessibility

- Semantic HTML
- Appropriate ARIA attributes
- Keyboard navigation support

## Error Handling

- Model errors as return values in Server Actions
- Error boundaries for runtime errors
- Early returns and guard clauses in functions
