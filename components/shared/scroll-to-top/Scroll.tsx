import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 0) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <main className="fixed bottom-5 right-5">
      {isVisible && (
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="bg-primary text-primary-foreground hover:bg-primary/95 hover:text-primary-foreground"
        >
          <ArrowUp />
        </Button>
      )}
    </main>
  );
}

export default ScrollToTop;
