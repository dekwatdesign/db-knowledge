# `handicapped_certificate_card`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_card_id | char(10) | NO | PRI |  |  |  |
| handicapped_patient_register_group | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_vdate | date | YES |  | NULL |  |  |
| handicapped_certificate_card_vtime | time | YES |  | NULL |  |  |
| handicapped_certificate_card_status | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_fdate | date | YES |  | NULL |  |  |
| handicapped_certificate_card_ldate | date | YES |  | NULL |  |  |
| handicapped_certificate_card_note | char(50) | YES |  | NULL |  |  |
| handicapped_certificate_card_cid | char(15) | YES |  | NULL |  |  |
| person_deformed_refer_type_id | int(11) | YES | MUL | NULL |  |  |
| handicapped_patient_register_id | int(11) | YES |  | NULL |  |  |
| handicapped_certificate_equipment_id | int(11) | YES |  | NULL |  |  |
| handicapped_certificate_card_cfdate | date | YES |  | NULL |  |  |
| handicapped_certificate_card_cldate | date | YES |  | NULL |  |  |
| handicapped_certificate_card_status_equipment_id | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_equipment_note | char(50) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_Refperson_deformed_refer_type1 | person_deformed_refer_type_id | no | 1 |
| PRIMARY | handicapped_certificate_card_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
