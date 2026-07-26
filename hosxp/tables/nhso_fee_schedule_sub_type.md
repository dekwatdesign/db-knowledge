# `nhso_fee_schedule_sub_type`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| nhso_fee_schedule_sub_type_id | int(11) | NO | PRI | 0 |  |  |
| nhso_fee_schedule_sub_type_name | varchar(200) | YES | UNI | NULL |  |  |
| nhso_fee_schedule_type_id | int(11) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_nhso_fee_schedule_sub_type_name | nhso_fee_schedule_sub_type_name | yes | 1 |
| ix_nhso_fee_schedule_type_id | nhso_fee_schedule_type_id | no | 1 |
| PRIMARY | nhso_fee_schedule_sub_type_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "nhso_fee_schedule_sub_type_id": 601,
    "nhso_fee_schedule_sub_type_name": "บริการยุติครรภ์ ด้วยยา",
    "nhso_fee_schedule_type_id": 6
  },
  {
    "nhso_fee_schedule_sub_type_id": 602,
    "nhso_fee_schedule_sub_type_name": "บริการยุติครรภ์ ด้วยกระบอกดูดสุญญากาศ (MVA)",
    "nhso_fee_schedule_type_id": 6
  },
  {
    "nhso_fee_schedule_sub_type_id": 603,
    "nhso_fee_schedule_sub_type_name": "บริการยุติครรภ์ ด้วยเครื่องดูดสุญญากาศไฟฟ้า (EVA)",
    "nhso_fee_schedule_type_id": 6
  },
  {
    "nhso_fee_schedule_sub_type_id": 701,
    "nhso_fee_schedule_sub_type_name": "เลนส์สายตาผิดปกติทั่วไป (Stock Lens)",
    "nhso_fee_schedule_type_id": 7
  },
  {
    "nhso_fee_schedule_sub_type_id": 702,
    "nhso_fee_schedule_sub_type_name": "เลนส์สายตาผิดปกติที่ต้องสั่งตัดพิเศษ (Lab Lens)",
    "nhso_fee_schedule_type_id": 7
  },
  {
    "nhso_fee_schedule_sub_type_id": 1301,
    "nhso_fee_schedule_sub_type_name": "คัดกรองปัจจัยเสี่ยงในช่องปาก ไม่ได้ทำ Biopsy",
    "nhso_fee_schedule_type_id": 13
  },
  {
    "nhso_fee_schedule_sub_type_id": 1302,
    "nhso_fee_schedule_sub_type_name": "คัดกรองปัจจัยเสี่ยงในช่องปาก และทำ Biopsy of Gum",
    "nhso_fee_schedule_type_id": 13
  },
  {
    "nhso_fee_schedule_sub_type_id": 1303,
    "nhso_fee_schedule_sub_type_name": "คัดกรองปัจจัยเสี่ยงในช่องปาก และทำ Biopsy of Alveolus",
    "nhso_fee_schedule_type_id": 13
  }
]
```
