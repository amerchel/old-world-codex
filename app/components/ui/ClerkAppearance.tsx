import type { Theme } from "@clerk/types";

export const clerkAppearance: Theme = {
    layout: {
        socialButtonsVariant: "blockButton",
    },
    elements: {
        card: "bg-[#1f1f1f] border border-[#3a3a3a] shadow-md rounded-xl",
        headerTitle: "text-2xl font-bold text-primary text-center",
        formButtonPrimary:
            "bg-primary text-text transition-all duration-300 hover:text-primary hover:bg-bg hover:border-primary",
        formFieldInput:
            "bg-[#2e2e2e] text-white border border-[#444] focus:ring-primary",
        formFieldLabel: "text-sm text-white",
        footerActionText: "text-gray-400",
        socialButtonsBlockButton:
            "bg-primary text-text transition-all duration-300 hover:text-primary hover:bg-dark",
        socialButtonsBlockButtonText: "text-text",
        formFooter: "bg-[#1f1f1f]",
    },
    variables: {
        colorPrimary: "#eac360",
        colorText: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
    },
};
