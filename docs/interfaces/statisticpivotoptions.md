[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / StatisticPivotOptions

# Interface: StatisticPivotOptions

Options for pivot grid

## Hierarchy

* **StatisticPivotOptions**

## Table of contents

### Properties

- [fields](statisticpivotoptions.md#fields)
- [showRowGrandTotals](statisticpivotoptions.md#showrowgrandtotals)
- [showRowTotals](statisticpivotoptions.md#showrowtotals)

## Properties

### fields

• **fields**: { `area?`: *undefined* \| *row* \| *column* \| *data* ; `caption`: *string* ; `dataField`: *string* ; `dataType?`: *undefined* \| *string* \| *number* \| *date* ; `expanded?`: *undefined* \| *boolean* ; `format?`: *undefined* \| *billions* \| *currency* \| *day* \| *decimal* \| *exponential* \| *fixedPoint* \| *largeNumber* \| *longDate* \| *longTime* \| *millions* \| *millisecond* \| *month* \| *monthAndDay* \| *monthAndYear* \| *percent* \| *quarter* \| *quarterAndYear* \| *shortDate* \| *shortTime* \| *thousands* \| *trillions* \| *year* \| *dayOfWeek* \| *hour* \| *longDateLongTime* \| *minute* \| *second* \| *shortDateShortTime* ; `groupInterval?`: *undefined* \| *day* \| *month* \| *quarter* \| *year* \| *dayOfWeek* ; `precision?`: *undefined* \| *number* ; `showGrandTotals?`: *undefined* \| *boolean* ; `showTotals?`: *undefined* \| *boolean* ; `summaryType?`: *undefined* \| *avg* \| *count* \| *custom* \| *max* \| *min* \| *sum* ; `width?`: *undefined* \| *number*  }[]

List of pivot fields

Defined in: [statistic.ts:234](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/statistic.ts#L234)

___

### showRowGrandTotals

• `Optional` **showRowGrandTotals**: *undefined* \| *boolean*

Show summary values of entire column

Defined in: [statistic.ts:229](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/statistic.ts#L229)

___

### showRowTotals

• `Optional` **showRowTotals**: *undefined* \| *boolean*

Show summary values of hierarchy levels

Defined in: [statistic.ts:224](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/statistic.ts#L224)
