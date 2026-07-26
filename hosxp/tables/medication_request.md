# `medication_request`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| medication_request_id | int(11) | NO | PRI | 0 |  |  |
| tp_code | varchar(20) | YES |  | NULL |  |  |
| gp_code | varchar(20) | YES |  | NULL |  |  |
| dispense_valid_start | date | YES |  | NULL |  |  |
| dispense_valid_end | date | YES |  | NULL |  |  |
| dispense_quantity_value | double(22,2) | YES |  | NULL |  |  |
| dispense_quantity_unit | varchar(15) | YES |  | NULL |  |  |
| dispense_supply_duration_value | int(11) | YES |  | NULL |  |  |
| dispense_supply_duration_unit | varchar(10) | YES |  | NULL |  |  |
| medication_note_text | varchar(1000) | YES |  | NULL |  |  |
| update_datetime | datetime | YES |  | NULL |  |  |
| medication_name_text | varchar(250) | YES |  | NULL |  |  |
| eprescription_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_eprescription_id | eprescription_id | no | 1 |
| PRIMARY | medication_request_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
