# `dw_refer_person_refer`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_refer_id | int(11) | NO | PRI | 0 |  |  |
| person_guid | varchar(38) | YES |  | NULL |  |  |
| cid | char(13) | YES | MUL | NULL |  |  |
| refer_from_hospcode | varchar(9) | YES | MUL | NULL |  |  |
| refer_to_hospcode | varchar(9) | YES | MUL | NULL |  |  |
| refer_date | date | YES |  | NULL |  |  |
| refer_time | time | YES |  | NULL |  |  |
| refer_staff_name | varchar(150) | YES |  | NULL |  |  |
| refer_doctor_name | varchar(150) | YES |  | NULL |  |  |
| refer_note | text | YES |  | NULL |  |  |
| person_refer_cause_id | int(11) | YES |  | NULL |  |  |
| person_refer_point_id | int(11) | YES |  | NULL |  |  |
| person_refer_status_id | int(11) | YES |  | NULL |  |  |
| pttype | char(2) | YES |  | NULL |  |  |
| person_refer_type_id | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_refer_from_hospcode | refer_from_hospcode | no | 1 |
| ix_refer_to_hospcode | refer_to_hospcode | no | 1 |
| PRIMARY | person_refer_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
