 export function formatTimeSince(dateString: string) {
  const posted = new Date(dateString);
  const now = new Date();
  const elapsed = now.getTime() - posted.getTime();

  const units = [
    { label: "year", ms: 1000 * 60 * 60 * 24 * 365 },
    { label: "month", ms: 1000 * 60 * 60 * 24 * 30 },
    { label: "week", ms: 1000 * 60 * 60 * 24 * 7 },
    { label: "day", ms: 1000 * 60 * 60 * 24 },
    { label: "hour", ms: 1000 * 60 * 60 },
    { label: "minute", ms: 1000 * 60 },
  ];

  for (const unit of units) {
    const value = Math.floor(elapsed / unit.ms);
    if (value > 0) {
      return `${value} ${unit.label}${value > 1 ? "s" : ""} ago`;
    }
  }
  return "just now";
}