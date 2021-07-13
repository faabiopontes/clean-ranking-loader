# Tips

## Domain

In the `domain/entity` folder everything **WILL** be used by the whole application
[Interface VS Type](https://www.educba.com/typescript-type-vs-interface)

## Layers

1. Presentation (only knows the `Domain`)
2. Domain (doesn't know `Data` and `Infrastructure`)
3. Data (doesn't know `Infrastructure` and `Presentation`)
4. Infrastructure (doesn't know `Domain` and `Presentation`)

One layer can only know about the one before it, like in a cake slice 🍰
