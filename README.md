# NitiSeva

A modern website for **NitiSeva Foundation**, an Indian NGO running community kitchens, learning centres, shelters and relief programmes across northern India.

Built with Next.js 16 (App Router, Cache Components), React 19, TypeScript and Tailwind CSS v4. Donations are processed by **Cashfree**.

## What is in here

- Editorial, photo-led marketing site: home, about, programmes, get involved and contact.
- Four programme detail pages: Annapurna (food), Vidya (learning), Aashray (shelter) and Sahayata (relief).
- One-time donation flow with Cashfree Checkout, server-side order creation, payment verification and a signed webhook handler.
- Legal pages: privacy, terms and refund policy.
- `sitemap.xml`, `robots.txt`, custom 404, Open Graph metadata and a local SVG favicon.
- Self-hosted Switzer and Tiro Devanagari Hindi fonts. No external font or analytics requests.

## Getting started

```bash
bun install
cp .env.example .env.local
# fill in the Cashfree values
bun dev
```

The app runs at <http://localhost:3000> unless that port is taken.

### Scripts

| Command | Purpose |
| --- | --- |
| `bun dev` | Start the development server |
| `bun run build` | Production build and type check |
| `bun start` | Serve the production build |
| `bun run lint` | Run ESLint |

## Environment variables

Copy `.env.example` to `.env.local`. Never commit `.env.local`.

| Variable | Required | Notes |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Yes in production | Public origin, no trailing slash. Used for metadata, sitemap, Cashfree return URL and webhook URL. |
| `CASHFREE_CLIENT_ID` | Yes | Cashfree API key (server only). |
| `CASHFREE_CLIENT_SECRET` | Yes | Cashfree secret key (server only). |
| `CASHFREE_ENV` | No | `sandbox` (default) or `production`. Controls the server API base URL. |
| `NEXT_PUBLIC_CASHFREE_ENV` | No | Must match `CASHFREE_ENV`; tells the browser which checkout environment to load. |
| `CASHFREE_WEBHOOK_SECRET` | Recommended | Used to verify webhook signatures. Falls back to `CASHFREE_CLIENT_SECRET`. |

Without Cashfree credentials the donation API returns `503` with a clear message asking donors to write to `give@nitiseva.org`. The rest of the site still works.

## Cashfree setup

1. Create a Cashfree account and open **Developers → API keys**.
2. Copy the sandbox (or production) Client ID and Secret into `.env.local`.
3. Set `CASHFREE_ENV` and `NEXT_PUBLIC_CASHFREE_ENV` to the same value.
4. In **Developers → Webhooks**, register:

   ```text
   {NEXT_PUBLIC_SITE_URL}/api/cashfree/webhook
   ```

   Subscribe to `PAYMENT_SUCCESS_WEBHOOK` and `PAYMENT_FAILED_WEBHOOK`, then copy the webhook secret into `CASHFREE_WEBHOOK_SECRET`.

5. Test with Cashfree sandbox credentials. A live donation is only created when the server credentials and environment are configured.

The server creates orders by calling Cashfree's `/pg/orders` API directly, so no server SDK is required. Webhook signatures are verified as `base64(HMAC-SHA256(timestamp + rawBody, secret))`.

## Project structure

```text
src/
├── app/
│   ├── about/                 About the organisation
│   ├── api/cashfree/          Order, verify and webhook routes
│   ├── contact/               Contact desks and mailto form
│   ├── donate/                Donation page and payment return flow
│   ├── get-involved/          Volunteering and CSR
│   ├── legal/                 Privacy, terms, refund
│   ├── programs/              Programme index and [slug] detail pages
│   ├── layout.tsx             Fonts, metadata, header and footer
│   ├── page.tsx               Homepage
│   ├── robots.ts              robots.txt
│   └── sitemap.ts             sitemap.xml
├── components/
│   ├── donate/                Donation form and payment status
│   ├── home/                  Homepage sections
│   ├── site/                  Header, footer, page furniture
│   └── ui/                    Magic UI and shadcn components
└── lib/
    ├── cashfree.ts            Cashfree API wrapper
    └── content.ts             Programmes, team, FAQs and site details
```

## Design notes

The visual direction is an editorial "photographs at uneven sizes" system: khadi-paper ground, indigo ink, marigold and neem accents, square corners, no gradients, no glass, no shadows and restrained motion. Typography is Switzer for text and Tiro Devanagari Hindi for Indian-language accents.

Photography in `public/images/` is used for demonstration. Replace it with owned or licensed NitiSeva photography before a public launch. Programme statistics, quotes and team details in `src/lib/content.ts` are illustrative and should be reviewed by the organisation before publishing.

## Deployment

The app is ready for Vercel or any Node.js host.

1. Import the repository.
2. Add the environment variables above.
3. Set `NEXT_PUBLIC_SITE_URL` to the production domain.
4. Register the production webhook URL with Cashfree and switch both Cashfree environment variables to `production`.

## License

The code is provided for the NitiSeva project. Photography and brand assets remain the property of their respective owners.
