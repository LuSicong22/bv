#!/bin/bash
for f in *.docx; do
    base="${f%.docx}"
    pandoc "$f" -t markdown -o "$base.md"
done