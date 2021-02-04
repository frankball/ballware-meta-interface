[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CompiledEntityMetadata

# Interface: CompiledEntityMetadata

Defintion of metadata for business object

## Hierarchy

* **CompiledEntityMetadata**

## Table of contents

### Properties

- [application](compiledentitymetadata.md#application)
- [baseUrl](compiledentitymetadata.md#baseurl)
- [compiledCustomScripts](compiledentitymetadata.md#compiledcustomscripts)
- [customFunctions](compiledentitymetadata.md#customfunctions)
- [displayName](compiledentitymetadata.md#displayname)
- [editLayouts](compiledentitymetadata.md#editlayouts)
- [entity](compiledentitymetadata.md#entity)
- [gridLayouts](compiledentitymetadata.md#gridlayouts)
- [itemMappingScript](compiledentitymetadata.md#itemmappingscript)
- [itemReverseMappingScript](compiledentitymetadata.md#itemreversemappingscript)
- [lookups](compiledentitymetadata.md#lookups)
- [picklists](compiledentitymetadata.md#picklists)
- [stateColumn](compiledentitymetadata.md#statecolumn)

## Properties

### application

• **application**: *string*

Application scope the business object is nested in

Defined in: [entity.ts:665](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L665)

___

### baseUrl

• **baseUrl**: *string*

Base url of crud operations REST API

Defined in: [entity.ts:680](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L680)

___

### compiledCustomScripts

• `Optional` **compiledCustomScripts**: *undefined* \| [*CompiledEntityCustomScripts*](compiledentitycustomscripts.md)

Container for custom script operations

Defined in: [entity.ts:713](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L713)

___

### customFunctions

• `Optional` **customFunctions**: *undefined* \| [*EntityCustomFunction*](entitycustomfunction.md)[]

Collection of defined custom functions

Defined in: [entity.ts:718](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L718)

___

### displayName

• **displayName**: *string*

Display name of business object

Defined in: [entity.ts:675](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L675)

___

### editLayouts

• **editLayouts**: [*EditLayout*](editlayout.md)[]

Collection of defined edit layouts

Defined in: [entity.ts:728](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L728)

___

### entity

• **entity**: *string*

Unique identifier of business object

Defined in: [entity.ts:670](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L670)

___

### gridLayouts

• **gridLayouts**: [*GridLayout*](gridlayout.md)[]

Collection of defined grid layouts

Defined in: [entity.ts:723](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L723)

___

### itemMappingScript

• **itemMappingScript**: (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)) => [*CrudItem*](cruditem.md)

Map items received from API

**`param`** Unmapped item

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`returns`** Mapped item for usage in client application

Defined in: [entity.ts:690](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L690)

___

### itemReverseMappingScript

• **itemReverseMappingScript**: (`item`: [*CrudItem*](cruditem.md), `customParam`: *unknown*, `util`: [*ScriptUtil*](scriptutil.md)) => [*CrudItem*](cruditem.md)

Reverse map items for sending to API

**`param`** Item used in client application

**`param`** Current value of prepared custom param (previous result of prepareCustomParam function)

**`param`** Utility for performing misc operations

**`returns`** Mapped item for usage in API

Defined in: [entity.ts:704](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L704)

___

### lookups

• **lookups**: { `displayMember`: *string* ; `hasParam`: *boolean* ; `id`: *string* ; `identifier`: *string* ; `type`: *number* ; `valueMember`: *string*  }[]

Collection of defined lookups

Defined in: [entity.ts:733](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L733)

___

### picklists

• **picklists**: { `entity`: *string* ; `field`: *string* ; `identifier`: *string*  }[]

Collection of defined picklists

Defined in: [entity.ts:745](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L745)

___

### stateColumn

• **stateColumn**: *string*

Member of business object containing current state code

Defined in: [entity.ts:750](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L750)
