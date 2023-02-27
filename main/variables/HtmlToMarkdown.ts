import turndown from 'turndown';

export default function htmlToMarkdown(html: string): string {
  var turndownService = new turndown();
  return turndownService.turndown(html);
}
