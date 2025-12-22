# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR, using Biome for linting and formatting, and Bun as the runtime/package manager.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Code Quality

This project uses [Biome](https://biomejs.dev/) for linting and formatting, providing fast, zero-configuration code quality tools.

- Run `bun lint` to check for issues
- Run `bun lint:fix` to automatically fix linting issues
- Run `bun format` to format code

Configuration can be customized in `biome.json`.
