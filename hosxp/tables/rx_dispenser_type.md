# `rx_dispenser_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| rx_dispenser_type_id | int(11) | NO | PRI | 0 |  |  |
| rx_dispenser_type_name | varchar(200) | YES | UNI | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_rx_dispenser_type_name | rx_dispenser_type_name | yes | 1 |
| PRIMARY | rx_dispenser_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (4)

```json
[
  {
    "rx_dispenser_type_id": 2,
    "rx_dispenser_type_name": "ผู้จัดยา"
  },
  {
    "rx_dispenser_type_id": 4,
    "rx_dispenser_type_name": "ผู้จ่ายยา"
  },
  {
    "rx_dispenser_type_id": 3,
    "rx_dispenser_type_name": "ผู้ตรวจสอบยา"
  },
  {
    "rx_dispenser_type_id": 1,
    "rx_dispenser_type_name": "ผู้บันทึกรายการใบสั่งยา"
  }
]
```
