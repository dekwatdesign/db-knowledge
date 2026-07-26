# `er_accident_type_1`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| er_accident_type_id | int(11) | NO | PRI | 0 |  |  |
| er_accident_type_name | varchar(150) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_er_accident_type_name | er_accident_type_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | er_accident_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
