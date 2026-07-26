# `height_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| height_level | int(11) | NO | PRI | 0 |  |  |
| name | varchar(150) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | height_level | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "height_level": 1,
    "name": "เตี้ย",
    "hos_guid": null
  },
  {
    "height_level": 2,
    "name": "ค่อนข้างเตี้ย",
    "hos_guid": null
  },
  {
    "height_level": 3,
    "name": "สูงตามเกณฑ์",
    "hos_guid": null
  },
  {
    "height_level": 4,
    "name": "ค่อนข้างสูง",
    "hos_guid": null
  },
  {
    "height_level": 5,
    "name": "สูง",
    "hos_guid": null
  }
]
```
