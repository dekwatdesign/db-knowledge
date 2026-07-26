# `refer_point_list`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| name | varchar(50) | NO | PRI |  |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| PRIMARY | name | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (3)

```json
[
  {
    "name": "ER",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "IPD",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "name": "OPD",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
