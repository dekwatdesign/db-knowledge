# `meal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| meal | tinyint(4) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | meal | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "meal": 1,
    "name": "เช้า",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "meal": 2,
    "name": "เที่ยง",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "meal": 3,
    "name": "เย็น",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
