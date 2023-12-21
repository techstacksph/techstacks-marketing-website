import striptags from 'striptags';

export function createExcerpt(value: string, maxLength = 160) {
  const $value = striptags(value);

  if ($value.length <= maxLength) return $value;

  return `${$value.slice(0, maxLength)}...`;
}
