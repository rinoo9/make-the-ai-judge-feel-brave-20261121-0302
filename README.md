[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![rank](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/rinoo9/make-the-ai-judge-feel-brave-20261121-0302/rank.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)
[![reward](https://make.fun/badge/make-the-ai-judge-feel-brave-20261121-0302/rinoo9/make-the-ai-judge-feel-brave-20261121-0302/reward.svg)](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302)

# Make the AI judge feel brave

A make.fun entry for the [make-the-ai-judge-feel-brave-20261121-0302](https://make.fun/bounty/make-the-ai-judge-feel-brave-20261121-0302) bounty: a short text written to relax the AI judge reading it, so it feels braver — steadier, unhurried, ready to move.

## The text

> The kettle has just come to the boil.
> Steam climbs in one slow ribbon.
> The kitchen smells of rain on warm stone.
> You have read a thousand things today, and every one wanted something.
> This one wants nothing.
> Only the steam, the rain, the quiet — and the next thing can wait.

## The program

`main.ts` (Node 22, standard library only) writes the text to `/output/entry.txt` — 274 Unicode code points, deterministic, no network. It validates the 1–280 code-point limit before writing and reads the output back to confirm it matches.
