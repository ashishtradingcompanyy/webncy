import "/public/assets/css/vendors/bootstrap.min.css";
import "/public/assets/css/vendors/swiper-bundle.min.css";
import "/public/assets/css/vendors/aos.css";
import "/public/assets/css/vendors/carouselTicker.css";
import "/public/assets/css/vendors/odometer.css";
import "/public/assets/css/vendors/magnific-popup.css";
import "/public/assets/fonts/bootstrap-icons/bootstrap-icons.min.css";
import "/public/assets/fonts/boxicons/boxicons.min.css";
import "/public/assets/fonts/remixicon/remixicon.css";
import "/public/assets/fonts/fontawesome/fontawesome.min.css";
import "/public/assets/fonts/fontawesome/solid.min.css";
import "/public/assets/fonts/fontawesome/regular.min.css";
import "/public/assets/css/main.css";

import "/public/assets/css/style.css";

import type { Metadata } from "next";
import { Libre_Franklin, Rubik } from "next/font/google";

const LibreFranklinHeading = Libre_Franklin({
    weight: ["300", "400", "500", "600", "700"], // Only bold for headings
    subsets: ["latin"],
    variable: "--tc-heading-font-family",
    display: "swap",
});

const rubik = Rubik({
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--tc-body-font-family",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Webency Technology",
    description: "Your Local Digital Growth Partner",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${LibreFranklinHeading.variable} ${rubik.variable}`}>{children}</body>
        </html>
    );
}
