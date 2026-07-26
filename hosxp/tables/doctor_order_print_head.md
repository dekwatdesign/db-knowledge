# `doctor_order_print_head`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| doph_id | int(11) | NO | PRI | 0 |  |  |
| vn | varchar(13) | YES | MUL | NULL |  |  |
| pttype | char(2) | YES | MUL | NULL |  |  |
| doctor_order_print_date_time | datetime | YES | MUL | NULL |  |  |
| printed | char(1) | YES | MUL | NULL |  |  |
| doctor | varchar(10) | YES |  | NULL |  |  |
| sticker_count | int(11) | YES |  | NULL |  |  |
| print_server | varchar(50) | YES | MUL | NULL |  |  |
| staff | varchar(50) | YES |  | NULL |  |  |
| computer_name | varchar(50) | YES |  | NULL |  |  |
| ward | varchar(6) | YES | MUL | NULL |  |  |
| print_mode | int(11) | YES |  | NULL |  |  |
| hos_guid | char(38) | YES | MUL | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_hos_guid | hos_guid | no | 1 |
| ix_print_datetime | doctor_order_print_date_time | no | 1 |
| ix_print_server | print_server | no | 1 |
| ix_print_server_printed | print_server | no | 1 |
| ix_print_server_printed | printed | no | 2 |
| ix_pttype_printed | pttype | no | 1 |
| ix_pttype_printed | printed | no | 2 |
| ix_pttype_printed_index | printed | no | 1 |
| ix_pttype_printed_index | pttype | no | 2 |
| ix_vn | vn | no | 1 |
| ix_ward | ward | no | 1 |
| PRIMARY | doph_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "doph_id": 1811918,
    "vn": "690000868",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:08:34",
    "printed": "N",
    "doctor": null,
    "sticker_count": 2,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811919,
    "vn": "690000868",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:08:34",
    "printed": "N",
    "doctor": null,
    "sticker_count": 4,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811920,
    "vn": "690000892",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:09:03",
    "printed": "N",
    "doctor": null,
    "sticker_count": 2,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811921,
    "vn": "690000892",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:09:03",
    "printed": "N",
    "doctor": null,
    "sticker_count": 4,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811922,
    "vn": "690000894",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:09:39",
    "printed": "N",
    "doctor": null,
    "sticker_count": 2,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811923,
    "vn": "690000894",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:09:39",
    "printed": "N",
    "doctor": null,
    "sticker_count": 4,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811924,
    "vn": "690000895",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:10:07",
    "printed": "N",
    "doctor": null,
    "sticker_count": 2,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  },
  {
    "doph_id": 1811925,
    "vn": "690000895",
    "pttype": null,
    "doctor_order_print_date_time": "2026-07-26 08:10:08",
    "printed": "N",
    "doctor": null,
    "sticker_count": 4,
    "print_server": "",
    "staff": "[MASKED_FULLNAME]",
    "computer_name": "S08000201-00057",
    "ward": null,
    "print_mode": null,
    "hos_guid": null
  }
]
```
