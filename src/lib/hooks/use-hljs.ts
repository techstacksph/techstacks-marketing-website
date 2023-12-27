import 'highlight.js/styles/github-dark-dimmed.min.css';
import hljs from 'highlight.js';
import { useEffect } from 'react';

export function useHLJS() {
  useEffect(() => {
    hljs.configure({ cssSelector: '[data-hljs] pre:has(code) > code' });
    hljs.highlightAll();
  }, []);
}
