# `membrane_explode_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| membrane_explode_type_id | int(11) | NO | PRI | 0 |  |  |
| membrane_explode_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_membrane_explode_type_name | membrane_explode_type_name | yes | 1 |
| PRIMARY | membrane_explode_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (2)

```json
[
  {
    "membrane_explode_type_id": 1,
    "membrane_explode_type_name": "ARM",
    "hos_guid": null
  },
  {
    "membrane_explode_type_id": 2,
    "membrane_explode_type_name": "Sapontaneous",
    "hos_guid": null
  }
]
```
