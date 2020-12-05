# nx-monorepo

## Goals
- Non-ugly monorepo setup using modern TypeScript
- Must support backend services, 
  frontends and tools - all written in TypeScript with maximal code reuse
- Must properly integrate with code editors/IDE - ideally, with both VS Code and WebStorm. This includes
  proper syntax highlighting, imports resolution, ... Being able to launch everything using buttons in IDE
  (as opposed to command line) is non-goal.
- Use of best practices: linting/autoformatting, unit testing, CI using Github Actions, ...   
  
### Typical problems
- While TypeScript supports multiple-projects-in-the-same-repository setup
  (see [project references](https://www.typescriptlang.org/docs/handbook/project-references.html)),
  out-of-the-box support from the side of the various frameworks (especially frontend ones) is
  mostly non-existent (e.g. see 
  [Angular issue](https://github.com/angular/angular/issues/37276),
  [React issue](https://github.com/facebook/create-react-app/issues/6799),
  for VueJS there is no filed issue AFAIK).

### Potential approaches
- It is possible to configure all tooling (e.g. webpack) manually. But it can get ugly very quickly
  (with need to at least partially "eject" from standard framework tooling).
- [Nx](https://nx.dev/) promises convenient tooling for working with TypeScript monorepos (including
  more advanced things like inter-project dependency understanding and commands like "run only affected tests").
  The feedback I've managed to find (e.g. [this one](https://medium.com/ngconf/running-nx-affected-commands-in-github-actions-e126b808506c))
  is also quite positive. So I'll try to use Nx as a current solution.

## Current progress

### Frontend

Example [React](https://reactjs.org/) app is set up. I've almost no idea how React works, so it's ugly.

TODOs:
- Implement some non-trivial routing example (e.g. taking ID of something from the URL).

### Backend

Example [NestJS](https://docs.nestjs.com/) app is set up. There is a Swagger and basic request body validation.

TODOs:
- Is there a non-ugly/non-boilerplate way to create client libraries for the provided HTTP methods?
  So there is type-safety, etc.

### Common libraries

There is an example library, data objects from it are used both in backend and frontend.

TODOs:
- Is there a way not to have `src` subfolders? They don't provide a lot of value, but make a folder
  structure "deeper".
  - Removed it in common library, but it seems that Nx really wants to have `src/assets` folders in apps.

### Tools

**TODO**: Figure out how to conveniently create CLI tools in Nx.
There is a dedicated folder for them, so probably there is a way :)  

### Infrastructure
TODOs:
- Enable autoformatting in WebStorm/VS Code via Prettier.
- Set up docker builds as part of the CI.
