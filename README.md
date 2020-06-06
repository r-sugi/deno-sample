# Deno-sample in TypeScript

- 💯 Runs on [Deno](https://deno.land) (written in TypeScript)


## commands

[denon](https://github.com/denosaurs/denon)
watch file
```
denon sample2.ts
denon test test.ts
```

```debugger chrome
deno run --inspect-brk -A src/sample2.ts
open chrome://inspect/#devices
open file://
attach breakpoint
rerun the file
```

```debugger vscode
change "runtimeArgs" file path at .launch.json
push F5
```
