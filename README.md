# Prismos Assignement
This is my implementation of the Prismos assignement. The development was done in typescript using NextJs and it is composed of the pages:
- Politicians: /politicians The user have a list of all the politicians available for search.
- Politician page: /politicians/[id] The user can navigate to one specific politician and see their career timeline

## Project structure
To develop this project, I let the pages responsible to fetch data and rendering on the server side. To display the information and iteract with the user, I created some components that render on the user side.

The components receives data from server using the props parameters and when it is required to send data to the server, I am using the URL query params.

### Politicians page: /politicians
The politicians page display the search component and a summary of the politicians available. This summary is composed of the name, transliterated name, birthday, contact info and the last role this politician served. If no contact is provided or no role was served, there is an information informing the user.

### Politician detail page: /politicians/[id]
On the politician detail page the user can see the specigics of the politician. Here all the information available and the career timeline is displayed. The career timeline is sorted by the term end date. This way, the most current role is presented first in case of 2 concurrent roles.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
