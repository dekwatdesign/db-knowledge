# `handicapped_hhc_care`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_hhc_care_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_hhc_care_date | date | YES |  | NULL |  |  |
| handicapped_hhc_care_visit_date | date | YES |  | NULL |  |  |
| handicapped_hhc_care_doctorcode | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_care_plan_doctorcode | char(10) | YES |  | NULL |  |  |
| handicapped_hhc_care_note | char(50) | YES |  | NULL |  |  |
| handicapped_hhc_care_plan_id | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_id | char(10) | YES |  | NULL |  |  |
| patient_hhc_plan | int(11) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_hhc_care_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
