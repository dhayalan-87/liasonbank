import React from "react";
import Link from "next/link";


const Box = ({ children, className = "" }) => (
  <div className={`box ${className}`}>{children}</div>
);

// 🔁 Recursive renderer (controlled depth)
const RenderItems = ({ items, depth = 0, maxDepth = 2 }) => {
  if (!items || depth > maxDepth) return null;

  return (
    <div className={`list depth-${depth}`}>
      {items.map((item, i) => (
        <div key={i} className="item-group">
          <Box className={depth === 0 ? "" : "sub-item"}>
            {item.href ? (
              <Link href={item.href}>{item.name}</Link>
            ) : (
              item.name
            )}
          </Box>

          {/* children support */}
          {(item.children || item.items) && (
            <RenderItems
              items={item.children || item.items}
              depth={depth + 1}
              maxDepth={maxDepth}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default function SitemapDiagram({ navLinks }) {
  // -------- SPLIT DATA --------

  const home = navLinks.find((x) => x.name === "Home");

  const leftLinks = navLinks.filter((x) =>
    ["About Us", "Completed", "On Going", "Press Release","Contact Us", "CEO's Desk", "Testimonials", "Privacy Policy", "Terms of Service",].includes(x.name)
  );

  const services = navLinks.find((x) => x.name === "Our Services");

  const amc = services?.submenu?.find((x) => x.name === "AMC");
  const licensing = services?.submenu?.find((x) => x.name === "Licensing");
  const liaisoning = services?.submenu?.find((x) => x.name === "Liaisoning");

  const sitc = services?.submenu?.filter((x) =>
    [
      "Fire ( SITC )",
      "Electrical ( SITC )",
      "PNG ( SITC )",
      "Equipment Solution Department ( ESD )",
    ].includes(x.name)
  );

  return (
    <div className="sitemap">
      
      {/* HOME */}
      <div className="top col-3 mx-auto">
        <Box className="home">
          <Link href={home?.href || "/"}>{home?.name}</Link>
        </Box>
      </div>

      <div className="level top-row">
        
        {/* LEFT */}
        <div className="column">
          {leftLinks.map((item, i) => (
            <Box key={i} className="main">
              <Link href={item.href}>{item.name}</Link>
            </Box>
          ))}
        </div>

        {/* SERVICES */}
        <div className="column services">
          <Box className="main highlight">{services?.name}</Box>

          {/* AMC */}
          <div className="sub">
            <Box className="sub-title">{amc?.name}</Box>
            <RenderItems items={amc?.items} maxDepth={1} />
          </div>

          {/* LICENSING */}
          <div className="sub">
            <Box className="sub-title">{licensing?.name}</Box>
            <RenderItems items={licensing?.items} maxDepth={2} />
          </div>

          {/* LIAISONING */}
          <div className="sub">
            <Box className="sub-title">{liaisoning?.name}</Box>
            <RenderItems items={liaisoning?.items} maxDepth={2} />
          </div>
          <div className="sub bottom">
             {sitc?.map((item, i) => (
              <Box key={i} className="main">
                {item.name.replace("Equipment Solution Department", "ESD")}
              </Box>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}