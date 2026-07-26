# `person_health_club_bmi`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_health_club_bmi_id | int(11) | NO | PRI | 0 |  |  |
| person_health_club_bmi_summary_id | int(11) | YES | MUL | NULL |  |  |
| person_health_club_member_id | int(11) | YES |  | NULL |  |  |
| bmi_result | double(15,3) | YES |  | NULL |  |  |
| bmi_date | date | YES |  | NULL |  |  |
| waist_result | double(15,3) | YES |  | NULL |  |  |
| sex | char(1) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hospcode | char(5) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hospcode | hospcode | no | 1 |
| ix_hos_guid | hos_guid | no | 1 |
| ix_person_health_club_bmi_summary_id | person_health_club_bmi_summary_id | no | 1 |
| PRIMARY | person_health_club_bmi_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
