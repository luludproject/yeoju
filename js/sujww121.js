var jsonldData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://yeoju.jianhomecare.com",
  logo: "https://yeoju.jianhomecare.com/img/변기막힘하수구막힘.png",
};

var script = document.createElement("script");
script.type = "application/ld+json";
script.text = JSON.stringify(jsonldData);
document.head.appendChild(script);
