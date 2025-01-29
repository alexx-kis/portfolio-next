import { useEffect } from "react";

const useReplaceImgWithSvg = () => {
  useEffect(() => {
    const replaceImagesWithSvg = () => {
      document.querySelectorAll("img.img-svg").forEach((img) => {
        const imgClass = img.getAttribute("class");
        const imgURL = img.getAttribute("src");

        if (!imgURL) return;

        fetch(imgURL)
          .then((response) => response.text())
          .then((data) => {
            const parser = new DOMParser();
            const svg = parser.parseFromString(data, "image/svg+xml").querySelector("svg");

            if (!svg) {
              console.error(`No SVG found in ${imgURL}`);
              return;
            }

            if (imgClass) {
              svg.setAttribute("class", `${imgClass} replaced-svg`);
            }

            svg.removeAttribute("xmlns:a");

            if (
              !svg.hasAttribute("viewBox") &&
              svg.hasAttribute("height") &&
              svg.hasAttribute("width")
            ) {
              svg.setAttribute(
                "viewBox",
                `0 0 ${svg.getAttribute("width")} ${svg.getAttribute("height")}`
              );
            }

            img.replaceWith(svg);
          })
          .catch((error) => console.error("Error fetching the SVG:", error));
      });
    };

    replaceImagesWithSvg();
  }, []);
};

export default useReplaceImgWithSvg;
