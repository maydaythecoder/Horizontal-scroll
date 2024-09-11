// Ensure GSAP is registered with ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    const cards = [
        {id: "#card-1", endTranslateX: -2000, rotate: 45},
        {id: "#card-2", endTranslateX: -1000, rotate: -30},
        {id: "#card-3", endTranslateX: -2000, rotate: 45},
        {id: "#card-4", endTranslateX: -1500, rotate: -30},
    ];

    // Set up horizontal scroll animation using ScrollTrigger
    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=2000px",  // Modify this value to adjust the scroll length
        scrub: 1,
        pin: true,  // Pins the section in place while scrolling
        onUpdate: (self) => {
            // Move the .wrapper-404 horizontally based on scroll position
            gsap.to(".wrapper-404", {
                x: `${-self.progress * 3000}px`,  // Modify this multiplier as needed
                duration: 1.5,
                ease: "power3.out",
            });
        }
    });

    cards.forEach((card) =>{
        ScrollTrigger.create({
            trigger: "card.id",
            start: "top top",
            end:"+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,  // Modify this multiplier as needed
                    rotate: `${card.rotate * self.progress * 2}`,
                    duration: 0.5,
                    ease: "power3.out",
                });
            }
        })
    })
});
