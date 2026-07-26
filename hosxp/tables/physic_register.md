# `physic_register`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| physic_register_id | int(11) | NO | PRI | 0 |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| physic_register_date | date | YES |  | NULL |  |  |
| physic_type_id | int(11) | YES | MUL | NULL |  |  |
| physic_status_id | int(11) | YES | MUL | NULL |  |  |
| physic_register_dch_date | date | YES |  | NULL |  |  |
| physic_dch_status_id | int(11) | YES | MUL | NULL |  |  |
| physic_register_doctor | varchar(6) | YES |  | NULL |  |  |
| physic_register_doctor_etn | int(11) | YES |  | NULL |  |  |
| physic_register_cc | text | YES |  | NULL |  |  |
| physic_register_consult_pt | text | YES |  | NULL |  |  |
| physic_register_staff | varchar(255) | YES |  | NULL |  |  |
| physic_register_lastupdate | datetime | YES |  | NULL |  |  |
| physic_register_time | time | YES |  | NULL |  |  |
| physic_register_depcode | char(3) | YES |  | NULL |  |  |
| physic_register_doctor_pt | varchar(6) | YES |  | NULL |  |  |
| physic_register_note | text | YES |  | NULL |  |  |
| physic_register_doctor_etn1 | char(1) | YES |  | NULL |  |  |
| physic_register_doctor_etn2 | char(1) | YES |  | NULL |  |  |
| physic_group_id | int(11) | YES |  | NULL |  |  |
| physic_register_doctor_ot | varchar(6) | YES |  | NULL |  |  |
| physic_register_doctor_po | varchar(6) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| ix_hn | hn | no | 1 |
| ix_physic_dch_status_id | physic_dch_status_id | no | 1 |
| ix_physic_status_id | physic_status_id | no | 1 |
| ix_physic_type_id | physic_type_id | no | 1 |
| PRIMARY | physic_register_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
