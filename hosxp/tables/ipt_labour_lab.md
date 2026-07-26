# `ipt_labour_lab`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_labour_lab_id | int(11) | NO | PRI | 0 |  |  |
| ipt_labour_id | int(11) | YES |  | NULL |  |  |
| lab_id | int(11) | YES |  | NULL |  |  |
| lab_value | varchar(200) | YES |  | NULL |  |  |
| lab_value2 | varchar(200) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | ipt_labour_lab_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
