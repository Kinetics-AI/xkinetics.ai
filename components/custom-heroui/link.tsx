"use client"

import { extendVariants } from "@heroui/react";

import { Link } from "@heroui/react";

export const HeroLink = extendVariants(Link, {
    defaultVariants: {
        underline: "hover",
    },
});
