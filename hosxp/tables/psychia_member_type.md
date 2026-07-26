# `psychia_member_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| hn | varchar(9) | YES | MUL | NULL |  |  |
| psychia_type_id | int(11) | YES |  | NULL |  |  |
| psychia_member_type_id | int(11) | NO | PRI | 0 |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hn | hn | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_unique | hn | yes | 1 |
| ix_unique | psychia_type_id | yes | 2 |
| PRIMARY | psychia_member_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
