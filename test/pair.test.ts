import { Token, Pair } from '../src'

describe('Pair', () => {
  it('should correctly compute the pool address', () => {
    const tokenA = new Token(43113, '0x809Efde6011DD5D641394f03f3F260B43D083a32', 18, 'WAR', 'Ares Token')
    const tokenB = new Token(43113, '0xc676516F9fFD816a13D4a763b13BC0385A3d6567', 18, 'WMETIS', 'Wrapped Metis')
    const result = Pair.getAddress(tokenA, tokenB)

    expect(result.toLowerCase()).toEqual('0x1b4dA3AB2c909F53891D8E6BE09Ff43f5e543D6d'.toLowerCase())
  })

  // describe('#getAddress', () => {
  //   it('returns the correct address', () => {
  //     expect(Pair.getAddress(USDC, DAI)).toEqual('0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5')
  //   })
  // })

  // describe('#token0', () => {
  //   it('always is the token that sorts before', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token0).toEqual(DAI)
  //     expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token0).toEqual(DAI)
  //   })
  // })
  // describe('#token1', () => {
  //   it('always is the token that sorts after', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).token1).toEqual(USDC)
  //     expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).token1).toEqual(USDC)
  //   })
  // })
  // describe('#reserve0', () => {
  //   it('always comes from the token that sorts before', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve0).toEqual(
  //       new TokenAmount(DAI, '101')
  //     )
  //     expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve0).toEqual(
  //       new TokenAmount(DAI, '101')
  //     )
  //   })
  // })
  // describe('#reserve1', () => {
  //   it('always comes from the token that sorts after', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserve1).toEqual(
  //       new TokenAmount(USDC, '100')
  //     )
  //     expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserve1).toEqual(
  //       new TokenAmount(USDC, '100')
  //     )
  //   })
  // })

  // describe('#token0Price', () => {
  //   it('returns price of token0 in terms of token1', () => {
  //     expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token0Price).toEqual(
  //       new Price(DAI, USDC, '100', '101')
  //     )
  //     expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token0Price).toEqual(
  //       new Price(DAI, USDC, '100', '101')
  //     )
  //   })
  // })

  // describe('#token1Price', () => {
  //   it('returns price of token1 in terms of token0', () => {
  //     expect(new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100')).token1Price).toEqual(
  //       new Price(USDC, DAI, '101', '100')
  //     )
  //     expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '101')).token1Price).toEqual(
  //       new Price(USDC, DAI, '101', '100')
  //     )
  //   })
  // })

  // describe('#priceOf', () => {
  //   const pair = new Pair(new TokenAmount(USDC, '101'), new TokenAmount(DAI, '100'))
  //   it('returns price of token in terms of other token', () => {
  //     expect(pair.priceOf(DAI)).toEqual(pair.token0Price)
  //     expect(pair.priceOf(USDC)).toEqual(pair.token1Price)
  //   })

  //   it('throws if invalid token', () => {
  //     expect(() => pair.priceOf(WETH[ChainId.MAINNET])).toThrow('TOKEN')
  //   })
  // })

  // describe('#reserveOf', () => {
  //   it('returns reserves of the given token', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '101')).reserveOf(USDC)).toEqual(
  //       new TokenAmount(USDC, '100')
  //     )
  //     expect(new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(USDC)).toEqual(
  //       new TokenAmount(USDC, '100')
  //     )
  //   })

  //   it('throws if not in the pair', () => {
  //     expect(() =>
  //       new Pair(new TokenAmount(DAI, '101'), new TokenAmount(USDC, '100')).reserveOf(WETH[ChainId.MAINNET])
  //     ).toThrow('TOKEN')
  //   })
  // })

  // describe('#chainId', () => {
  //   it('returns the token0 chainId', () => {
  //     expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).chainId).toEqual(ChainId.MAINNET)
  //     expect(new Pair(new TokenAmount(DAI, '100'), new TokenAmount(USDC, '100')).chainId).toEqual(ChainId.MAINNET)
  //   })
  // })
  // describe('#involvesToken', () => {
  //   expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(USDC)).toEqual(true)
  //   expect(new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(DAI)).toEqual(true)
  //   expect(
  //     new Pair(new TokenAmount(USDC, '100'), new TokenAmount(DAI, '100')).involvesToken(WETH[ChainId.MAINNET])
  //   ).toEqual(false)
  // })
})
