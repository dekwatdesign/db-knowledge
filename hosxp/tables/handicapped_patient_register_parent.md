# `handicapped_patient_register_parent`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_patient_register_parent_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_patient_register_parent_address | char(100) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_tel | char(15) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_pname | char(20) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_fname | char(50) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_lname | char(50) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_birthday | date | YES |  | NULL |  |  |
| code | char(10) | YES |  | NULL |  |  |
| marrystatus | char(10) | YES |  | NULL |  |  |
| parent_type_id | char(15) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_cid | char(15) | YES |  | NULL |  |  |
| handicapped_certificate_card_id | char(11) | YES |  | NULL |  |  |
| handicapped_patient_register_parent_images | blob | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_patient_register_parent_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
