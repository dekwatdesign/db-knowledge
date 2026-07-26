# `pt_subtype`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| pt_subtype | int(11) | NO | PRI | 0 |  |  |
| name | varchar(200) | YES | MUL | NULL |  |  |
| pcu | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_name | name | no | 1 |
| PRIMARY | pt_subtype | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "pt_subtype": 0,
    "name": "ซ้ำในปี",
    "pcu": null,
    "hos_guid": null
  },
  {
    "pt_subtype": 1,
    "name": "เก่าในปี",
    "pcu": null,
    "hos_guid": null
  },
  {
    "pt_subtype": 2,
    "name": "ใหม่",
    "pcu": null,
    "hos_guid": null
  },
  {
    "pt_subtype": 3,
    "name": "นิติจิตเวช",
    "pcu": null,
    "hos_guid": null
  }
]
```
