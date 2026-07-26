# `person_bc_target`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_bc_target_id | int(11) | NO | PRI | 0 |  |  |
| person_id | int(11) | YES | MUL | NULL |  |  |
| register_date | date | YES |  | NULL |  |  |
| has_breast_cancer | char(1) | YES |  | NULL |  |  |
| has_breast_abnormal | char(1) | YES |  | NULL |  |  |
| self_examination_count | int(11) | YES |  | NULL |  |  |
| screen_count | int(11) | YES |  | NULL |  |  |
| old_case_cancer | char(1) | YES |  | NULL |  |  |
| old_case_abnormal | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_id | person_id | no | 1 |
| PRIMARY | person_bc_target_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
