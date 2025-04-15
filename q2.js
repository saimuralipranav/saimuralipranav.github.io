document.addEventListener("DOMContentLoaded", function() {
    function getElementType(temp) {
        if (temp.tagName === "IMG") return "image";
        if (temp.tagName === "A") return "link";
        if (temp.tagName === "P") return "paragraph";
        if (temp.tagName.startsWith("H")) return "heading";
        if (temp.tagName === "LI") return "list item";
        if (temp.classList.contains("skill")) return "skill";
        return temp.tagName.toLowerCase();
    }

    function getSectionName(el) {
        const section = el.closest("section");
        if (!section) return "div";

        const heading = section.querySelector("h2");
        if (heading) return heading.textContent.trim();

        if (section.id) return section.id.trim();

        return "unnamed section";
    }

    document.addEventListener("click", function(e) {
        const time = new Date().toLocaleString();
        const type = getElementType(e.target);
        const section = getSectionName(e.target);
        console.log(`${time}, click, ${type}, ${section}`);
    });

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const time = new Date().toLocaleString();
                const type = getElementType(entry.target);
                const section = getSectionName(entry.target);
                console.log(`${time}, view, ${type}, ${section}`);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll("section, img, p, a, .skill").forEach(el => {
        observer.observe(el);
    });
});