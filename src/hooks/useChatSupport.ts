import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    // script.src = "//code.jivosite.com/widget/mWunVTaM0Q";

    document.body.appendChild(script);
  }, []);
};
