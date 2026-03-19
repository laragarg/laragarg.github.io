/**
 * Calculates reading time based on word count
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200)
 * @returns Reading time string (e.g., "5 min read")
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): string {
  // Remove markdown syntax and extra whitespace
  const cleanText = text
    .replace(/[#*`>\-\[\]]/g, '') // Remove markdown characters
    .replace(/\s+/g, ' ')          // Normalize whitespace
    .trim()

  // Count words
  const wordCount = cleanText.split(' ').filter(word => word.length > 0).length

  // Calculate reading time
  const minutes = Math.ceil(wordCount / wordsPerMinute)

  return `${minutes} min read`
}
