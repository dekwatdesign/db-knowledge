# `rx_queue_dispense_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_queue_dispense_type_id | int(11) | NO | PRI | 0 |  |  |
| rx_queue_dispense_type_name | varchar(50) | YES |  | NULL |  |  |
| rx_queue_prefix | char(1) | YES |  | NULL |  |  |
| rx_queue_self_check_print_no | int(11) | YES |  | NULL |  |  |
| rx_queue_patient_print_no | int(11) | YES |  | NULL |  |  |
| rx_queue_user_enable | char(1) | YES |  | NULL |  |  |
| rx_queue_group_1 | char(1) | YES |  | NULL |  |  |
| rx_queue_group_2 | char(1) | YES |  | NULL |  |  |
| rx_queue_group_3 | char(1) | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| PRIMARY | rx_queue_dispense_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (1)

```json
[
  {
    "rx_queue_dispense_type_id": 99,
    "rx_queue_dispense_type_name": "ห้องตรวจ U",
    "rx_queue_prefix": "U",
    "rx_queue_self_check_print_no": null,
    "rx_queue_patient_print_no": 1,
    "rx_queue_user_enable": "Y",
    "rx_queue_group_1": null,
    "rx_queue_group_2": null,
    "rx_queue_group_3": "Y"
  }
]
```
