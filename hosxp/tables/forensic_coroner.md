# `forensic_coroner`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| forensic_coroner_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES |  | NULL |  |  |
| forensic_coroner_mission | varchar(250) | YES |  | NULL |  |  |
| forensic_coroner_type_id | int(11) | YES | MUL | NULL |  |  |
| forensic_death_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_Refforensic_coroner_type34 | forensic_coroner_type_id | no | 1 |
| ix_Refforensic_death35 | forensic_death_id | no | 1 |
| PRIMARY | forensic_coroner_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
