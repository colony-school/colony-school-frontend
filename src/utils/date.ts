/**
 * Converts a month number into a 3 letter abbreviation for that month
 * 
 * e.g. 2 -> FEB
 * @param month Month number
 * @returns 3 letter month
 */
export function to3LetterMonth(month: number): string {
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return months[month - 1];
}
