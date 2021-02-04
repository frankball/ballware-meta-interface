[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledStatistic

# Interface: CompiledStatistic

Compiled metadta for statistic container

## Hierarchy

* **CompiledStatistic**

## Table of contents

### Properties

- [customScripts](compiledstatistic.md#customscripts)
- [identifier](compiledstatistic.md#identifier)
- [layout](compiledstatistic.md#layout)
- [mappingScript](compiledstatistic.md#mappingscript)
- [name](compiledstatistic.md#name)

## Properties

### customScripts

• `Optional` **customScripts**: *undefined* \| [*CompiledStatisticCustomScripts*](compiledstatisticcustomscripts.md)

Compiled custom scripts for statistic layout

Defined in: [statistic.ts:418](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L418)

___

### identifier

• **identifier**: *string*

Unique identifier of statistic container

Defined in: [statistic.ts:380](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L380)

___

### layout

• `Optional` **layout**: *undefined* \| [*StatisticLayout*](statisticlayout.md)

Layout of statistic container

Defined in: [statistic.ts:390](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L390)

___

### mappingScript

• `Optional` **mappingScript**: *undefined* \| (`data`: *Record*<*string*, *unknown*\>[], `layout`: [*StatisticLayout*](statisticlayout.md), `customParam`: *Record*<*string*, *unknown*\>, `params`: *Record*<*string*, *unknown*\>, `lookups`: *Record*<*string*, *unknown*\>, `util`: [*ScriptUtil*](scriptutil.md), `callback`: (`layout`: [*StatisticLayout*](statisticlayout.md), `data`: *Record*<*string*, *unknown*\>[]) => *void*) => *void*

Mapping script to prepare fetched data for statistic display

**`param`** Fetched raw data

**`param`** Layout for display statistic

**`param`** Custom param prepared by containing page

**`param`** Head params by containing page

**`param`** Lookups prepared by containing page

**`param`** Util for misc operations in scripts

**`param`** Callback executed after preparation of layout and data

Defined in: [statistic.ts:402](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L402)

___

### name

• **name**: *string*

Display name of statistic container

Defined in: [statistic.ts:385](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/statistic.ts#L385)
