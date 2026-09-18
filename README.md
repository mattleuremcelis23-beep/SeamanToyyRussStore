# Seaman Toy Store

Seaman Toy Store is a responsive storefront website for a modern toy shop. The project is built with plain HTML, CSS, and vanilla JavaScript, and it includes product browsing, category browsing, cart interactions, and contact form handling.

## Tech stack

- HTML5
- CSS3
- Vanilla JavaScript
- No framework required for the current version

## Project structure

- `index.html` — home page
- `products.html` — product listing page
- `categories.html` — category overview page
- `about.html` — brand story page
- `contact.html` — contact and FAQ page
- `cart.html` — cart and checkout summary page
- `style.css` — styling and responsive layout
- `store.js` — storefront logic, products, and cart behavior
- `script.js` — additional legacy storefront logic that can be reviewed and pruned later

## Local setup

1. Clone or download the project.
2. Open the folder in a browser, or run a local web server:

   ```bash
   cd WEBSITE
   python -m http.server 8000
   ```

3. Open `http://localhost:8000` in your browser.

## Production build

This is a static website, so there is no traditional build step. To prepare a production version:

1. Review and update branding copy in the HTML files.
2. Replace placeholder social links and contact information as needed.
3. Optimize any images or remove unused assets.
4. Upload the project files to your hosting service.

## Deployment

Common deployment options:

- GitHub Pages
- Netlify
- Vercel
- Any static hosting provider

Suggested domain placeholder:

- `https://seamantoystore.com`

> Update the domain in your production settings once you have the final business domain.

## GitHub preparation

This project is ready to be pushed to a repository named:

- `seaman-toy-store`

Suggested description:

- `Modern responsive e-commerce toy store website built with HTML, CSS, and JavaScript.`

### Git commands

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/your-username/seaman-toy-store.git
git push -u origin main
```

## Notes for a client-ready version

Before selling this as a finished website, you should confirm:

- Final product names, prices, and inventory data
- Real domain name and business email
- Final contact details and social media URLs
- Payment provider integration if checkout is going live
- Final product photography and brand assets
- Any legal or compliance requirements for your region

## Important implementation notes

- This project is intentionally built without a framework to preserve the current setup.
- Checkout is currently a placeholder and should be connected to a real payment provider before launch.
- No sensitive credentials or private information are included in the source files.
- The project uses a placeholder `.env.example` file for future configuration values if needed.

## License

This project is for demonstration and portfolio use unless otherwise specified by the owner.
