import {allData} from './allData'

const labeling = {
  totalNisaAssets: allData.data1, //つみたてNISA資産
  totalInvestment: allData.data2, // 投資額
  totalReturn: allData.data3, // トータルリターン
  totalReturnPercentage: allData.data4, // トータルリターンパーセント
  label: allData.date, // 日付
}

const annualProfit = labeling.label.map((date, i) => {
  const index = i + 1
  return {
    [date]: Number(labeling.totalReturnPercentage[i]) / index * 12
  }
});

console.log(annualProfit);