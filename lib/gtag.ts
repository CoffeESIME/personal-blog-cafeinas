
declare global {
  interface Window {
    gtag: (type: string, id: string, options: { page_path: string }) => void;
  }
}

export const reportPageView = (url: string) => {
  if (typeof window !== "undefined") {
    window.gtag("config", 'none id', {
      page_path: url,
    });
  }
};
