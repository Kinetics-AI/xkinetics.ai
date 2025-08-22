"use client"

import { extendVariants } from "@heroui/react";

import { Button } from "@heroui/button";

export const HeroButton = extendVariants(Button, {
    defaultVariants: {
        size: "sm",
    },
});
