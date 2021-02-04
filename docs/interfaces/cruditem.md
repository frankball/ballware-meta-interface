[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / CrudItem

# Interface: CrudItem

Interface for generic business object types

## Hierarchy

* *Record*<*string*, [*ValueType*](../modules.md#valuetype)\>

  ↳ **CrudItem**

## Table of contents

### Properties

- [CreateStamp](cruditem.md#createstamp)
- [CreatorId](cruditem.md#creatorid)
- [Id](cruditem.md#id)
- [LastChangeStamp](cruditem.md#lastchangestamp)
- [LastChangerId](cruditem.md#lastchangerid)

## Properties

### CreateStamp

• `Optional` **CreateStamp**: *undefined* \| Date

Timestamp of creation time

Defined in: [cruditem.ts:38](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/cruditem.ts#L38)

___

### CreatorId

• `Optional` **CreatorId**: *undefined* \| *string*

Identifier of creating user

Defined in: [cruditem.ts:33](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/cruditem.ts#L33)

___

### Id

• **Id**: *string*

Unique identifier of object

Defined in: [cruditem.ts:28](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/cruditem.ts#L28)

___

### LastChangeStamp

• `Optional` **LastChangeStamp**: *undefined* \| Date

Timestamp of last update

Defined in: [cruditem.ts:48](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/cruditem.ts#L48)

___

### LastChangerId

• `Optional` **LastChangerId**: *undefined* \| *string*

Identifier of last updating user

Defined in: [cruditem.ts:43](https://github.com/frankball/ballware-meta-interface/blob/d19dcf1/src/cruditem.ts#L43)
