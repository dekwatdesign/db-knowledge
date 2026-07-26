# `provis_nlevel`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| code | char(1) | NO | PRI |  |  |  |
| name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_name | name | yes | 1 |
| PRIMARY | code | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (5)

```json
[
  {
    "code": "1",
    "name": "ต่ำกว่าเกณฑ์",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ค่อนข้างต่ำ",
    "hos_guid": null
  },
  {
    "code": "3",
    "name": "ปกติ",
    "hos_guid": null
  },
  {
    "code": "4",
    "name": "ค่อนข้างสูง",
    "hos_guid": null
  },
  {
    "code": "5",
    "name": "สูงเกินเกณฑ์",
    "hos_guid": null
  }
]
```
