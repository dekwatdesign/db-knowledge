# `provis_pttype`

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

## Sample rows (3)

```json
[
  {
    "code": "0",
    "name": "ผู้ป่วยเก่า",
    "hos_guid": null
  },
  {
    "code": "1",
    "name": "ผู้ป่วยใหม่",
    "hos_guid": null
  },
  {
    "code": "2",
    "name": "ผู้รับบริการอื่นๆ",
    "hos_guid": null
  }
]
```
