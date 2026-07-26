# `handicapped_certificate_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_type_id | char(11) | NO | PRI |  |  |  |
| handicapped_patient_register_group | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_type_refer_status | char(2) | YES |  | NULL |  |  |
| handicapped_certificate_type_refer_date | date | YES |  | NULL |  |  |
| handicapped_certificate_type_refer_hospcode | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_vision_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_mind_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_autism_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_move_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_ear_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_intelligence_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_learning_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_certificate_comment_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_patient_register_id | char(11) | YES | MUL | NULL |  |  |
| handicapped_head_id | char(11) | YES |  | NULL |  |  |
| handicapped_status_group | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |
| hos_guid_ext | varchar(64) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_hos_guid_ext | hos_guid_ext | no | 1 |
| ix_Refhandicapped_certificate20 | handicapped_patient_register_id | no | 1 |
| ix_Refhandicapped_certificate_autism14 | handicapped_certificate_autism_id | no | 1 |
| ix_Refhandicapped_certificate_comment19 | handicapped_certificate_comment_id | no | 1 |
| ix_Refhandicapped_certificate_ear16 | handicapped_certificate_ear_id | no | 1 |
| ix_Refhandicapped_certificate_Intelligence17 | handicapped_certificate_intelligence_id | no | 1 |
| ix_Refhandicapped_certificate_learning18 | handicapped_certificate_learning_id | no | 1 |
| ix_Refhandicapped_certificate_mind13 | handicapped_certificate_mind_id | no | 1 |
| ix_Refhandicapped_certificate_move15 | handicapped_certificate_move_id | no | 1 |
| ix_Refhandicapped_certificate_vision12 | handicapped_certificate_vision_id | no | 1 |
| PRIMARY | handicapped_certificate_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
