import { gameStats, payoutTable } from "@/lib/content"
import Image from "next/image"

export function GameStatsSection() {
  // Проверяем, иконка это PNG/JPG или эмодзи
  const isImg = (v: string): boolean =>
    /\.(png|jpg|jpeg|webp|gif|svg)$/i.test(v)

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-[#003f15] via-[#000000] to-black">
      <div className="max-w-6xl mx-auto">
        {/* Game Overview Table */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gold">
            Game Overview
          </h2>
          <div className="bg-neutral-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">Provider</div>
                <div className="text-white text-lg">{gameStats.provider}</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">RTP</div>
                <div className="text-white text-lg">{gameStats.rtp}</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">Volatility</div>
                <div className="text-white text-lg">{gameStats.volatility}</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">Max Win</div>
                <div className="text-white text-lg">{gameStats.maxWin}</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">Min Bet</div>
                <div className="text-white text-lg">{gameStats.minBet}</div>
              </div>
              <div className="text-center p-4 bg-gray-700/30 rounded-lg">
                <div className="text-gold font-semibold">Max Bet</div>
                <div className="text-white text-lg">{gameStats.maxBet}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Payout Table */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gold">
            Symbol Payouts
          </h2>
          <div className="bg-neutral-900/70 backdrop-blur-sm rounded-2xl p-6 border border-gold/20">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold/20">
                    <th className="text-left py-3 px-4 text-gold font-semibold">
                      Symbol
                    </th>
                    <th className="text-left py-3 px-4 text-gold font-semibold">
                      Payout
                    </th>
                    <th className="text-left py-3 px-4 text-gold font-semibold">
                      Description
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {payoutTable.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700/30 hover:bg-gray-700/20"
                    >
                      <td className="py-3 px-4 text-2xl">
                        {isImg(item.symbol) ? (
                          <Image
                            src={item.symbol}
                            alt={item.description}
                            width={64}
                            height={64}
                            className="inline-block"
                          />
                        ) : (
                          <span>{item.symbol}</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-white font-semibold">
                        {item.payout}
                      </td>
                      <td className="py-3 px-4 text-gray-300">
                        {item.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
