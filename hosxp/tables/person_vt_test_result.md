# `person_vt_test_result`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| person_vt_test_result_id | int(11) | NO | PRI | 0 |  |  |
| cid | varchar(13) | YES | MUL | NULL |  |  |
| person_vt_datetime | datetime | YES |  | NULL |  |  |
| person_vt_location_type_id | int(11) | YES |  | NULL |  |  |
| person_vt_type_id | int(11) | YES |  | NULL |  |  |
| person_vt_test_result_decimal | double(22,5) | YES |  | NULL |  |  |
| person_vt_test_result_text | varchar(200) | YES |  | NULL |  |  |
| officer_cid | varchar(13) | YES |  | NULL |  |  |
| person_vt_note | varchar(250) | YES |  | NULL |  |  |
| device_manufacturer | varchar(50) | YES |  | NULL |  |  |
| device_model | varchar(50) | YES |  | NULL |  |  |
| device_serial_no | varchar(50) | YES |  | NULL |  |  |
| location_latitude | varchar(50) | YES |  | NULL |  |  |
| location_longitude | varchar(50) | YES |  | NULL |  |  |
| ref_value1 | double(22,5) | YES |  | NULL |  |  |
| ref_value2 | double(22,5) | YES |  | NULL |  |  |
| ref_value3 | double(22,5) | YES |  | NULL |  |  |
| eval_text | varchar(200) | YES |  | NULL |  |  |
| location_address | varchar(150) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_cid | cid | no | 1 |
| ix_cid_date | cid | no | 1 |
| ix_cid_date | person_vt_datetime | no | 2 |
| PRIMARY | person_vt_test_result_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
