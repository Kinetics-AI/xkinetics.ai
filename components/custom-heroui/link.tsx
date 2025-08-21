"use client"

import {extendVariants, Link} from "@heroui/react";

export const HeroLink = extendVariants(Link, {
    defaultVariants: {
        underline: "hover",
    },
});
