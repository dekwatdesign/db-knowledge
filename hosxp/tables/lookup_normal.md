# `lookup_normal`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lookup_id | char(1) | NO | PRI |  |  |  |
| lookup_name | varchar(100) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_lookup_name | lookup_name | yes | 1 |
| PRIMARY | lookup_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "lookup_id": "N",
    "lookup_name": "ผิดปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  },
  {
    "lookup_id": "Y",
    "lookup_name": "ปกติ",
    "hos_guid": null,
    "hos_guid_ext": null
  }
]
```
