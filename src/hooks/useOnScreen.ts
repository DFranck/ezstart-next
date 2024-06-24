import { useEffect, useMemo, useState } from "react";

// Type pour les options de l'IntersectionObserver
interface UseOnScreenOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

// Hook pour détecter si un élément est visible à l'écran
const useOnScreen = (
  ref: React.RefObject<Element>,
  options?: UseOnScreenOptions
): boolean => {
  const [isIntersecting, setIntersecting] = useState<boolean>(false);

  // Utiliser useMemo pour mémoriser l'instance de l'observer
  const observer = useMemo(() => {
    // Assurer que IntersectionObserver est disponible (exécution côté client)
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      return new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting);
        },
        {
          root: options?.root || null,
          rootMargin: options?.rootMargin || "0px",
          threshold: options?.threshold || 0,
        }
      );
    }
    return null; // Retourner null si non disponible
  }, [options?.root, options?.rootMargin, options?.threshold]);

  useEffect(() => {
    if (!observer || !ref.current) return; // S'assurer que l'observer et la ref existent

    observer.observe(ref.current); // Commencer à observer l'élément

    return () => {
      if (observer) {
        observer.disconnect(); // Nettoyer l'observer à la désinscription
      }
    };
  }, [ref, observer]);

  return isIntersecting;
};

export default useOnScreen;
