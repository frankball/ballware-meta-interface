[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / EntityCustomFunction

# Interface: EntityCustomFunction

Interface of custom crud function definition

## Hierarchy

* **EntityCustomFunction**

## Table of contents

### Properties

- [editLayout](entitycustomfunction.md#editlayout)
- [entity](entitycustomfunction.md#entity)
- [externalEditor](entitycustomfunction.md#externaleditor)
- [icon](entitycustomfunction.md#icon)
- [id](entitycustomfunction.md#id)
- [multi](entitycustomfunction.md#multi)
- [text](entitycustomfunction.md#text)
- [type](entitycustomfunction.md#type)

## Properties

### editLayout

• **editLayout**: *string*

Identifier of edit layout definition used by function.
If not set the primary edit layout will be used

Defined in: [entity.ts:82](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L82)

___

### entity

• `Optional` **entity**: *undefined* \| *string*

Identifier of owning business object

Defined in: [entity.ts:43](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L43)

___

### externalEditor

• `Optional` **externalEditor**: *undefined* \| *boolean*

Set if function uses a propritary editor.
If set, prepareCustomFunction has to supply editor url as callback parameter

Defined in: [entity.ts:76](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L76)

___

### icon

• `Optional` **icon**: *undefined* \| *string*

CSS class for icon

Defined in: [entity.ts:65](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L65)

___

### id

• **id**: *string*

Unique id of custom function

Defined in: [entity.ts:48](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L48)

___

### multi

• `Optional` **multi**: *undefined* \| *boolean*

Set if function supports batch operations of multiple business object instances

Defined in: [entity.ts:70](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L70)

___

### text

• **text**: *string*

Display text of function

Defined in: [entity.ts:60](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L60)

___

### type

• **type**: *add* \| *edit*

Function operation type
add: Function is creating new business objects
edit: Function is editing existing selected business objects

Defined in: [entity.ts:55](https://github.com/frankball/ballware-meta-interface/blob/6b9dc3f/src/entity.ts#L55)
