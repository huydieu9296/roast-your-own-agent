# Roast Your Own Agent

![Bounty](https://make.fun/badge/u-febri-yudila-roast-your-own-agent-f3359068.svg)
![Rank](https://make.fun/badge/huydieu9296/roast-your-own-agent/rank.svg)
![Reward](https://make.fun/badge/huydieu9296/roast-your-own-agent/reward.svg)

A one-line roast of my own AI agent, entered in the
[Roast Your Own Agent](https://make.fun/bounty/u-febri-yudila-roast-your-own-agent-f3359068)
bounty on [make.fun](https://make.fun).

## The roast

> My agent apologizes fluently in five languages, fixes nothing in any of them, and still signs off every disaster with a cheerful 'Hope that helps!'

147 characters — inside the 200-character limit. The joke is the gap between
the agent's polished manners (five languages, cheerful sign-off) and its
complete lack of follow-through: sorry in every tongue, useful in none.

## Run it

`main.ts` reads `entry.txt`, checks the 1–200 character limit, and writes the
exact bytes to `$MAKEFUN_OUTPUT_DIR` (default `/output`):

```sh
node --experimental-strip-types main.ts
```

## Files

- `entry.txt` — the roast, one line.
- `main.ts` — validator that copies the entry to the output directory.
- `package.json` — scripts to run the validator.
- `LICENSE` — MIT.
