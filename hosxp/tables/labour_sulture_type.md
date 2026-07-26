# `labour_sulture_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| sulture_type_id | int(11) | NO | PRI | 0 |  |  |
| sulture_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_sulture_type_name | sulture_type_name | yes | 1 |
| PRIMARY | sulture_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "sulture_type_id": 1,
    "sulture_type_name": "suture  all cutget 2/0 by interuped",
    "hos_guid": "{1DA08F39-E5DA-11DF-BBCF-F3CA1C2D0000}"
  },
  {
    "sulture_type_id": 2,
    "sulture_type_name": "suture all cutget  2/0 by subcutaneous",
    "hos_guid": "{1DA0961F-E5DA-11DF-BBCF-F3CA1C2D0000}"
  }
]
```
