# `handicapped_certificate_deformed`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_deformed_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_deformed_date | date | YES |  | NULL |  |  |
| handicapped_certificate_deformed_note | char(50) | YES |  | NULL |  |  |
| handicapped_deformed_id | int(11) | YES | MUL | NULL |  |  |
| person_deformed_level_id | int(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_card_icd10 | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_id | int(11) | YES |  | NULL |  |  |
| person_deformed_cause_type_id | int(11) | YES |  | NULL |  |  |
| person_deformed_type_id | int(11) | YES |  | NULL |  |  |
| handicapped_rehabilitation_id | char(10) | YES |  | NULL |  |  |
| handicapped_rehabilitation_detail | varchar(255) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_Refperson_deformed_equipment3 | handicapped_deformed_id | no | 1 |
| ix_Refperson_deformed_level2 | person_deformed_level_id | no | 1 |
| PRIMARY | handicapped_certificate_deformed_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
