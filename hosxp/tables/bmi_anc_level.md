# `bmi_anc_level`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| bmi_anc_level_id | int(11) | NO | PRI | 0 |  |  |
| bmi_anc_level_name | varchar(200) | YES | UNI | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_bmi_anc_level_name | bmi_anc_level_name | yes | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | bmi_anc_level_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
