# `scloandt`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| guarantor | char(4) | YES |  | NULL |  |  |
| lnnum | char(5) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "guarantor": "0001",
    "lnnum": "00001",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
