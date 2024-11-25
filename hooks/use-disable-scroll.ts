import { useEffect } from "react";

const useDisableScroll = (shouldDisable = true) => {
    useEffect(() => {
        if (typeof document !== "undefined" && shouldDisable) {
            // Disable scroll
            const originalOverflow = document.body.style.overflow;
            const originalPosition = document.body.style.position;
            const originalWidth = document.body.style.width;

            document.body.style.overflow = "hidden";
            document.body.style.position = "fixed";
            document.body.style.width = "100%";

            // Cleanup: Enable scroll when unmounted
            return () => {
                document.body.style.overflow = originalOverflow || "";
                document.body.style.position = originalPosition || "";
                document.body.style.width = originalWidth || "";
            };
        }
    }, [shouldDisable]); // Re-run if shouldDisable changes
};

export default useDisableScroll;
