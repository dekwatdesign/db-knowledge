# `drugitems_picture`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| icode | varchar(7) | NO | PRI |  |  |  |
| image1 | longblob | YES |  | NULL |  |  |
| image2 | longblob | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | icode | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "icode": "1000008",
    "image1": "[MASKED_AVATAR]",
    "image2": null,
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "icode": "1000017",
    "image1": "[MASKED_AVATAR]",
    "image2": null,
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
