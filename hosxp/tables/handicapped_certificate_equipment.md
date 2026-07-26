# `handicapped_certificate_equipment`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| handicapped_certificate_equipment_id | int(11) | NO | PRI | 0 |  |  |
| handicapped_certificate_equipment_fdate | date | YES |  | NULL |  |  |
| handicapped_certificate_equipment_ftime | time | YES |  | NULL |  |  |
| handicapped_certificate_equipment_ldate | date | YES |  | NULL |  |  |
| handicapped_certificate_equipment_hospcode | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_equipment_note | char(50) | YES |  | NULL |  |  |
| handicapped_certificate_equipment_amount | int(11) | YES |  | NULL |  |  |
| person_deformed_equipment_id | char(10) | YES |  | NULL |  |  |
| handicapped_certificate_card_id | char(10) | YES |  | NULL |  |  |
| hos_guid | varchar(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| PRIMARY | handicapped_certificate_equipment_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
