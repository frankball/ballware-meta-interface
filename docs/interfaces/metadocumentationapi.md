[@ballware/meta-interface](../README.md) / [Exports](../modules.md) / MetaDocumentationApi

# Interface: MetaDocumentationApi

Interface for documentation viewer operations

## Hierarchy

* **MetaDocumentationApi**

## Table of contents

### Properties

- [loadDocumentationForEntity](metadocumentationapi.md#loaddocumentationforentity)

## Properties

### loadDocumentationForEntity

• **loadDocumentationForEntity**: (`token`: *string*, `entity`: *string*) => *Promise*<*unknown*\>

Fetch documentation for business object type

**`param`** Access token required for authentication

**`param`** Requested business object type

**`returns`** Promise containing rich text for rendering documentation

Defined in: [documentation.ts:19](https://github.com/frankball/ballware-meta-interface/blob/08dd5e4/src/documentation.ts#L19)
