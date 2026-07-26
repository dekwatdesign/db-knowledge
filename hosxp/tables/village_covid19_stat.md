# `village_covid19_stat`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| village_covid19_stat_id | int(11) | NO | PRI | 0 |  |  |
| village_id | int(11) | YES | MUL | NULL |  |  |
| person_type_id | int(11) | YES |  | NULL |  |  |
| person_risk_type_id | int(11) | YES |  | NULL |  |  |
| dose_no | int(11) | YES | MUL | NULL |  |  |
| vaccination_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_village_id | village_id | no | 1 |
| ix_village_id_risk | village_id | yes | 1 |
| ix_village_id_risk | person_risk_type_id | yes | 2 |
| ix_village_id_risk | dose_no | yes | 3 |
| ix_village_id_risk_index | dose_no | yes | 1 |
| ix_village_id_risk_index | person_risk_type_id | yes | 2 |
| ix_village_id_risk_index | village_id | yes | 3 |
| PRIMARY | village_covid19_stat_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
