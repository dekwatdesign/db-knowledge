# `rx_queue_dispense_number`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_number_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_dispense_number_name | varchar(100) | YES |  | NULL |  |  |
| rx_queue_disp_type_number | int(11) | YES |  | NULL |  |  |
| order_no | int(11) | YES |  | NULL |  |  |
| chk_no_drug | char(1) | YES |  | NULL |  |  |
| chk_print_sticker | char(1) | YES |  | NULL |  |  |
| chk_dispenser_set | char(1) | YES |  | NULL |  |  |
| chk_verify_drug | char(1) | YES |  | NULL |  |  |
| chk_dispenser_dispensing | char(1) | YES |  | NULL |  |  |
| chk_check_drug_list | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rx_queue_dispense_number_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (0)

```json
[]
```
