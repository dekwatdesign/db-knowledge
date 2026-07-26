# `person_women`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_women_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | UNI | NULL |  |  |
| women_birth_control_id | int(11) | YES |  | NULL |  |  |
| child_alive_count | int(11) | YES |  | NULL |  |  |
| pregnancy_count | int(11) | YES |  | NULL |  |  |
| last_abortion_year | int(11) | YES |  | NULL |  |  |
| last_child_dead_still_birth | int(11) | YES |  | NULL |  |  |
| last_child_dead_still_birth_1y | int(11) | YES |  | NULL |  |  |
| discharge | char(1) | YES | MUL | NULL |  |  |
| discharge_date | date | YES |  | NULL |  |  |
| out_region | char(1) | YES | MUL | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| last_update | datetime | YES |  | NULL |  |  |
| nofp_type_id | int(11) | YES |  | NULL |  |  |
| regdate | date | YES |  | NULL |  |  |
| total_child_count | int(11) | YES |  | NULL |  |  |
| child_dead_still_birth_count | int(11) | YES |  | NULL |  |  |
| child_abortion_count | int(11) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_discharge | discharge | no | 1 |
| ix_discharge_region | discharge | no | 1 |
| ix_discharge_region | out_region | no | 2 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_out_region | out_region | no | 1 |
| ix_person_id | person_id | yes | 1 |
| PRIMARY | person_women_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
