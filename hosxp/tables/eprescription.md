# `eprescription`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| eprescription_id | int(11) | NO | PRI | 0 |  |  |
| doctor_code | varchar(15) | YES | MUL | NULL |  |  |
| prescription_datetime | datetime | YES |  | NULL |  |  |
| prescription_item_count | int(11) | YES |  | NULL |  |  |
| prescription_item_text | varchar(1000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| hn | varchar(9) | YES | MUL | NULL |  |  |
| doctor_cert_id | int(11) | YES |  | NULL |  |  |
| vn | varchar(12) | YES |  | NULL |  |  |
| provider_id_token | varchar(5000) | YES |  | NULL |  |  |
| eprescription_organization_code | varchar(5) | YES |  | NULL |  |  |
| eprescription_type_id | int(11) | YES |  | NULL |  |  |
| eprescription_note_text | varchar(2000) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_doctor_code | doctor_code | no | 1 |
| ix_hn | hn | no | 1 |
| PRIMARY | eprescription_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
