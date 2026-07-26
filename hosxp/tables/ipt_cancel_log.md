# `ipt_cancel_log`

## Columns

| Column | Type | Null | Key | Default | Extra | Comment |
|---|---|---|---|---|---|---|
| ipt_cancel_log_id | int(11) | NO | PRI | 0 |  |  |
| an | varchar(9) | YES | MUL | NULL |  |  |
| cancel_datetime | datetime | YES |  | NULL |  |  |
| cancel_staff | varchar(50) | YES |  | NULL |  |  |
| cancel_reason_text | text | YES |  | NULL |  |  |

## Indexes

| Index | Column | Unique | Sequence |
|---|---|---|---|
| ix_an | an | no | 1 |
| PRIMARY | ipt_cancel_log_id | yes | 1 |

## Foreign keys

No declared foreign keys.

## Sample rows (8)

```json
[
  {
    "ipt_cancel_log_id": 191,
    "an": "660000154",
    "cancel_datetime": "2023-02-07 12:23:00",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "เปลี่ยนสิทธิ"
  },
  {
    "ipt_cancel_log_id": 192,
    "an": "660000348",
    "cancel_datetime": "2023-03-20 14:48:05",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "ยกเลิก"
  },
  {
    "ipt_cancel_log_id": 193,
    "an": "660000559",
    "cancel_datetime": "2023-05-15 07:55:00",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "ยกเลิก"
  },
  {
    "ipt_cancel_log_id": 194,
    "an": "660000559",
    "cancel_datetime": "2023-05-15 08:16:24",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "ยกเลิก\r\n"
  },
  {
    "ipt_cancel_log_id": 195,
    "an": "660000757",
    "cancel_datetime": "2023-06-22 13:58:24",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "]["
  },
  {
    "ipt_cancel_log_id": 196,
    "an": "660000942",
    "cancel_datetime": "2023-07-24 09:36:44",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "ลบ\r\n"
  },
  {
    "ipt_cancel_log_id": 197,
    "an": "660000941",
    "cancel_datetime": "2023-07-24 09:37:01",
    "cancel_staff": "yuwa211",
    "cancel_reason_text": "ลบ\r\n"
  },
  {
    "ipt_cancel_log_id": 198,
    "an": "660001498",
    "cancel_datetime": "2023-11-06 14:13:13",
    "cancel_staff": "yuwa210",
    "cancel_reason_text": "ผู้ปกครองไม่ขอ Admit"
  }
]
```
