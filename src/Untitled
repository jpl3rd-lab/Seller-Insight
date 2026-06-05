import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  Calculator,
  BarChart3,
  CalendarDays,
  CheckCircle2,
  Menu,
  X,
  ShieldCheck,
  DollarSign,
  ClipboardList,
  Star,
  TrendingUp,
  Search,
  MapPin,
  Sparkles,
  Loader2,
  LockKeyhole,
} from "lucide-react";

const TITLE_ESCROW_FEE = 2500;

const BROKERAGE_NAME = "eXp Realty";
const ADVISOR_NAME = "Joe Leslie";
const ADVISOR_TITLE = "Managing Broker";
const DMCA_EMAIL = "copyright@seller-insight.com";
const MLS_DATA_TIMESTAMP = "[MLS GRID timestamp]";

const IDX_DISCLOSURE = `Listings courtesy of Northwest MLS as distributed by MLS GRID. Based on information submitted to the MLS GRID as of ${MLS_DATA_TIMESTAMP}. All data is obtained from various sources and may not have been verified by broker or MLS GRID. Supplied Open House Information is subject to change without notice. All information should be independently reviewed and verified for accuracy. Properties may or may not be listed by the office/agent presenting the information.`;

const HEADSHOT_SRC = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCABgAGADASIAAhEBAxEB/8QAHAAAAwADAQEBAAAAAAAAAAAABAUGAgMHAQAI/8QANhAAAgEDAwMCBAMHBAMAAAAAAQIDAAQRBRIhBjFBE1EiMmFxFIGRByNCcqGx0RUWM0NSweH/xAAaAQADAQEBAQAAAAAAAAAAAAACAwQFAAYB/8QAKBEAAgICAgEDAgcAAAAAAAAAAQIAEQMhBBIxEyJBUfEUFTJSYXGB/9oADAMBAAIRAxEAPwBjadANqVvFJfStbBeBGoycfWveoLTT+kLFRpqh7uX4djnJP1q8urZ7i3MQdomYj40PI5qd6m6XsW02a8IZJ4UL+ruyTj3zXnayH9YJA8/b7wXQATm+nXNxFeR3TYDRtuOaZa91Xc63cRWxIjiTn4R59zU7JiaQ7ZTk96OsLB75jHGMDsz1oLgDt2MWi99Q/T9ci0W7M0C/iWC4+MED70dN+0LVpmwgjg/kTP8AfNZ23S8KR4UZb3JoodLg/IoxjGaevFxXdXKlxFRqLh1bqkjCWe6yV7HAXH5U/wBM66wVW9jV1/8ANO/6UK3RpkUZIBFYzdIgRbVOGHZqN+JibZUTuhHiXdlq8V7EJbZ1kjPt3H3rZeJDeQkFiki8qw7g/wDuucaHqd30xqbW1zGHRxnb4cfT610e1ntbuCO4jcGKQZUnj8qys+HlYvYHDKf3fH+zvadMJlHMdqg8MByRQ0mnwvq0eoqg9YLsbA+YUa5jK/u+ft2rVK62q+pIw21AfVT2FuwFbHiEQp3CyQQGz2NJ+qra61HRJrSx275sK7E9l84pmEZsleBS14tTV2WO5iYZJAeLt+laGXlP12tdvn61FsoqcgvtKaw1BrBcGVcB8e58VV6ZYraQLEg58t7ml8ySv1dfNdbTIJedo47AcVSwR45x3rQU1jUGN46AC4VaQ5wcUxhiwaDt8jimKqQuRVeM6jmm4qNvatbxqE8ZrJTnHtX0gHHmm9ouT2v6QmoWodBiaE71Yf1pTpt4xlFkxOFbIXPAPY1WMwUvnsRUbfPDHq8kgYopTJK+/AqTlgPhaT51BG5dfjre3thukHwj9aFW6ki9Se+hZIl+QHk/pUvp3U+nadBsk33EpPy92ry/69W4b0VtSqNxlm/vXmfwztRMHuKl+lytun75gq+5olJkk+VgaC9Hfj1QpI7jxW6NFVsrxVHC5XJSsZA6jW/NRzKDuc91e3EXW92pPEjq+fuo/wAUfNeR27ru8+KF1aGV9Z/FSSMXSYxsG8gdiPpzWd7ZyXEIaIgMRjd7Vr32axGqCoqYXHVFtavtkU/lTbTNaGoELAvBGSfapKfRC5QyyyMR3RRgH/FNtBsjpsi4ZsHuD2qjdAiEpPgxtq+uro2PXUnIyPrSy264W45Nu6KPJ7Ub1LpQ1eOIkNvjXIANT9p0+plbdFcRv2yJOKZTAwWuVNrqkeok7V2tjkGlOlW0f+6pInwUUPgMOMEf/aYaXoaaau8SN24BrXDAkmqXMVvP6d0zK7ED4tnGQD44pHIXtjZX1YMDr21JC7a10zq65eFFlgDEBR2GRzj86UapKlxeSNEu0Mc49qvtT0TSodPl3x+nqLPle+SSfH0pXL0xcJprloAG77sisXHyMK0b3VeZCwCmVJ6m06G4tnikaX1Fw/PYeO/mnLatYvG7wXUJKruI3DgfWuNMLi0uWtrtTG6+D7UHfsc5VztPBAPeqceGsZVT5n0ZG7VLS3vT1A0F+/8ACzq20cKwPGfuMU8tDuG2obo7Ufw981sH2JP8J3dgfBq0AeGQhWBKnBIPBqkOFIA+JoYsgcBT5EOmFtAm6VlH3oZZoDcKWdEA5AJ5P5UHKc3PqTMvDbY1Y+fehZoGlkMgMZftu4zVfYtsRti9Sjm1SweVY0uIxKy5CsQC32rRHeQ+vtkBV+/xeaS2lgkDrLK8JccguVyK33d3FNNHblhN6g/6znb9c+KcWNWYF1H73KSR4XxXthpkb6gl6AFZVKtg/N96S2McsSKJnJYZBz554NVumwhbINklpOefFJYlr1BZuviINU0mbUtfh9RiltEmQR5OabXluxtJFRd7FeB70TqcEstqFt3EcwIKsRkVus0mFsv4rYZT329q87+Xepm9I/G7/vcmBq/5k1e9OWWttcpM2LyM7dw7gd14qPl6Hv5bK4njKbrZmHpnu+3vivNQ6+EfUz6jp8beiYhGVcY3/WtuiftLCWuorqEJMssjPFs7cjtVuPE+MUIshbuD9GXGjKZ11XasrkBC39vvVQ1m+nMFdXET5MZc5JFc0tAkkqMj7ZwwbPsc10NeoL3XlS1/BITApeSZWPGB7eM0wIquXJnYnCvub5UjnQLIitzj4hmgLjR7WAl1LhPbceKIWYbCDwRRETo67XxjyDV2M2NS1XasrkBC39vvVQ1m+nMFdXET5MZc5JFc0tAkkqMj7ZwwbPsc10NeoL3XlS1/BITApeSZWPGB7eM0wIquXJnYnCvub5UjnQLIitzj4hmgLjR7WAl1LhPbceKIWYbCDwRRETo67XxjyDV2M2NS1X6mLLW302WXYLVpCfL5P96cPaw2qoLeJIwDn4R2oiE2duG2KqkeR5oXUb+JI9zMCfYVRutz5kyXMGlYzhRyWPAppe9V6b09aency7pVHESfMTSbSSZblZ5FbYpyFAyTROvW+g9R9Kz6is8ZSNC0c44ZGH8JHfOeMGs7OMwyIyaXdxWQ6qbIv2h6Rc6abgOy3HYWxHxk+AP81UWt4s0UfqlY5igZoy3I9/yr89aa6w3lvM4yqSKzfYHmr/re9t7ya0ltJQcIQSp96AZGxZPrcmOSpz6VFbisbe2MkqxxqWdjgKPNLRqDgHcOTRWm309vciaM/EvaqmUganFTL3RegL2cie4mW3BHy9zV7otnYaRYtarOjMP+RiRlieK4+3UWuX0mDdvGnbanAp90cG1Dqq0i3NIturzysTnJAwP6mpMWHK+QdzBsLseZReh6gIFLL43MAwpOKeDBllUd0dlI+xoa9hLgfDkmrOhQ1NEqGFiTguLyUhVck/SmFrYyOwedix+vimNvZKgHFM7O1DEMw+Adgf4j/inIjMagt0xr2abtMtPRKu3B8D2rkWoTbbvUbe2kZbSadjsU/CcMcGuodU6p/pWhXEqtiaQelH/MeP6DJrkPYVb0Xr1Imd2LsWMxXfCmDyPBrYlxKMrk48ZrXJJtQnvitiSxyJjsagy8dgbXYhGf/9k=";
const EXP_LOGO_SRC = "data:image/png;base64,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";

const REET_TIERS = [
  { label: "Equal to or less than $525,000", shortLabel: "Up to $525k", floor: 0, ceiling: 525000, rate: 0.011 },
  { label: "$525,000.01 – $1,525,000", shortLabel: "$525k–$1.525M", floor: 525000, ceiling: 1525000, rate: 0.0128 },
  { label: "$1,525,000.01 – $3,025,000", shortLabel: "$1.525M–$3.025M", floor: 1525000, ceiling: 3025000, rate: 0.0275 },
  { label: "Above $3,025,000.01", shortLabel: "Above $3.025M", floor: 3025000, ceiling: Infinity, rate: 0.03 },
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(Number(value || 0));

const parseNumber = (value) => {
  const numeric = Number(String(value ?? "").replace(/[^0-9.]/g, ""));
  return Number.isFinite(numeric) ? numeric : 0;
};

function getWashingtonREETBreakdown(salePrice) {
  const price = Math.max(0, Number(salePrice) || 0);

  let applicableRate = 0.011;

  if (price > 3025000) {
    applicableRate = 0.03;
  } else if (price > 1525000) {
    applicableRate = 0.0275;
  } else if (price > 525000) {
    applicableRate = 0.0128;
  }

  return REET_TIERS.map((tier) => ({
    ...tier,
    portion: tier.rate === applicableRate ? price : 0,
    tax: tier.rate === applicableRate ? price * applicableRate : 0,
    active: tier.rate === applicableRate,
  }));
}

function calculateWashingtonREET(salePrice) {
  const price = Math.max(0, Number(salePrice) || 0);

  if (price <= 525000) {
    return price * 0.011;
  }

  if (price <= 1525000) {
    return price * 0.0128;
  }

  if (price <= 3025000) {
    return price * 0.0275;
  }

  return price * 0.03;
}

// Lightweight sanity tests for the WA REET helper. These make regressions obvious during development.
const REET_TEST_CASES = [
  { salePrice: 525000, expected: 5775 },
  { salePrice: 750000, expected: 9600 },
  { salePrice: 1525000, expected: 19520 },
  { salePrice: 3025000, expected: 83187.5 },
  { salePrice: 3500000, expected: 105000 },
];

const addressSuggestions = [
  {
    address: "12010 59th Ave S, Seattle, WA 98178",
    city: "Seattle",
    zip: "98178",
    value: 745000,
    mortgage: 410000,
    beds: 3,
    baths: 2,
    sqft: 1810,
  },
  {
    address: "7420 SE 27th St, Mercer Island, WA 98040",
    city: "Mercer Island",
    zip: "98040",
    value: 1245000,
    mortgage: 400000,
    beds: 2,
    baths: 2,
    sqft: 1420,
  },
  {
    address: "15814 NE 85th St, Redmond, WA 98052",
    city: "Redmond",
    zip: "98052",
    value: 1065000,
    mortgage: 520000,
    beds: 4,
    baths: 2.5,
    sqft: 2210,
  },
  {
    address: "913 6th Ave W, Kirkland, WA 98033",
    city: "Kirkland",
    zip: "98033",
    value: 1385000,
    mortgage: 625000,
    beds: 4,
    baths: 3,
    sqft: 2460,
  },
];

const localTaxByZip = {
  "98178": { label: "King County / Seattle-area estimate", rate: 0.005 },
  "98040": { label: "King County / Mercer Island estimate", rate: 0.005 },
  "98052": { label: "King County / Redmond estimate", rate: 0.005 },
  "98033": { label: "King County / Kirkland estimate", rate: 0.005 },
  default: { label: "Estimated local transfer tax", rate: 0.005 },
};

const marketByZip = {
  "98178": { sold: 21, dom: 17, listSale: "97.8%", active: 34, median: 715000, demand: "Strong" },
  "98040": { sold: 14, dom: 11, listSale: "99.1%", active: 19, median: 1525000, demand: "High" },
  "98052": { sold: 28, dom: 9, listSale: "100.4%", active: 42, median: 1110000, demand: "High" },
  "98033": { sold: 24, dom: 10, listSale: "100.1%", active: 31, median: 1325000, demand: "High" },
};

const nearbySalesBase = [
  { address: "Nearby Sale 1", price: 1210000, detail: "3 bed • 2 bath • Sold in 8 days", delta: "+2.1% over list" },
  { address: "Nearby Sale 2", price: 1325000, detail: "4 bed • 3 bath • Sold in 12 days", delta: "+1.4% over list" },
  { address: "Nearby Sale 3", price: 1175000, detail: "3 bed • 2.5 bath • Sold in 6 days", delta: "+3.0% over list" },
];

const sellerPages = {
  "/seller-closing-costs-washington": {
    eyebrow: "Washington seller costs",
    title: "Washington Seller Closing Costs",
    description: "Understand the main costs that affect your bottom line before you list, accept an offer, or plan your next move.",
    sections: [
      {
        heading: "What sellers usually pay at closing",
        text: "Selling a home is not just about the final sale price. Your actual walk-away number depends on mortgage payoff, commission, excise taxes, title and escrow fees, local taxes, negotiated credits, and any agreed seller-paid costs.",
        bullets: [
          "Real estate commission or listing compensation",
          "Mortgage payoff and any remaining loan charges",
          "Washington REET and possible local transfer tax",
          "Title, escrow, recording, and closing fees",
          "Seller credits, repairs, or concessions negotiated in the offer",
        ],
      },
      {
        heading: "Why seller net proceeds matter more than list price",
        text: "A higher list price does not automatically mean a better result. If a home sits too long, requires price reductions, or attracts offers with large concessions, the final net can be lower than a properly positioned listing that creates stronger buyer urgency.",
        bullets: [
          "Net proceeds help you plan your next purchase budget",
          "Knowing costs early reduces surprises during escrow",
          "Offer terms can matter as much as the offer price",
        ],
      },
      {
        heading: "Washington REET and local taxes",
        text: "Washington sellers should pay close attention to transfer taxes because they can materially affect net proceeds. REET is based on the sale price bracket, and some areas may include additional local transfer taxes. The calculator on this site estimates both so sellers can preview the impact before listing.",
      },
      {
        heading: "How to use this information before listing",
        text: "Before choosing a pricing strategy, run a preliminary net sheet using a realistic sale price, mortgage payoff, commission, and tax estimate. Then compare different scenarios to understand how price, concessions, and timing affect your final walk-away amount.",
      },
    ],
  },
  "/washington-reet-tax-calculator": {
    eyebrow: "REET tax guide",
    title: "Washington REET Tax Calculator",
    description: "Estimate Washington real estate excise tax and understand how sale price brackets can affect seller proceeds.",
    sections: [
      {
        heading: "What is REET?",
        text: "REET stands for Real Estate Excise Tax. In Washington, it is a transfer tax typically paid when real property is sold. For sellers, it is one of the most important closing cost items to understand because it can change meaningfully based on the sale price.",
      },
      {
        heading: "How the bracket system works in this calculator",
        text: "This calculator applies the tax rate based on the sale price bracket selected by the home’s estimated sale price. The intent is to give sellers a fast planning estimate that can be refined before listing or accepting an offer.",
        bullets: [
          "Homes at or below $525,000 use the lowest bracket shown",
          "Homes above $525,000 and up to $1,525,000 use the next bracket",
          "Higher-value properties move into higher brackets",
          "Local transfer tax estimates may also be added depending on location",
        ],
      },
      {
        heading: "Why REET should be shown clearly",
        text: "Many sellers focus heavily on commission but overlook transfer taxes. Showing REET clearly helps sellers understand the true cost of selling and makes the net proceeds estimate feel more transparent and trustworthy.",
      },
      {
        heading: "When to verify the final amount",
        text: "The final REET amount should always be verified before closing with current state/local rules, escrow, title, and transaction-specific details. This page is designed as a planning tool, not a final settlement statement.",
      },
    ],
  },
  "/how-to-price-your-home-seattle": {
    eyebrow: "Pricing strategy",
    title: "How To Price Your Home In Seattle",
    description: "Learn how pricing affects buyer demand, days on market, negotiation leverage, and your final net proceeds.",
    sections: [
      {
        heading: "Pricing is positioning",
        text: "Your list price tells the market where your home fits compared to competing homes. A strong pricing strategy considers recent sales, active competition, buyer demand, property condition, interest rates, and the urgency level you want to create.",
      },
      {
        heading: "The risk of overpricing",
        text: "Overpricing can reduce early activity, weaken urgency, and cause buyers to wonder what is wrong with the property. In many cases, the first two weeks are the most important window for attention, showings, and strong offers.",
        bullets: [
          "Fewer showings and lower online engagement",
          "Longer days on market",
          "More pressure to reduce price later",
          "Buyers may negotiate harder after a price drop",
        ],
      },
      {
        heading: "How active listings affect your strategy",
        text: "Buyers compare homes side-by-side. If similar homes are priced more aggressively, updated better, or located more favorably, your price needs to account for that competition. Pricing should reflect what buyers can choose today, not just what similar homes sold for months ago.",
      },
      {
        heading: "Price versus net proceeds",
        text: "The highest asking price is not always the best strategy. A more accurate price can create stronger demand, better terms, fewer concessions, and a cleaner closing. The goal is not just to list high — it is to maximize your final net result.",
      },
    ],
  },
  "/what-to-fix-before-selling": {
    eyebrow: "Seller prep",
    title: "What To Fix Before Selling",
    description: "Prioritize updates that improve buyer perception, photography, and marketability without overspending before you list.",
    sections: [
      {
        heading: "Focus on buyer perception first",
        text: "The best pre-listing improvements usually make the home feel cleaner, brighter, better maintained, and easier for buyers to imagine living in. You do not need to remodel everything to create a strong first impression.",
        bullets: [
          "Fresh paint in neutral tones",
          "Improved lighting and clean fixtures",
          "Landscaping and curb appeal cleanup",
          "Decluttering, deep cleaning, and staging preparation",
          "Minor flooring, trim, wall, and hardware touchups",
        ],
      },
      {
        heading: "Repairs buyers notice during showings",
        text: "Small visible defects can cause buyers to assume larger maintenance issues exist. Addressing obvious items before listing can reduce buyer objections and help the home show better in photos and tours.",
      },
      {
        heading: "What not to overdo",
        text: "Large remodels shortly before selling can be risky unless the numbers clearly support the investment. Kitchens, bathrooms, and major systems may improve value, but they can also cost more than sellers recover if done without a clear pricing plan.",
        bullets: [
          "Avoid highly personal design choices",
          "Be cautious with expensive remodels close to listing",
          "Do not spend heavily without comparing likely resale impact",
        ],
      },
      {
        heading: "Build a prep plan before spending money",
        text: "The smartest approach is to review value, competition, timeline, and likely buyer expectations first. Then decide which improvements support price, speed, and confidence — and which ones are not worth doing.",
      },
    ],
  },
  "/seller-net-sheet-calculator": {
    eyebrow: "Seller proceeds",
    title: "Seller Net Sheet Calculator",
    description: "Estimate your proceeds after mortgage payoff, commission, Washington REET, local taxes, and closing costs.",
    sections: [
      {
        heading: "What a seller net sheet shows",
        text: "A seller net sheet estimates how much money you may receive after the major costs of selling are deducted from the sale price. It is one of the most useful planning tools for homeowners considering a sale.",
      },
      {
        heading: "The core numbers to include",
        text: "The most important inputs are estimated sale price, mortgage payoff, real estate commission, transfer taxes, and title/escrow costs. Once those are entered, you can quickly test different sale price scenarios.",
        bullets: [
          "Estimated sale price",
          "Mortgage payoff",
          "Commission rate",
          "WA REET and local transfer tax",
          "Title and escrow estimate",
        ],
      },
      {
        heading: "How sellers can use the estimate",
        text: "A net sheet can help you decide whether selling makes sense now, how much cash may be available for your next home, and what price range supports your financial goals. It also helps compare offers beyond the headline purchase price.",
      },
      {
        heading: "Estimate now, verify later",
        text: "The calculator gives a useful planning estimate, but final numbers should be verified with title, escrow, loan payoff, and current transaction details before making a final decision.",
      },
    ],
  },
  "/best-time-to-sell-seattle": {
    eyebrow: "Timing the market",
    title: "Best Time To Sell In Seattle",
    description: "Review seasonality, buyer demand, inventory, and preparation timing before deciding when to list.",
    sections: [
      {
        heading: "Timing depends on more than the calendar",
        text: "Spring and early summer often bring stronger buyer activity, but the best time to sell depends on your property type, local inventory, interest rates, pricing strategy, and your personal timeline.",
      },
      {
        heading: "Buyer demand and inventory",
        text: "A strong seller market usually has active buyers, limited competing inventory, and homes moving quickly. If inventory rises or buyers become more cautious, pricing and presentation become even more important.",
        bullets: [
          "Recent comparable sales",
          "Active listings competing with your home",
          "Average days on market",
          "Price reductions in your area",
          "Buyer demand by price point",
        ],
      },
      {
        heading: "Preparation timeline",
        text: "Many sellers benefit from planning 30 to 60 days before listing. That gives time to review pricing, complete high-impact prep, schedule photography, organize documents, and build a stronger launch strategy.",
      },
      {
        heading: "Sell first or buy first?",
        text: "Timing also depends on your next move. Homeowners buying another property may need to coordinate loan approval, sale proceeds, occupancy, rent-back terms, or temporary housing. A seller strategy should account for both the sale and the next purchase.",
      },
    ],
  },
};

const sellerResources = [
  {
    title: "Washington Seller Closing Costs",
    href: "/seller-closing-costs-washington",
    description: "Understand commission, REET tax, escrow fees, and estimated seller expenses.",
    cta: "Explore Seller Costs",
  },
  {
    title: "Washington REET Tax Calculator",
    href: "/washington-reet-tax-calculator",
    description: "Learn how Washington excise tax works and estimate transfer taxes by price tier.",
    cta: "View REET Guide",
  },
  {
    title: "How To Price Your Home",
    href: "/how-to-price-your-home-seattle",
    description: "Review pricing strategy, market positioning, and buyer competition before listing.",
    cta: "See Pricing Strategy",
  },
  {
    title: "What To Fix Before Selling",
    href: "/what-to-fix-before-selling",
    description: "Discover which repairs and updates may improve value — and what to skip.",
    cta: "View Prep Guide",
  },
  {
    title: "Seller Net Sheet Calculator",
    href: "/seller-net-sheet-calculator",
    description: "Estimate your proceeds using mortgage payoff, commission, taxes, and closing fees.",
    cta: "Open Calculator",
  },
  {
    title: "Best Time To Sell In Seattle",
    href: "/best-time-to-sell-seattle",
    description: "Analyze seasonality, buyer demand, inventory, and timing trends in your area.",
    cta: "See Timing Trends",
  },
];

const curatedReviews = [
  {
    source: "Zillow",
    quote:
      "We first worked with Joe over 10 years ago and recently came back to him again after a frustrating experience elsewhere. He listened carefully, understood our goals, and made the process feel strategic and comfortable from start to finish.",
    name: "Hyung Lim",
    detail: "Bought a home in Renton, WA",
  },
  {
    source: "Zillow",
    quote:
      "Joe helped us buy our first home, then later helped us sell it and purchase our next one. Fantastic experience throughout the entire process and someone we’d absolutely work with again.",
    name: "cmccoy142",
    detail: "Bought & sold in Tacoma, WA",
  },
  {
    source: "Zillow",
    quote:
      "Our sale involved a complex 1031 exchange, and Joe handled everything with excellent communication and strong market knowledge throughout the transaction.",
    name: "klf300",
    detail: "Sold in Seattle, WA",
  },
  {
    source: "Zillow",
    quote:
      "Joe made selling our rental property feel easy and helped us maximize value. We were so happy with the process that we immediately planned to list another property with him.",
    name: "Kaylee",
    detail: "Sold in Federal Way, WA",
  },
  {
    source: "RealSatisfied",
    quote:
      "Joe is a true professional. He stayed calm and gave me great advice throughout the sale of our house. I would recommend him to anyone trying to maximize the value of their sale.",
    name: "Dave Biehn",
    detail: "Seller Client",
  },
  {
    source: "RealSatisfied",
    quote:
      "Joe was extremely patient with me and explained everything I needed to know on my first home purchase. He was honest, up-front, and made me feel like I was in good hands.",
    name: "Austin Hirsch",
    detail: "First-Time Buyer",
  },
  {
    source: "RealSatisfied",
    quote:
      "Joe is thoughtful and professional, making the experience of buying and selling real estate as stress free as possible. He knows the market well, listens to his clients, and goes above and beyond.",
    name: "Ginnie N",
    detail: "Buyer & Seller Client",
  },
];


export default function SellerEducationMobileFirstHomepage() {
  const [activePagePath, setActivePagePath] = useState(null);
  const activeSellerPage = activePagePath ? sellerPages[activePagePath] : null;
  const [menuOpen, setMenuOpen] = useState(false);
  const [addressQuery, setAddressQuery] = useState("");
  const [selectedHome, setSelectedHome] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showReetBreakdown, setShowReetBreakdown] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [deliveryStatus, setDeliveryStatus] = useState("idle");
  const [deliveryMessage, setDeliveryMessage] = useState("");
  const [reviewSource, setReviewSource] = useState("Zillow");
  const [form, setForm] = useState({ name: "", phone: "", email: "", timeline: "" });
  const [calc, setCalc] = useState({
    value: 945000,
    mortgage: 420000,
    commissionRate: 5.0,
    titleEscrowFee: TITLE_ESCROW_FEE,
  });

  const displayedReviews = useMemo(
    () => curatedReviews.filter((review) => review.source === reviewSource),
    [reviewSource]
  );

  const filteredSuggestions = useMemo(() => {
    if (!addressQuery.trim()) return addressSuggestions;
    return addressSuggestions.filter((item) =>
      item.address.toLowerCase().includes(addressQuery.toLowerCase())
    );
  }, [addressQuery]);

  const market = selectedHome ? marketByZip[selectedHome.zip] : marketByZip["98052"];

  const reetBreakdown = useMemo(() => getWashingtonREETBreakdown(calc.value), [calc.value]);
  const localTax = selectedHome ? localTaxByZip[selectedHome.zip] || localTaxByZip.default : localTaxByZip.default;

  const buyerPaymentEstimate = useMemo(() => {
    const downPaymentPercent = 20;
    const interestRate = 6.75;
    const annualTaxes = calc.value * 0.01;
    const annualInsurance = 1800;

    const downPayment = calc.value * (downPaymentPercent / 100);
    const loanAmount = calc.value - downPayment;

    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = 30 * 12;

    const principalAndInterest =
      loanAmount > 0
        ? (loanAmount * monthlyRate) /
          (1 - Math.pow(1 + monthlyRate, -numberOfPayments))
        : 0;

    const monthlyTaxes = annualTaxes / 12;
    const monthlyInsurance = annualInsurance / 12;

    return {
      downPaymentPercent,
      interestRate,
      loanAmount,
      principalAndInterest,
      monthlyTaxes,
      monthlyInsurance,
      total:
        principalAndInterest + monthlyTaxes + monthlyInsurance,
    };
  }, [calc.value]);

  const totals = useMemo(() => {
    const commission = calc.value * (calc.commissionRate / 100);
    const stateReet = calculateWashingtonREET(calc.value);
    const localTransferTax = calc.value * (localTax.rate || 0);
    const excise = stateReet + localTransferTax;
    const effectiveExciseRate = calc.value > 0 ? (excise / calc.value) * 100 : 0;
    const totalClosingCosts = commission + excise + calc.titleEscrowFee;
    const net = calc.value - calc.mortgage - totalClosingCosts;

    return { commission, stateReet, localTransferTax, excise, effectiveExciseRate, totalClosingCosts, net };
  }, [calc, localTax]);

  const reetTestsPassed = useMemo(() => {
    return REET_TEST_CASES.every(({ salePrice, expected }) =>
      Math.round(calculateWashingtonREET(salePrice)) === Math.round(expected)
    );
  }, []);

  const timingScore = useMemo(() => {
    const base = market.demand === "High" ? 88 : market.demand === "Strong" ? 81 : 74;
    const domBoost = market.dom <= 10 ? 5 : market.dom <= 17 ? 2 : 0;
    return Math.min(96, base + domBoost);
  }, [market]);

  const nearbySales = useMemo(() => {
    const multiplier = calc.value / 1245000;
    return nearbySalesBase.map((sale, index) => ({
      ...sale,
      price: Math.round((sale.price * multiplier + index * 12000) / 1000) * 1000,
    }));
  }, [calc.value]);

  const selectAddress = (home) => {
    setAddressQuery(home.address);
    setIsAnalyzing(true);
    setShowLead(false);
    setSubmitted(false);
    setTimeout(() => {
      setSelectedHome(home);
      setCalc((prev) => ({ ...prev, value: home.value, mortgage: home.mortgage }));
      setIsAnalyzing(false);
      setTimeout(() => document.querySelector("#dashboard")?.scrollIntoView({ behavior: "smooth" }), 50);
    }, 900);
  };

  const analyzeTypedAddress = () => {
    const exact = filteredSuggestions[0] || addressSuggestions[0];
    selectAddress(exact);
  };

  const updateCalc = (field, value) => {
    const numeric = parseNumber(value);
    setCalc((prev) => ({ ...prev, [field]: numeric }));
  };

  const buildSellerReportPayload = () => ({
    contact: {
      name: form.name,
      phone: form.phone,
      email: form.email,
      timeline: form.timeline,
    },
    property: {
      address: selectedHome?.address || addressQuery || "Property Address Not Selected",
      city: selectedHome?.city || "",
      zip: selectedHome?.zip || "",
      beds: selectedHome?.beds || null,
      baths: selectedHome?.baths || null,
      sqft: selectedHome?.sqft || null,
    },
    calculator: {
      estimatedSalePrice: calc.value,
      mortgagePayoff: calc.mortgage,
      commissionRate: calc.commissionRate,
      titleEscrowFee: calc.titleEscrowFee,
    },
    totals,
    taxes: {
      reetBreakdown,
      localTax,
    },
    market: {
      ...market,
      timingScore,
      nearbySales,
    },
    generatedAt: new Date().toISOString(),
  });

  const submitLead = async (e) => {
    e.preventDefault();
    setSubmitted(true);
    setDeliveryStatus("sending");
    setDeliveryMessage("Generating seller report and preparing email...");

    try {
      const response = await fetch("/api/seller-report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildSellerReportPayload()),
      });

      if (!response.ok) {
        throw new Error("Report endpoint is not connected yet.");
      }

      setDeliveryStatus("sent");
      setDeliveryMessage("Seller report sent successfully.");
    } catch (error) {
      setDeliveryStatus("demo");
      setDeliveryMessage("Demo mode: report preview is ready. Connect /api/seller-report to email the PDF automatically.");
    }
  };

  if (activeSellerPage) {
    return <SellerContentPage page={activeSellerPage} onBack={() => setActivePagePath(null)} onNavigate={setActivePagePath} />;
  }

  return (
    <div className="min-h-screen scroll-smooth bg-white text-slate-950 antialiased">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Home size={22} />
            </div>
            <div className="leading-tight">
              <p className="text-lg font-bold tracking-tight text-slate-950">Seller Insight</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">Seller intelligence platform</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-700 md:flex">
            <a href="#dashboard">Dashboard</a>
            <a href="#net">Net Sheet</a>
            <a href="#resources">Education</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <a href="#top" className="hidden rounded-xl bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-800 md:inline-flex">
            Start With Address
          </a>

          <button className="rounded-xl border border-slate-200 p-2 md:hidden" aria-label="Open menu" onClick={() => setMenuOpen((v) => !v)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-slate-100 bg-white md:hidden">
              <nav className="grid gap-1 px-4 py-4 text-sm font-semibold text-slate-700">
                {[["Start", "#top"], ["Dashboard", "#dashboard"], ["Net Sheet", "#net"], ["Education", "#resources"], ["Reviews", "#reviews"]].map(([label, href]) => (
                  <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-3 py-3 hover:bg-blue-50 hover:text-blue-700">{label}</a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-slate-100">
          <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-blue-50 to-white" />
          <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1.05fr_.95fr] md:items-center md:py-16 lg:gap-12 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="relative z-10">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
                <Sparkles size={15} /> Seller intelligence platform
              </div>
              <h1 className="max-w-2xl text-4xl font-semibold leading-[0.98] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Know your numbers before you sell.
              </h1>
              <p className="mt-5 max-w-xl text-[15px] leading-7 text-slate-600 sm:text-base">
                Understand your home value, estimated net proceeds, buyer demand, and timing before you list.
              </p>

              <div className="mt-6 max-w-xl rounded-[1.7rem] border border-slate-200 bg-white p-3 shadow-lg shadow-blue-100">
                <div className="relative">
                  <div className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3">
                    <Search className="text-slate-400" size={20} />
                    <input value={addressQuery} onChange={(e) => { setAddressQuery(e.target.value); setSelectedHome(null); }} onKeyDown={(e) => e.key === "Enter" && analyzeTypedAddress()} placeholder="Enter your home address" className="min-w-0 flex-1 bg-transparent text-base font-medium outline-none placeholder:text-slate-400" />
                  </div>
                  {addressQuery.length > 0 && !selectedHome && !isAnalyzing && (
                    <div className="absolute left-0 right-0 top-[58px] z-20 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                      {filteredSuggestions.slice(0, 4).map((home) => (
                        <button key={home.address} onClick={() => selectAddress(home)} className="flex w-full items-start gap-3 border-b border-slate-100 px-4 py-3 text-left last:border-0 hover:bg-blue-50">
                          <MapPin className="mt-0.5 text-blue-700" size={18} />
                          <span>
                            <span className="block text-sm font-bold text-slate-950">{home.address}</span>
                            <span className="mt-1 block text-xs text-slate-500">{home.beds} bed • {home.baths} bath • {home.sqft.toLocaleString()} sqft</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <button onClick={analyzeTypedAddress} className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-100 transition hover:bg-blue-800">
                  See My Seller Insights
                </button>
              </div>

              <div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/70 px-4 py-3 shadow-sm">
                <div className="flex items-start gap-2 text-sm text-slate-700">
                  <ShieldCheck size={16} className="mt-0.5 shrink-0 text-blue-700" />
                  <p>
                    Built to help sellers understand proceeds, timing, taxes, and strategy — not just home value.
                  </p>
                </div>

                <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-blue-100 pt-3 text-xs font-semibold text-slate-600">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    Free Preview
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    No Obligation
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    Address-First Experience
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.08 }} className="relative z-10 md:pl-4 lg:pl-8">
              <PreviewCard selectedHome={selectedHome} calc={calc} totals={totals} market={market} timingScore={timingScore} isAnalyzing={isAnalyzing} />
            </motion.div>
          </div>
        </section>

        <AnimatePresence>
          {isAnalyzing && (
            <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="px-4 py-14 text-center">
              <Loader2 className="mx-auto animate-spin text-blue-700" size={36} />
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">Analyzing your local seller market...</h2>
              <p className="mt-2 text-sm text-slate-500">Checking value range, buyer demand, estimated proceeds, and nearby activity.</p>
            </motion.section>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {selectedHome && !isAnalyzing && (
            <motion.section id="dashboard" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Seller insights preview</p>
                  <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Here’s your first look</h2>
                  <p className="mt-2 max-w-2xl text-slate-600">Based on {selectedHome.address}. Start with the quick market preview, then estimate your net proceeds.</p>
                </div>
                <a href="#net" className="rounded-2xl bg-blue-700 px-5 py-4 text-center text-sm font-bold text-white shadow-lg shadow-blue-100">Calculate Net Proceeds</a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                <InsightCard icon={Home} label="Estimated Value" value={formatCurrency(calc.value)} sub={`${formatCurrency(calc.value * 0.96)} – ${formatCurrency(calc.value * 1.04)}`} />
                <InsightCard icon={BarChart3} label="Buyer Demand" value={market.demand} sub={`${market.sold} recent sales in ${selectedHome.zip}`} green />
                <InsightCard icon={CalendarDays} label="Timing Score" value={`${timingScore}/100`} sub={`${market.dom} avg. days on market`} green />
              </div>

              <div className="mt-6 rounded-[2rem] border border-slate-200 bg-slate-50 p-5 sm:p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-950">Next: understand the sales shaping your price</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">Review nearby sales first, then use the net calculator to understand how pricing, taxes, payoff, and selling costs affect your walk-away number.</p>
                  </div>
                  <a href="#recent-sales" className="shrink-0 rounded-2xl bg-blue-700 px-5 py-3.5 text-center text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">View Nearby Sales</a>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>


        <AnimatePresence>
          {selectedHome && !isAnalyzing && (
            <RecentNearbySales nearbySales={nearbySales} selectedHome={selectedHome} />
          )}
        </AnimatePresence>

        <section id="net" className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Seller financial planning</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Seller Net Proceeds Calculator</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">Estimate your proceeds, understand Washington REET, and preview your selling costs in seconds.</p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-[1.15fr_.85fr] lg:items-start">
            <div className="space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight text-slate-950">Sale Details & Expenses</h3>
                    <p className="mt-1 text-sm text-slate-500">Adjust the values below to instantly update your proceeds.</p>
                  </div>
                  <div className="hidden rounded-2xl bg-blue-50 p-3 text-blue-700 sm:block">
                    <Calculator size={22} />
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <SliderInput label="Estimated Sale Price" value={calc.value} min={200000} max={4000000} step={25000} onChange={(v) => updateCalc("value", v)} />
                  <SliderInput label="Mortgage Payoff" value={calc.mortgage} min={0} max={4000000} step={10000} onChange={(v) => updateCalc("mortgage", v)} />
                </div>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-600">Real Estate Commission</p>
                        <p className="mt-1 text-xs text-slate-300">Default set to 5.0%</p>
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-2 text-lg font-bold text-slate-950 shadow-sm">
                        {calc.commissionRate.toFixed(1)}%
                      </div>
                    </div>
                    <input type="range" min={3} max={6} step={0.1} value={calc.commissionRate} onChange={(e) => updateCalc("commissionRate", e.target.value)} className="mt-5 w-full accent-blue-700" />
                    <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-400">
                      <span>3%</span>
                      <span>6%</span>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-slate-700">Washington REET Tax</p>
                        <p className="mt-1 text-xs leading-5 text-slate-500">Auto-calculated using WA’s tax bracket plus estimated local transfer tax.</p>
                        <button onClick={() => setShowReetBreakdown((v) => !v)} className="mt-5 flex w-full items-center justify-between border-t border-blue-100 pt-4 text-sm font-semibold text-blue-700 transition hover:text-blue-900">
                          <span>{showReetBreakdown ? "Hide tax breakdown" : "View tax breakdown"}</span><span className={`transition ${showReetBreakdown ? "rotate-180" : ""}`}>⌄</span>
                        </button>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-slate-950">{formatCurrency(totals.excise)}</p>
                        <p className="mt-1 text-xs font-semibold text-blue-700">Total effective {totals.effectiveExciseRate.toFixed(2)}%</p>
                      </div>
                    </div>
                  </div>
                </div>

                <AnimatePresence>
                  {showReetBreakdown && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
                      <div className="mt-5 rounded-3xl border border-blue-100 bg-blue-50/60 p-5">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 rounded-full bg-blue-700 p-2 text-white">
                            <ShieldCheck size={16} />
                          </div>
                          <div>
                            <p className="font-semibold text-slate-950">Washington REET Tax Breakdown</p>
                            <p className="mt-1 text-sm leading-6 text-slate-600">Shows the Washington REET bracket selected by sale price plus an estimated local tax based on the property location.</p>
                            <p className={`mt-2 text-xs font-semibold ${reetTestsPassed ? "text-emerald-700" : "text-red-600"}`}>REET calculator check: {reetTestsPassed ? "passed" : "review needed"}</p>
                          </div>
                        </div>

                        <div className="mt-5 grid gap-3 sm:grid-cols-3">
                          <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">WA REET</p>
                            <p className="mt-1 text-xl font-bold text-slate-950">{formatCurrency(totals.stateReet)}</p>
                          </div>
                          <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Local Tax</p>
                            <p className="mt-1 text-xl font-bold text-slate-950">{formatCurrency(totals.localTransferTax)}</p>
                          </div>
                          <div className="rounded-2xl bg-white p-4 shadow-sm">
                            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Total Tax</p>
                            <p className="mt-1 text-xl font-bold text-blue-700">{formatCurrency(totals.excise)}</p>
                          </div>
                        </div>

                        <div className="mt-4 rounded-2xl bg-white p-4 text-sm text-slate-600 shadow-sm">
                          <div className="flex items-center justify-between gap-4">
                            <span>{localTax.label}</span>
                            <span className="font-bold text-slate-950">{(localTax.rate * 100).toFixed(2)}%</span>
                          </div>
                        </div>

                        <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                          <div className="grid grid-cols-4 border-b border-slate-100 bg-slate-50 px-4 py-3 text-xs font-bold uppercase tracking-[0.08em] text-slate-500">
                            <div>Tier</div>
                            <div>Portion</div>
                            <div>Rate</div>
                            <div className="text-right">Tax</div>
                          </div>
                          {reetBreakdown.map((row) => (
                            <div key={row.shortLabel} className={`grid grid-cols-4 border-b border-slate-100 px-4 py-3 text-sm last:border-0 ${row.active ? "bg-blue-50 text-slate-950" : "text-slate-500"}`}>
                              <div className="font-medium">{row.shortLabel}</div>
                              <div>{formatCurrency(row.portion)}</div>
                              <div>{(row.rate * 100).toFixed(2)}%</div>
                              <div className="text-right font-semibold text-slate-950">{formatCurrency(row.tax)}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Title & Escrow Estimate</p>
                      <p className="mt-1 text-xs text-slate-300">Estimated closing and escrow fees.</p>
                    </div>
                    <div className="w-36 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
                      <input value={formatCurrency(calc.titleEscrowFee)} onChange={(e) => updateCalc("titleEscrowFee", e.target.value)} className="w-full bg-transparent text-right text-sm font-bold text-slate-950 outline-none" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Buyer Payment Snapshot</p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-950">Estimated buyer payment</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">Shows what a buyer’s estimated payment could look like at this price point using a conventional loan estimate.</p>
                  </div>
                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <Calculator size={22} />
                  </div>
                </div>

                <div className="mt-6 rounded-3xl border border-blue-100 bg-blue-50/50 p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-600">Estimated Monthly Payment</p>
                      <p className="mt-1 text-3xl font-bold text-slate-950">
                        {formatCurrency(buyerPaymentEstimate.total)}
                        <span className="ml-1 text-base font-medium text-slate-500">/mo</span>
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Interest Rate</p>
                      <p className="mt-1 text-lg font-bold text-blue-700">{buyerPaymentEstimate.interestRate.toFixed(2)}%</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Loan Amount</p>
                      <p className="mt-2 text-lg font-bold text-slate-950">{formatCurrency(buyerPaymentEstimate.loanAmount)}</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Down Payment</p>
                      <p className="mt-2 text-lg font-bold text-slate-950">{buyerPaymentEstimate.downPaymentPercent}%</p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Principal & Interest</p>
                      <p className="mt-2 text-lg font-bold text-slate-950">{formatCurrency(buyerPaymentEstimate.principalAndInterest)}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl bg-white px-4 py-4 text-sm shadow-sm">
                    <span className="text-slate-600">Includes estimated taxes and insurance.</span>
                    <span className="font-bold text-slate-950">
                      Taxes/Ins: {formatCurrency(buyerPaymentEstimate.monthlyTaxes + buyerPaymentEstimate.monthlyInsurance)}/mo
                    </span>
                  </div>
                </div>
              </div>

              <LeadPanel showLead={showLead} setShowLead={setShowLead} submitted={submitted} setSubmitted={setSubmitted} form={form} setForm={setForm} submitLead={submitLead} selectedHome={selectedHome} onViewReport={() => setShowReport(true)} deliveryStatus={deliveryStatus} deliveryMessage={deliveryMessage} />
            </div>

            <div className="space-y-5 lg:sticky lg:top-24">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-600">
                    <DollarSign size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">Your Estimated Proceeds</p>
                    <p className="text-3xl font-bold text-emerald-600">{formatCurrency(totals.net)}</p>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <SummaryRow label="Estimated Sale Price" value={formatCurrency(calc.value)} />
                  <SummaryRow label={`Real Estate Commission (${calc.commissionRate.toFixed(1)}%)`} value={`-${formatCurrency(totals.commission)}`} negative />
                  <SummaryRow label="WA REET + Local Tax" value={`-${formatCurrency(totals.excise)}`} negative />
                  <SummaryRow label="Title & Escrow Fees" value={`-${formatCurrency(calc.titleEscrowFee)}`} negative />
                  <SummaryRow label="Mortgage Payoff" value={`-${formatCurrency(calc.mortgage)}`} negative />
                </div>

                <div className="mt-6 border-t border-slate-100 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold text-slate-500">Effective Net Rate</p>
                      <p className="mt-1 text-xs text-slate-500">Percent of sale price retained after estimated costs.</p>
                    </div>
                    <p className="text-2xl font-bold text-slate-950">{calc.value > 0 ? ((totals.net / calc.value) * 100).toFixed(1) : "0.0"}%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resources" className="bg-slate-50/70 px-4 py-14 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">Seller education hub</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Seller guides built for real decisions</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">Explore seller costs, pricing strategy, timing, taxes, and net proceeds with Washington-focused seller tools and guides.</p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {sellerResources.map((resource) => (
                <button
                  key={resource.href}
                  type="button"
                  onClick={() => setActivePagePath(resource.href)}
                  className="group rounded-[1.8rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
                    <TrendingUp size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-950 group-hover:text-blue-700">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-700">
                    {resource.cta}
                    <span>→</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-6xl px-4 py-14 pb-24 sm:px-6 lg:px-8">
          <div className="rounded-[2.5rem] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">About Seller Insight</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                  Built by a local broker focused on seller strategy.
                </h2>

                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
                  Seller Insight was created by Joe Leslie to help homeowners better understand pricing, timing, taxes, and estimated net proceeds before selling.
                </p>

                <div className="mt-6 flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <img
                    src={HEADSHOT_SRC}
                    alt="Joe Leslie"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="h-16 w-16 rounded-2xl object-cover shadow-sm"
                  />
                  <div>
                    <p className="text-lg font-bold text-slate-950">Joe Leslie</p>
                    <p className="text-sm text-slate-500">{ADVISOR_TITLE} • {BROKERAGE_NAME}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Metric value="130+" label="Homes Sold" />
                  <Metric value="$70M+" label="Sales Volume" />
                  <Metric value="500+" label="Transactions" />
                  <Metric value="Seattle Native" label="Local Expertise" />
                </div>
              </div>

              <div>
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-3">
                    {["Zillow", "RealSatisfied"].map((source) => (
                      <button
                        key={source}
                        type="button"
                        onClick={() => setReviewSource(source)}
                        className={`rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] shadow-sm transition ${
                          reviewSource === source
                            ? "border-blue-700 bg-blue-700 text-white"
                            : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-700"
                        }`}
                      >
                        {source}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {displayedReviews.slice(0, 2).map((review) => (
                    <div key={`${review.source}-${review.name}`} className="rounded-[1.8rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-1 text-amber-400">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={15} fill="currentColor" />
                          ))}
                        </div>

                        <span className="rounded-full bg-slate-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.12em] text-slate-500">
                          {review.source}
                        </span>
                      </div>

                      <p className="mt-4 text-sm leading-7 text-slate-700">
                        “{review.quote}”
                      </p>

                      <div className="mt-5 border-t border-slate-100 pt-4">
                        <p className="text-sm font-bold text-slate-950">{review.name}</p>
                        <p className="mt-1 text-xs text-slate-500">{review.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      <Footer onNavigate={setActivePagePath} />
      </main>

      <AnimatePresence>
        {showReport && (
          <SellerReportModal
            selectedHome={selectedHome}
            calc={calc}
            totals={totals}
            market={market}
            timingScore={timingScore}
            form={form}
            reetBreakdown={reetBreakdown}
            localTax={localTax}
            onClose={() => setShowReport(false)}
          />
        )}
      </AnimatePresence>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur md:hidden">
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-xl shadow-slate-300">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-slate-300">Estimated Net</p>
            <p className="text-xl font-bold text-emerald-400">{formatCurrency(totals.net)}</p>
          </div>
          <div className="text-right">
            <p className="text-[11px] font-semibold text-slate-300">Net Rate</p>
            <p className="text-sm font-bold">{calc.value > 0 ? ((totals.net / calc.value) * 100).toFixed(1) : "0.0"}%</p>
          </div>
          <a href="#net" className="rounded-xl bg-blue-600 px-4 py-2.5 text-xs font-bold text-white">Adjust</a>
        </div>
      </div>
    </div>
  );
}

function SellerContentPage({ page, onBack, onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <button type="button" onClick={onBack} className="flex items-center gap-3 text-left">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50 text-blue-700">
              <Home size={22} />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight text-slate-950">Seller Insight</p>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-700">Seller intelligence platform</p>
            </div>
          </button>

          <button type="button" onClick={onBack} className="rounded-xl bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">
            Open Seller Calculator
          </button>
        </div>
      </header>

      <section className="border-b border-slate-100 bg-gradient-to-b from-blue-50 to-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">{page.eyebrow}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {page.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            {page.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button type="button" onClick={onBack} className="rounded-2xl bg-blue-700 px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:bg-blue-800">
              Estimate My Net Proceeds
            </button>
            <button type="button" onClick={onBack} className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-sm font-bold text-slate-950 shadow-sm transition hover:border-blue-200 hover:text-blue-700">
              Request Seller Report
            </button>
          </div>
        </div>
      </section>

      <section className="px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <div className="space-y-6">
            {page.sections.map((section) => (
              <div key={section.heading} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">{section.heading}</h2>
                <p className="mt-4 text-base leading-8 text-slate-600">{section.text}</p>
                {section.bullets && (
                  <div className="mt-5 grid gap-3">
                    {section.bullets.map((bullet) => (
                      <div key={bullet} className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
                        <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={17} />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="space-y-5 lg:sticky lg:top-24">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-200">Seller planning tools</p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">Understand your numbers before you sell.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">Estimate your proceeds, understand Washington REET, preview buyer demand, and request a custom seller strategy report.</p>

              <div className="mt-6 space-y-3">
                <button type="button" onClick={onBack} className="block w-full rounded-2xl bg-blue-600 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-blue-500">
                  Open Net Proceeds Calculator
                </button>
                <button type="button" onClick={onBack} className="block w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-bold text-white transition hover:bg-white/10">
                  Start With Your Address
                </button>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-bold tracking-tight text-slate-950">Popular seller topics</h3>
              <div className="mt-5 space-y-3">
                {sellerResources.slice(0, 5).map((resource) => (
                  <button
                    key={resource.href}
                    type="button"
                    onClick={() => onNavigate(resource.href)}
                    className="flex w-full items-center justify-between rounded-2xl border border-slate-100 px-4 py-4 text-left text-sm font-semibold text-slate-700 transition hover:border-blue-100 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <span>{resource.title}</span>
                    <span>→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer onNavigate={onNavigate} compact />
    </div>
  );
}

function Footer({ onNavigate, compact = false }) {
  const footerLinks = [
    { label: "Seller Calculator", href: "#net" },
    { label: "Seller Guides", href: "#resources" },
    { label: "Reviews", href: "#reviews" },
  ];

  return (
    <footer className="bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-300">
                <Home size={22} />
              </div>
              <div>
                <p className="text-xl font-bold tracking-tight">Seller Insight</p>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-300">Seller intelligence platform</p>
              </div>
            </div>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              Helping homeowners understand pricing, timing, taxes, and estimated net proceeds before they sell.
            </p>

            <p className="mt-5 text-sm font-semibold text-slate-200">
              Powered by {ADVISOR_NAME} • {ADVISOR_TITLE} • Brokered by {BROKERAGE_NAME}
            </p>

            <div className="mt-5 flex items-center gap-4">
              <img
                src={EXP_LOGO_SRC}
                alt="eXp Realty"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
                className="h-7 w-auto opacity-90"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Platform</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {footerLinks.map((link) => (
                <a key={link.label} href={link.href} className="transition hover:text-white">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-slate-300">Seller Resources</p>
            <div className="mt-5 grid gap-3 text-sm text-slate-300">
              {sellerResources.slice(0, 4).map((resource) => (
                <button
                  key={resource.href}
                  type="button"
                  onClick={() => onNavigate?.(resource.href)}
                  className="text-left transition hover:text-white"
                >
                  {resource.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6">
          <div className="grid gap-4 text-xs leading-6 text-slate-300">
            <p>
              All estimates are for informational planning purposes only and should be independently verified. Values, taxes, fees, commissions, and market conditions may change. Seller Insight is not a commitment to list, lend, or provide legal, tax, or financial advice.
            </p>
            <p>{IDX_DISCLOSURE}</p>
            <p>
              DMCA notices may be sent to {DMCA_EMAIL}. Copyright concerns related to MLS GRID content must be reviewed promptly and, when applicable, reported to MLS GRID.
            </p>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-300">
            <span>© {new Date().getFullYear()} Seller Insight</span>
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Fair Housing</span>
            <span>DMCA</span>
            <span>IDX Data Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}


function RecentNearbySales({ nearbySales, selectedHome }) {
  return (
    <section id="recent-sales" className="bg-slate-50/70 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-700">
            Local comparable sales
          </p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Recent Nearby Sales
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Comparable sales help sellers understand buyer demand, pricing pressure, and realistic market positioning.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {nearbySales.slice(0, 3).map((sale, index) => {
            const detailParts = sale.detail.split("•").map((part) => part.trim());
            const propertyDetail = detailParts.slice(0, 2).join(" • ");
            const soldSpeed = detailParts.find((part) => part.toLowerCase().includes("sold")) || "Recently sold";

            return (
              <div
                key={`${sale.address}-${index}`}
                className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
                      Sale {index + 1}
                    </p>
                    <h3 className="mt-2 text-lg font-bold tracking-tight text-slate-950">
                      {sale.address}
                    </h3>
                    {selectedHome?.zip && (
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        Near {selectedHome.zip}
                      </p>
                    )}
                  </div>

                  <div className="rounded-2xl bg-blue-50 p-3 text-blue-700">
                    <TrendingUp size={21} />
                  </div>
                </div>

                <div className="mt-6 rounded-3xl bg-slate-50 p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
                    Sold Price
                  </p>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                    {formatCurrency(sale.price)}
                  </p>
                </div>

                <div className="mt-5 space-y-3 text-sm">
                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Beds / Baths</span>
                    <span className="text-right font-bold text-slate-950">{propertyDetail}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-3">
                    <span className="text-slate-500">Sold Speed</span>
                    <span className="text-right font-bold text-slate-950">{soldSpeed}</span>
                  </div>

                  <div className="flex items-start justify-between gap-4">
                    <span className="text-slate-500">List Price Result</span>
                    <span className="text-right font-bold text-emerald-600">{sale.delta}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 rounded-[1.6rem] border border-blue-100 bg-blue-50/60 p-5">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-600" size={18} />
            <p className="text-sm leading-6 text-slate-700">
              These nearby sales are shown to help frame seller expectations around pricing power, buyer urgency, and likely negotiation pressure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


function PreviewCard({ selectedHome, calc, totals, market, timingScore, isAnalyzing }) {
  return (
    <div className="mx-auto max-w-md overflow-hidden rounded-[2rem] bg-slate-100 shadow-xl shadow-blue-100 ring-1 ring-slate-200 lg:max-w-lg">
      <div className="h-28 bg-[linear-gradient(135deg,rgba(11,61,145,.08),rgba(255,255,255,.2)),url('https://images.unsplash.com/photo-1502175353174-a7a70e73b362?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center sm:h-36" />
      <div className="bg-white p-4 sm:p-5">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">{selectedHome ? selectedHome.city + " seller preview" : "Seller preview"}</p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          {isAnalyzing ? <div className="col-span-2 rounded-2xl bg-blue-50 p-4 text-center"><Loader2 className="mx-auto animate-spin text-blue-700" /><p className="mt-2 text-sm font-bold text-blue-700">Building seller insights...</p></div> : <><Stat label="Estimated Value" value={formatCurrency(calc.value)} icon={Home} /><Stat label="Estimated Net Proceeds" value={formatCurrency(totals.net)} icon={DollarSign} green /><Stat label="Buyer Demand" value={market.demand} icon={BarChart3} green /><Stat label="Timing Score" value={`${timingScore}/100`} icon={CalendarDays} green /></>}
        </div>
      </div>
    </div>
  );
}

function LeadPanel({ showLead, setShowLead, submitted, setSubmitted, form, setForm, submitLead, selectedHome, onViewReport, deliveryStatus, deliveryMessage }) {
  return (
    <div id="lead" className="rounded-[2rem] bg-slate-950 p-6 text-white shadow-xl shadow-slate-200 sm:p-8">
      {!showLead && !submitted ? (
        <div>
          <LockKeyhole className="text-blue-200" size={30} />
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">Want the precise seller strategy?</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Preview the numbers first. Then request a custom valuation, net sheet, and prep strategy when you’re ready.</p>
          <button onClick={() => setShowLead(true)} className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-500">Unlock Custom Report</button>
          <p className="mt-4 text-xs leading-5 text-slate-300">This keeps the site helpful first and uses the form only after value is shown.</p>
        </div>
      ) : submitted ? (
        <div className="rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-5"><CheckCircle2 className="text-emerald-300" size={30} /><h3 className="mt-3 text-lg font-bold">Request received</h3><p className="mt-2 text-sm leading-6 text-slate-300">Thanks{form.name ? `, ${form.name}` : ""}. Your seller strategy report request has been captured.</p>{deliveryMessage && <div className={`mt-4 rounded-xl p-3 text-sm leading-6 ${deliveryStatus === "sent" ? "bg-emerald-400/10 text-emerald-100" : deliveryStatus === "sending" ? "bg-blue-400/10 text-blue-100" : "bg-white/10 text-slate-300"}`}>{deliveryMessage}</div>}<button onClick={onViewReport} className="mt-5 w-full rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-500">Preview Seller Report</button><button onClick={() => { setSubmitted(false); setShowLead(true); }} className="mt-4 text-sm font-bold text-blue-200">Submit another request</button></div>
      ) : (
        <div>
          <ClipboardList className="text-blue-200" size={30} />
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">Get your custom seller report</h2>
          <p className="mt-3 text-sm leading-6 text-slate-300">Receive a personalized home value, estimated net proceeds, and local market snapshot{selectedHome ? ` for ${selectedHome.address}` : ""}.</p>
          <form className="mt-6 space-y-3" onSubmit={submitLead}>
            <input required value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-400 transition focus:ring-2" placeholder="Full Name" />
            <input required value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-400 transition focus:ring-2" placeholder="Phone" />
            <input required type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-400 transition focus:ring-2" placeholder="Email" />
            <select required value={form.timeline} onChange={(e) => setForm((p) => ({ ...p, timeline: e.target.value }))} className="w-full rounded-xl border border-white/10 bg-white px-4 py-3 text-sm text-slate-950 outline-none ring-blue-400 transition focus:ring-2"><option value="">When are you thinking about selling?</option><option>ASAP</option><option>1–3 months</option><option>3–6 months</option><option>6+ months</option><option>Just researching</option></select>
            <button type="submit" className="w-full rounded-xl bg-blue-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-blue-500">Send My Report</button>
          </form>
          <p className="mt-3 text-center text-xs text-slate-300">Your information is safe and never shared.</p>
        </div>
      )}
    </div>
  );
}

function SellerReportModal({ selectedHome, calc, totals, market, timingScore, form, reetBreakdown, localTax, onClose }) {
  const reportDate = new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const propertyAddress = selectedHome?.address || "Property Address Not Selected";
  const ownerName = form.name || "Seller";

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] overflow-y-auto bg-slate-950/70 p-4 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl">
        <div className="mb-4 flex items-center justify-between gap-3 print:hidden">
          <button onClick={onClose} className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-slate-900 shadow-sm">Close</button>
          <button onClick={() => window.print()} className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-blue-700">Print / Save PDF</button>
        </div>

        <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl print:rounded-none print:shadow-none">
          <div className="bg-slate-950 p-8 text-white print:bg-white print:text-slate-950">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-200 print:text-blue-700">Seller Insight</p>
                <h2 className="mt-3 text-4xl font-semibold tracking-tight">Seller Strategy Report</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 print:text-slate-600">Prepared for {ownerName} • {reportDate}</p>
              </div>
              <div className="rounded-2xl bg-white/10 p-5 text-right print:border print:border-slate-200 print:bg-white">
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300 print:text-slate-300">Estimated Net</p>
                <p className="mt-1 text-3xl font-bold text-emerald-300 print:text-emerald-600">{formatCurrency(totals.net)}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 p-8 lg:grid-cols-[1.1fr_.9fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Property</p>
              <h3 className="mt-2 text-2xl font-bold text-slate-950">{propertyAddress}</h3>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <ReportMetric label="Estimated Sale Price" value={formatCurrency(calc.value)} />
                <ReportMetric label="Mortgage Payoff" value={formatCurrency(calc.mortgage)} />
                <ReportMetric label="Buyer Demand" value={market.demand} />
                <ReportMetric label="Timing Score" value={`${timingScore}/100`} />
              </div>

              <div className="mt-7 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="text-lg font-bold text-slate-950">Recommended Next Steps</h4>
                <div className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                  <p><strong>1. Confirm value range:</strong> Review recent comparable sales and active competition for the property.</p>
                  <p><strong>2. Validate net proceeds:</strong> Confirm mortgage payoff, title/escrow charges, and any seller-paid costs.</p>
                  <p><strong>3. Prepare pricing strategy:</strong> Choose a launch price based on buyer demand, days on market, and competing listings.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h4 className="text-lg font-bold text-slate-950">Proceeds Summary</h4>
              <div className="mt-5 space-y-4">
                <SummaryRow label="Estimated Sale Price" value={formatCurrency(calc.value)} />
                <SummaryRow label={`Commission (${calc.commissionRate.toFixed(1)}%)`} value={`-${formatCurrency(totals.commission)}`} negative />
                <SummaryRow label="WA REET + Local Tax" value={`-${formatCurrency(totals.excise)}`} negative />
                <SummaryRow label="Title & Escrow Fees" value={`-${formatCurrency(calc.titleEscrowFee)}`} negative />
                <SummaryRow label="Mortgage Payoff" value={`-${formatCurrency(calc.mortgage)}`} negative />
              </div>
              <div className="mt-6 rounded-2xl bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-slate-600">Estimated Net Proceeds</p>
                <p className="mt-1 text-3xl font-bold text-emerald-600">{formatCurrency(totals.net)}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-100 p-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-blue-100 bg-blue-50 p-5">
                <h4 className="font-bold text-slate-950">Tax Breakdown</h4>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <ReportMetric label="WA REET" value={formatCurrency(totals.stateReet)} />
                  <ReportMetric label="Local Tax" value={formatCurrency(totals.localTransferTax)} />
                  <ReportMetric label="Total Tax" value={formatCurrency(totals.excise)} />
                </div>
                <p className="mt-4 text-sm leading-6 text-slate-600">Local estimate: {localTax.label} at {(localTax.rate * 100).toFixed(2)}%.</p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h4 className="font-bold text-slate-950">Market Snapshot</h4>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <ReportMetric label="Recent Sales" value={market.sold} />
                  <ReportMetric label="Avg. Days" value={market.dom} />
                  <ReportMetric label="List/Sale" value={market.listSale} />
                  <ReportMetric label="Active Listings" value={market.active} />
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs leading-5 text-slate-500">This report is a preliminary estimate for planning purposes only. Values, taxes, fees, commissions, and market conditions should be verified before making financial decisions. This is not a commitment to list, lend, or provide financial advice.</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ReportMetric({ label, value }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
      <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">{label}</p>
      <p className="mt-2 text-xl font-bold text-slate-950">{value}</p>
    </div>
  );
}

function ModernInput({ label, value, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <label className="text-sm font-medium text-slate-600">{label}</label>
      <div className="mt-3 flex items-center rounded-2xl border border-slate-200 bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-200">
        <span className="border-r border-slate-200 px-4 py-3 text-slate-500">$</span>
        <input
          value={Number(value || 0).toLocaleString("en-US")}
          onChange={(e) => onChange(e.target.value)}
          inputMode="numeric"
          className="min-w-0 flex-1 bg-transparent px-4 py-3 text-base font-semibold text-slate-950 outline-none"
        />
      </div>
    </div>
  );
}

function SliderInput({ label, value, min, max, step, onChange }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
      <div className="flex items-center justify-between gap-4">
        <label className="text-sm font-medium text-slate-600">{label}</label>
        <div className="flex items-center rounded-2xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <span className="mr-1 text-sm font-bold text-slate-500">$</span>
          <input
            value={Number(value || 0).toLocaleString("en-US")}
            onChange={(e) => onChange(e.target.value)}
            inputMode="numeric"
            className="w-28 bg-transparent text-right text-sm font-bold text-slate-950 outline-none"
          />
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-5 w-full accent-blue-700"
      />
      <div className="mt-2 flex items-center justify-between text-xs font-medium text-slate-300">
        <span>{formatCurrency(min)}</span>
        <span>{formatCurrency(max)}</span>
      </div>
    </div>
  );
}

function SummaryRow({ label, value, negative = false }) {
  return (
    <div className="flex items-start justify-between gap-4 text-sm">
      <span className="leading-6 text-slate-600">{label}</span>
      <span className={`shrink-0 font-bold ${negative ? "text-slate-950" : "text-slate-950"}`}>{value}</span>
    </div>
  );
}

function InsightCard({ icon: Icon, label, value, sub, green = false }) {
  return <div className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm"><div className={`flex h-9 w-9 items-center justify-center rounded-xl ${green ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-700"}`}><Icon size={22} /></div><p className="mt-5 text-sm font-medium text-slate-500">{label}</p><p className={`mt-1 text-lg font-bold sm:text-xl ${green ? "text-emerald-600" : "text-slate-950"}`}>{value}</p><p className="mt-2 text-sm leading-5 text-slate-500">{sub}</p></div>;
}

function Stat({ label, value, icon: Icon, green = false }) {
  return <div className="rounded-2xl border border-slate-100 bg-slate-50 p-3"><div className="flex items-start justify-between gap-2"><div><p className="text-xs text-slate-500">{label}</p><p className={`mt-1 text-lg font-bold sm:text-xl ${green ? "text-emerald-600" : "text-slate-950"}`}>{value}</p></div><div className={`flex h-9 w-9 items-center justify-center rounded-xl ${green ? "bg-emerald-50 text-emerald-600" : "bg-blue-50 text-blue-700"}`}><Icon size={18} /></div></div></div>;
}

function Metric({ value, label }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm"><p className="text-2xl font-bold text-blue-700">{value}</p><p className="mt-1 text-xs font-medium text-slate-500">{label}</p></div>;
}
