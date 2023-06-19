import { fontFamily } from "tailwindcss/defaultTheme";

const plugin = require("tailwindcss/plugin");

const backfaceVisibility = plugin(function ({ addUtilities }) {
  addUtilities({
    ".backface-visible": {
      "backface-visibility": "visible",
      "-moz-backface-visibility": "visible",
      "-webkit-backface-visibility": "visible",
      "-ms-backface-visibility": "visible",
    },
    ".backface-hidden": {
      "backface-visibility": "hidden",
      "-moz-backface-visibility": "hidden",
      "-webkit-backface-visibility": "hidden",
      "-ms-backface-visibility": "hidden",
    },
  });
});

/** @type {import('tailwindcss').Config} */
export const content = [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  fontFamily: {
    sans: ["var(--font-sans)", ...fontFamily.sans],
    title: ["var(--font-title)", ...fontFamily.sans],
  },

  extend: {
    boxShadow: {
      100: "0px 0px 250px rgba(203, 203, 203, 0.8)",
    },
    screens: {
      md: "686px",
      // => @media (min-width: 686px and max-width: 829px) { ... }

      lg: "830px",
      // => @media (min-width: 830px and max-width: 1023px) { ... }

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    fontSize: {
      h1: [
        "10.25rem",
        {
          lineHeight: "10.7rem",
          letterSpacing: "0.02em",
          fontWeight: "400",
        },
      ],
      h1LG: [
        "9rem",
        {
          lineHeight: "9.5rem",
          letterSpacing: "0.02em",
          fontWeight: "400",
        },
      ],
      h1MD: [
        "7.25rem",
        {
          lineHeight: "7.75rem",
          letterSpacing: "0.03em",
          fontWeight: "400",
        },
      ],
      h1SM: [
        "3.75rem",
        {
          lineHeight: "4.50rem",
          letterSpacing: "0.02em",
          fontWeight: "400",
        },
      ],
      h2: [
        "6rem",
        {
          lineHeight: "6.25rem",
          letterSpacing: "0.01em",
          fontWeight: "400",
        },
      ],
      h2MD: [
        "6rem",
        {
          lineHeight: "6.25rem",
          letterSpacing: "0.01em",
          fontWeight: "400",
        },
      ],
      h2SM: [
        "6rem",
        {
          lineHeight: "6.25rem",
          letterSpacing: "0.01em",
          fontWeight: "400",
        },
      ],
      h3: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "400",
        },
      ],
      h3MD: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "400",
        },
      ],
      h3SM: [
        "1.5rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "400",
        },
      ],
      cta: [
        "1rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      ctaMD: [
        "1rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      ctaSM: [
        "1rem",
        {
          lineHeight: "1.3rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      body: [
        "1rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      bodyMD: [
        "1rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      bodySM: [
        "1rem",
        {
          lineHeight: "1.25rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      nav: [
        ".8rem",
        {
          lineHeight: ".9rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      navMD: [
        ".8rem",
        {
          lineHeight: ".9rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      navSM: [
        ".8rem",
        {
          lineHeight: ".9rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      separator: [
        "1.25rem",
        {
          lineHeight: "1.7rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      separatorMD: [
        "1.25rem",
        {
          lineHeight: "1.7rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      separatorSM: [
        "1.25rem",
        {
          lineHeight: "1.7rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      description_smMD: [
        "0.8rem",
        {
          lineHeight: "0.9rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      description_SM: [
        "0.8rem",
        {
          lineHeight: "0.9rem",
          letterSpacing: "0.03em",
          fontWeight: "600",
        },
      ],
      description_lg: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "700",
        },
      ],
      description_lgMD: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "700",
        },
      ],
      description_lgSM: [
        "1rem",
        {
          lineHeight: "1.5rem",
          letterSpacing: "0.03em",
          fontWeight: "700",
        },
      ],
      detail: [
        "0.6rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      detailMD: [
        "0.6rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      detailSM: [
        "0.6rem",
        {
          lineHeight: "1rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
      button: [
        "1.25rem",
        {
          lineHeight: "1.75rem",
          letterSpacing: "0.03em",
          fontWeight: "300",
        },
      ],
    },
    colors: {
      content: {
        grey_100: "#F2F2F2",
        grey_200: "#EEEEEE",
        grey_800: "#1A1A1A",
        grey_900: "#1F1F1F",
      },
      semantic: {
        purple: "#E41DC3",
      },
      background: {
        shadow_light: "#D9D9D9",
        noise_1: "url('/public/images/textures/noise1.png')",
        noise_2: "url('/public/images/textures/noise2.png')",
        noise_3: "url('/public/images/textures/noise3.png')",
        noise_4: "url('/public/images/textures/noise4.png')",
      },
    },
    animation: {
      cursor: "cursor 3.2s linear infinite",
      spinSlow1: "spin1 2s linear infinite",
      spinSlow2: "spin2 2s linear infinite",
      spinSlow3: "spin3 2s linear infinite",
      spinSlow4: "spin4 2s linear infinite",
      noiseAnimation: "noiseAnimation 800ms linear infinite",
    },
    keyframes: {
      spin1: {
        "0%": { transform: "rotate(340deg)" },
        "100%": { transform: "rotate(-20deg)" },
      },
      spin2: {
        "0%": { transform: "rotate(-350deg)" },
        "100%": { transform: "rotate(10deg)" },
      },
      spin3: {
        "0%": { transform: "rotate(-20deg)" },
        "100%": { transform: "rotate(340deg)" },
      },
      spin4: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      noiseAnimation: {
        "0%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise1.png')",
        },
        "25%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise1.png')",
        },
        "26%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise2.png')",
        },
        "50%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise2.png')",
        },
        "51%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise3.png')",
        },
        "75%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise3.png')",
        },
        "76%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise4.png')",
        },
        "99%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise4.png')",
        },
        "100%": {
          "background-origin": "border-box",
          "background-size": "cover",
          "background-image": "url('/images/textures/noise1.png')",
        },
      },
      cursor: {
        "0%": { borderRadius: "63.37px 37px 54px 46px" },
        "15%": { borderRadius: "40px 60px 54px 46px" },
        "30%": { borderRadius: "54px 46px 38px 62px" },
        "45%": { borderRadius: "61px 39px 55px 45px" },
        "60%": { borderRadius: "50px 50px 34px 46px" },
        "75%": { borderRadius: "46px 54px 50px 50px" },
        "100%": { borderRadius: "63.37px 37px 54px 46px" },
      },
    },
  },
};

export const plugins = [backfaceVisibility];
