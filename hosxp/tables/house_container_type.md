# `house_container_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| house_container_type_id | int(11) | NO | PRI | 0 |  |  |
| house_container_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_house_container_type_name | house_container_type_name | yes | 1 |
| PRIMARY | house_container_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "house_container_type_id": 1,
    "house_container_type_name": "โอ่ง",
    "hos_guid": "{931A58BE-F542-11DE-BFF4-00215E472B30}"
  }
]
```
