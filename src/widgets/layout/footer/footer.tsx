import Container from "@/components/common/container";
import Typography from "@/components/common/typhography";

import FooterContact from "./footer-contact";
import FooterLinks from "./footer-links";
import FooterSocial from "./footer-social";

export default function Footer() {
  return (
    <footer className="bg-brand-900">
      <Container>
        <div className="w-full grid grid-cols-2 py-20">
          <div className="flex flex-col gap-10">
            <FooterContact />
            <FooterLinks />
            <FooterSocial />

            <Typography
              className="leading-4 font-normal text-sm"
              colorVariant="white">
              © 2077 Way2 Invest Management. All rights reserved.
            </Typography>
          </div>
        </div>
      </Container>
    </footer>
  );
}
