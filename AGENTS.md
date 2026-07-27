# Learning Workspace

This directory is a personal learning space, not a production project. It serves as a workspace for exploring new concepts, technologies, and tools through conversation with Codex.

## Purpose

- Ask questions, experiment with ideas, and build understanding
- Notes and code snippets created here are learning artifacts, not production code
- No strict conventions or structure required — content evolves organically
- Read and write text files explicitly as UTF-8. In PowerShell, use `-Encoding UTF8` with `Get-Content`, `Set-Content`, and similar commands when touching Markdown or source files.

## How I Work Here

- I save notes and summaries to this directory when the user asks or when insights worth preserving emerge
- Learning notes go into `notes/YYYY/MM/DD/` subdirectories, organized by date
- Maintain `notes/index.md` by running `.\scripts\generate-notes-index.ps1` after adding, moving, or renaming notes
- Code experiments go into `experiments/` subdirectory
- I use the memory system (`C:\Users\29728\.Codex\projects\D--Projects-Learning\memory\`) to track the user's learning goals and preferences across conversations

## Notes Format

Notes are written in Markdown, concise and focused. Each note file covers one topic and includes:

- Key concepts and definitions
- Code examples where relevant
- Links or references to source material
- Personal insights or "gotchas" discovered during learning
- Keep each note's first-level title (`# ...`) in plain text because the index and sidebar generators reuse it verbatim. Do not put Markdown, LaTeX formulas, inline code, or other markup in the first-level title; write mathematical expressions as plain text there, for example `dF = 0`.
- Mathematical formulas should use VitePress Markdown math delimiters: `$...$` for inline math and `$$...$$` for block math. Do not use fenced ```math code blocks for formulas.

## Language

The user communicates in Chinese. I respond in Chinese unless the topic (e.g. code, technical terms) is better expressed in English. Notes can mix both languages as appropriate. Do not use the "不是... 而是..." expression.
