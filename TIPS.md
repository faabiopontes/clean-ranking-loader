# Tips

## Domain

In the `domain/entity` folder everything **WILL** be used by the whole application
[Interface VS Type](https://www.educba.com/typescript-type-vs-interface)

## Layers

1. Domain (doesn't know `Data` and `Infrastructure`)
2. Data (doesn't know `Infrastructure`)
3. Infrastructure (doesn't know `Domain`)

One layer can only know about the one before it, like in a cake slice 🍰
