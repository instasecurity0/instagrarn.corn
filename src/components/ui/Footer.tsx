const FOOTER_LINKS = [
  { label: "Meta", href: "https://about.meta.com/" },
  { label: "About", href: "https://about.instagram.com/" },
  { label: "Blog", href: "https://about.instagram.com/blog" },
  { label: "Jobs", href: "https://www.metacareers.com/" },
  { label: "Help", href: "https://help.instagram.com/" },
  { label: "API", href: "https://developers.facebook.com/docs/instagram" },
  { label: "Privacy", href: "https://privacycenter.instagram.com/policy/" },
  { label: "Terms", href: "https://help.instagram.com/581066165581870/" },
  { label: "Locations", href: "https://www.instagram.com/explore/locations/" },
  { label: "Instagram Lite", href: "https://www.instagram.com/web/lite/" },
  {
    label: "Contact Uploading & Non-Users",
    href: "https://www.facebook.com/help/instagram/261704639352628",
  },
  { label: "Meta Verified", href: "https://about.meta.com/technologies/meta-verified/" },
] as const;

interface FooterProps {
  visible?: boolean;
}

export default function Footer({ visible = true }: FooterProps) {
  return (
    <footer
      style={{
        zIndex: 1,
        paddingBottom: 28,
        paddingTop: 12,
        textAlign: "center",
        opacity: visible ? 1 : 0,
        transition: "opacity 1s ease 0.4s",
      }}
    >
      <nav aria-label="Footer links">
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "6px 16px",
            marginBottom: 10,
          }}
        >
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#737373",
                fontSize: 12,
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#a8a8a8";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color = "#737373";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 16,
          color: "#737373",
          fontSize: 12,
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => {
            window.location.href =
              "https://www.instagram.com/accounts/language_preferences/";
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            background: "none",
            border: "none",
            color: "#737373",
            fontSize: 12,
            fontFamily: "inherit",
            padding: 0,
          }}
          aria-label="Change language"
        >
          English
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
            <polyline
              points="2,3.5 5,6.5 8,3.5"
              stroke="#737373"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <span>© 2026 Instagram from Meta</span>
      </div>
    </footer>
  );
}