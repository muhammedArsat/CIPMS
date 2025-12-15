export const getCompanyDomain = (url: string): string => {
  const parsedUrl = new URL(url);
  return parsedUrl.hostname.replace("www.", "");
};
