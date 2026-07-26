# `lr_template`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| lr_temp_id | int(11) | NO | PRI | 0 |  |  |
| lr_name | varchar(150) | YES |  | NULL |  |  |
| lr_text | longtext | YES |  | NULL |  |  |
| doctor | varchar(7) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | lr_temp_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
