# `opdscreen_pregnancy`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| vn | varchar(13) | NO | PRI |  |  |  |
| pe1 | int(11) | YES |  | NULL |  |  |
| pe2 | int(11) | YES |  | NULL |  |  |
| fhs | int(11) | YES |  | NULL |  |  |
| pv | double(15,3) | YES |  | NULL |  |  |
| eff | double(15,3) | YES |  | NULL |  |  |
| station | int(11) | YES |  | NULL |  |  |
| sc_pg_membrane_id | int(11) | YES |  | NULL |  |  |
| sc_pg_af_id | int(11) | YES |  | NULL |  |  |
| sc_pg_presentation_id | int(11) | YES |  | NULL |  |  |
| staff | varchar(25) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | vn | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
